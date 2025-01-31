<template>
    <div class="home">
     <SignUp/>
  
    </div>
  </template>
  
  <script>
  import SignUp from '@/components/Auth/SignUp.vue';
  
  
  // @ is an alias to /src
  
  export default {
    name: 'HomeView',
    components: {
      
      SignUp
    }
  }
  </script>
  