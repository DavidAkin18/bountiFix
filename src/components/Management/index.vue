<template>
    <nav 
        class=" fixed-header fixed z-50 top-0 left-64 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md">
        
        <!-- App Name -->
        <h1 class="text-xl font-semibold">Vulnerability Reporting</h1>

        <!-- User Avatar -->
        <div class="flex items-center space-x-4">
        <img src="" class="h-10 w-10 rounded-full object-cover" alt="User Avatar">
        </div>
    </nav>
    <div class="report-management max-w5xl mx-auto z-0 border px-6 md:px-20 pt-10 md:pt-28 transition-colors duration-300">
      <Triage />
      <StatusTracking />
      <Commenting />
      <Attachments />
    </div>
  </template>
  
<script>
  
import Attachments from './Attachments.vue';
import StatusTracking from './StatusTracking.vue';
import Commenting from './Commenting.vue';
import Triage from './Triage.vue';
  
  export default {
    components: {
      Triage,
      StatusTracking,
      Commenting,
      Attachments,
    },
  };
  </script>
  
  <style scoped>
  .report-management {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .fixed-header {
    z-index: 9999; /* Custom z-index value */
  }
  </style>
  