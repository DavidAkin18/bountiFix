<template>
    <div :class="{'dark': isDarkMode}">
      <div class="bg-[#dde9f1] FAQ dark:bg-gray-900 text-gray-800 my-2">
        <div class="max-w-5xl mx-auto px-6 py-10">
          
          <h1 class="text-3xl font-bold text-center mb-6">Contact Us</h1>
          
          <form @submit.prevent="handleSubmit" class="bg-white dark:bg-gray-800 p-8  rounded-lg">
            <label class="block mb-2">
              <span class="text-gray-700 dark:text-white">Your Name</span>
              <input type="text" class="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" v-model="name" />
            </label>
  
            <label class="block mb-2">
              <span class="text-gray-700 dark:text-white">Your Email</span>
              <input type="email" class="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" v-model="email" />
            </label>
  
            <label class="block mb-2">
              <span class="text-gray-700 dark:text-white">Message</span>
              <textarea class="mt-1 p-3 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600" v-model="message" rows="4"></textarea>
            </label>
  
            <button type="submit" class="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isDarkMode: Boolean
    },
    data() {
      return {
        name: '',
        email: '',
        message: ''
      };
    },
    methods: {
      handleSubmit() {
        alert('Message Sent!');
        this.name = '';
        this.email = '';
        this.message = '';
      }
    }
  };
  </script>

<style scoped>
  .contact{
    background-color: #ecf1f5;
  }
</style>
  