<script setup>
import DataList from '@/components/DataList.vue';
import {ref,onMounted} from 'vue'
import LoadingPage from '../components/LoadingPage.vue';
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
      <DataList />
    </div>
   
  </div>
</template>