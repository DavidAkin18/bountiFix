<template>
    <div class="dark-part flex flex-col lg:flex-row items-center gap-8 lg:gap-0 lg:justify-center  pt-24 lg:bg-gray-200">
      
      <div class=" w-full md:w-3/4 p-2 ">
         
          <div class="bg-white w-full lg:w-4/6 mx-auto lg:mt-20 p-4 lg:py-20 space-y-2  lg:p-12 md:shadow-lg md:rounded-xl">
              <h2 class="font-bold text-2xl" >Reset Your Password</h2>
              <p class="text-gray-700 text-sm">To request a new password, enter your email </p>
              <form action="" @submit.prevent="passwordSuccessful" class="space-y-6 w-full" >
                  <div>
                      <label for="email" class="block text-gray-700 text-sm font-bold mb-2">
                          Enter email address
                      </label>
                      <input
                          type="email"
                          id="email"
                          v-model="email"
                          placeholder="Your email address"
                          class="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                      />
                      <p class="text-red-400">{{ emailError }}</p>
                  </div>
                  <div class="w-full text-left flex justify-between items-center">
                      <button type="submit"  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow focus:outline-none focus:ring focus:ring-blue-200 text-right ">
                          Continue
                      </button>
                  
                  </div>
              </form>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  
  
  export default {
    data() {
      return {
        email: '',
        emailError: '',
      };
    },
    methods: {
      passwordSuccessful() {
        if (this.email.trim() === '') {
          this.emailError = 'Please enter a valid email address';
        } else {
          this.emailError = '';
          this.$router.push('/complete');
        }
      },
    },
  };
  </script>
  
  <style>
  </style>
  