<script setup>
import AddClient from '@/components/AddClient.vue'
import LoadingPage from '../components/LoadingPage.vue';
import {ref,onMounted} from 'vue'
let showSpinner = ref(true);
onMounted(() => {
  setTimeout(() => {
    showSpinner.value = false;
  }, 1000);
});

</script>

<template>
  <div>
    <div v-if="showSpinner">
      <LoadingPage />
    </div>
    <div v-else>
      <AddClient />
    </div>
   
    
  </div>
</template>