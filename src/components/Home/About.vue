<template>
    <div :class="{'dark': isDarkMode}" class="border">
      <div class="bg-[#ffffff] dark:bg-gray-900 text-gray-800 dark:text-white ">
        <div class="max-w-5xl mx-auto px-6 py-16">
          
          <h1 class="text-3xl font-bold text-center mb-6">
            About <span class="text-blue-500">Bountifix</span>
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center">
            Bountifix is a platform that connects ethical hackers with companies looking to secure their systems.
            Our mission is to make the internet a safer place while rewarding security researchers.
          </p>
  
          <div class="mt-12">
            <img src="https://www.raventa.com/wp-content/uploads/2018/07/raventa-strategy.jpg" alt="About Us" class="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isDarkMode: Boolean
    }
  };
  </script>
  