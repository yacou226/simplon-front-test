<!-- src/components/LoadingPage.vue -->
<template>
  <div  class="flex justify-center items-center h-screen">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-16 w-16"></div>
  </div>
</template>

<script setup>

</script>

<style>
.loader {
  border-top-color: #38b2ac;
  border-bottom-color: #38b2ac;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
