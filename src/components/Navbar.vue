<template>
  <nav :class="{'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode}"
       class="fixed top-0 left-64 right-0 h-16 flex justify-between items-center px-6 shadow-md">
    
    <!-- App Name -->
    <h1 class="text-xl font-semibold">Dashboard</h1>

    <!-- User Avatar -->
    <div class="flex items-center space-x-4">
      <button @click="toggleDarkMode" class="text-xl focus:outline-none">
        <i v-if="isDarkMode" class="ri-sun-fill text-yellow-400"></i>
        <i v-else class="ri-moon-fill text-gray-500"></i>
      </button>
      <img src="" class="h-10 w-10 rounded-full object-cover" alt="User Avatar">
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    isDarkMode: Boolean,
    toggleDarkMode: Function,
  }
};
</script>

<style scoped>
nav {
  height: 64px;
  z-index: 50;
}
</style>
