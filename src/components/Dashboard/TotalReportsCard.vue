<!-- TotalReportsCard.vue -->
<template>
    <div :class="{'bg-gray-100 text-black': !isDarkMode, 'bg-gray-700 text-white': isDarkMode}"
      class="p-4 rounded-lg shadow-lg flex justify-between items-center transition-all duration-300 pt-28">
      <div>
        <p class="font-semibold">Total Reports</p>
        <h2 class="text-2xl">{{ totalReports }}</h2>
      </div>
      <i class="ri-file-list-line text-3xl"></i>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      totalReports: Number,
      isDarkMode: Boolean
    }
  };
  </script>
  
  <style scoped>
  /* Transition for smooth background and text color change */
  * {
    transition: background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
  }
  </style>
  