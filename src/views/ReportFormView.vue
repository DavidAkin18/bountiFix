<template>
    <div :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}" class="h-screen">
     <ReportForm :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />
    </div>
  </template>
  
<script>
    import ReportForm from '@/components/ReportForm.vue';
  
    export default {
        name: 'HomeView',
        components: {
        ReportForm
        },
        props: {
            isDarkMode: Boolean,
            toggleDarkMode: Function,
        },
    }
</script>