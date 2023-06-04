<script setup>
import { ref } from 'vue'
import axios from 'axios'
const clientData = ref({
  lastname: '',
  firstname: '',
  phone: '',
  email: ''
});
const message = ref('');
const showMessage = ref(false);
const showErrorMessage = ref(false);
const emptyMessage = ref('');

function sucessMessage() {
  showMessage.value = !showMessage.value;
  setTimeout(() => {
    showMessage.value = false;
  }, 2000);
}

function ErrorMessage() {
  message.value = 'erreur du server';
  showErrorMessage.value = !showErrorMessage.value;
  setTimeout(() => {
    showErrorMessage.value = false;
  }, 2000);
}
async function AddClient() {
  if (clientData.value.lastname == '' || clientData.value.firstname == '' || clientData.value.phone == '' || clientData.value.email == '') {
    emptyMessage.value = 'Veillez saisir tout les champs';
    setTimeout(() => {
      emptyMessage.value = ''
    }, 5000);
  }else{
      // try {
  axios.post('https://simplon-backend-test-8tkj.vercel.app/api/v1/create', clientData.value,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      },
    }
  ).then((response) => {
    message.value = response.data.message;
    sucessMessage()
    clientData.value = {
      lastname: '',
      firstname: '',
      phone: '',
      email: ''
    };
    // sucessMessage();
  }).catch(error => {
          // Handle any errors that occurred during the API request
          message.value = 'Error fetching data.';
        });

  }









}
</script>

<template>
  <div>
    <!-- component -->
    <div class="h-screen md:flex">
      <!-- cover -->
      <div
        class="relative overflow-hidden max-w-full md:w-1/2  md:flex  bg-gradient-to-tr from-black to-black i justify-around items-center ">
        <img class="" src="../assets/simplon.png" alt="">
      </div>
      <!-- formulaire -->
      <div class="flex md:w-2/3 m-6 justify-center md:py-10 items-center bg-white">
        <div>
          <div v-if="showMessage" class="slide-left w-full text-white bg-emerald-500 mb-6">
            <div class="container flex items-center justify-between px-6 py-4 mx-auto">
              <div class="flex">
                <svg viewBox="0 0 40 40" class="w-6 h-6 fill-current">
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z">
                  </path>
                </svg>

                <p class="mx-3">{{ message }}</p>
              </div>

              <button
                class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          <div v-if="showErrorMessage" class="slide-left w-full text-white bg-red-500 mb-6">
            <div class="container flex items-center justify-between px-6 py-4 mx-auto">
              <div class="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p class="mx-3">{{ message }}</p>
              </div>

              <button
                class="p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
              </button>
            </div>
          </div>


          
          <form @submit.prevent="AddClient" class="bg-white ">
            <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello .</h1>
            <p class="text-sm font-normal text-gray-600 mb-7">Bienvenue,veillez renseignez tout les champs pour etre sur
              la liste</p>
              <span class="text-red-800">{{emptyMessage}}</span>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
              <input v-model="clientData.lastname" class="pl-2 outline-none border-none" type="text" name="" id=""
                placeholder="nom" />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="w-5 h-5 text-gray-400">
                <path
                  d="M10 8a3 3 0 100-6 3 3 0 000 6zM3.465 14.493a1.23 1.23 0 00.41 1.412A9.957 9.957 0 0010 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 00-13.074.003z" />
              </svg>


              <input v-model="clientData.firstname" class="pl-2 outline-none border-none" type="text" name="" id=""
                placeholder="prénom" />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input v-model="clientData.email" class="pl-2 outline-none border-none" type="text" name="" id=""
                placeholder="email " />
            </div>
            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
</svg>

              <input v-model="clientData.phone" class="pl-2 outline-none border-none" type="tel" name="" id=""
                placeholder="téléphone" />
            </div>
            <button type="submit"
              class="block w-full bg-red-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">L'enregistrer</button>
          </form>
          <RouterLink to="/clientList">
            <button class="block w-full bg-black mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Voir la
              liste</button>
          </RouterLink>

        </div>



      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-left {
  animation: slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940);
}

/* ----------------------------------------------
 * Generated by Animista on 2023-6-4 2:59:17
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-left
 * ----------------------------------------
 */
/* ----------------------------------------------
 * Generated by Animista on 2023-6-4 3:1:23
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-left
 * ----------------------------------------
 */
@keyframes slide-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100px);
  }
}
</style>
