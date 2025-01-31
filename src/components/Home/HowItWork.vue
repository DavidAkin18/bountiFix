<template>
    <div class="how-it-works" :class="{'dark': isDarkMode}">
      <div class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white ">
        <div class="max-w-6xl mx-auto px-6 py-16">
          
          <h1 class="text-3xl font-bold text-center mb-6">How <span class="text-blue-500">It Works</span></h1>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 class="text-xl font-bold">🕵️ Ethical Hackers</h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">
                Sign up, find vulnerabilities, and get rewarded.
              </p>
            </div>
  
            <div class="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 class="text-xl font-bold">🏢 Companies</h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">
                Post security programs and work with top researchers.
              </p>
            </div>
  
            <div class="p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <h3 class="text-xl font-bold">💰 Get Paid</h3>
              <p class="text-gray-600 dark:text-gray-300 mt-2">
                Receive payouts for valid bug reports.
              </p>
            </div>
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
  