<template>
  <div :class="{'dark': isDarkMode}" class="relative w-full h-screen">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-cover bg-center" 
      :style="{ backgroundImage: 'url(https://t3.ftcdn.net/jpg/07/53/20/82/360_F_753208233_2tFjybdyLCTU12MEJfguSJKBtl0sG5pj.jpg)' }"
    >
      <!-- Overlay for better readability -->
      <div class="absolute inset-0 bg-black opacity-50 flex justify-between items-center"></div>
       
    </div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center text-center h-full text-white px-6">
      
      <h1 class="text-4xl md:text-5xl font-bold">
        Welcome to <span class="text-blue-400">Bountifix</span>
      </h1>
      <p class="text-lg md:text-xl mt-3">
        Discover vulnerabilities, earn rewards, and secure the web.
      </p>

      <!-- Buttons -->
      <div class="flex justify-center mt-8 space-x-4">
        <router-link to="/signUp" class="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
          Get Started
        </router-link>
        <router-link to="login" class="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-md shadow-md hover:bg-gray-300 dark:hover:bg-gray-600">
          login
        </router-link>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>
