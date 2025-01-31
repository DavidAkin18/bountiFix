<template>
  <div :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}" class="h-screen">
    <Dashboard :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue';

export default {
  name: 'DashboardView',
  components: {
    Dashboard,
  },
  props: {
    isDarkMode: Boolean,
    toggleDarkMode: Function,
  },
};
</script>
