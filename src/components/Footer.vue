<template>
    <footer class="bg-[#4559ed] footer  py-10">
      <div class="max-w-6xl mx-auto px-6">
        
        <div class="grid md:grid-cols-3 gap-6">
          <!-- Left: About -->
          <div class="space-y-4">
            <img src="../assets/images/darkLogo.png" class="logo rounded-lg" alt="logo">
            <h3 class="text-xl font-bold">About Bountifix</h3>
            <p class="mt-2 text-gray-300 ">
              A bug bounty platform for ethical hackers and companies to secure applications.
            </p>
          </div>
  
          <!-- Center: Quick Links -->
          <div>
            <h3 class="text-xl font-bold">Quick Links</h3>
            <ul class="mt-2 space-y-2">
              <li><router-link to="#" class="hover:text-blue-500 text-gray-300 ">About Us</router-link></li>
              <li><router-link to="#" class="hover:text-blue-500 text-gray-300 ">FAQs</router-link></li>
              <li><router-link to="#" class="hover:text-blue-500 text-gray-300 ">Contact</router-link></li>
              <li>
                <router-link to="#" class="hover:text-blue-500 text-gray-300 ">Terms & Conditions</router-link>  
              </li>
            </ul>
          </div>
  
          <!-- Right: Social Media -->
          <div>
            <h3 class="text-xl font-bold">Follow Us</h3>
            <div class="flex space-x-4 mt-2">
              <a href="#" class="text-gray-300  hover:text-blue-500"><i class="ri-facebook-box-line text-2xl"></i></a>
              <a href="#" class="text-gray-300  hover:text-blue-500"><i class="ri-twitter-line text-2xl"></i></a>
              <a href="#" class="text-gray-300  hover:text-blue-500"><i class="ri-linkedin-box-line text-2xl"></i></a>
              <a href="#" class="text-gray-300  hover:text-blue-500"><i class="ri-github-line text-2xl"></i></a>
            </div>
          </div>
        </div>
  
        <!-- Bottom -->
        <div class="mt-10 text-center text-gray-200  text-sm">
          &copy; {{ new Date().getFullYear() }} Bountifix. All Rights Reserved.
        </div>
  
      </div>
    </footer>
  </template>
  
  <script>
  export default {
   
  };
  </script>
<style scoped>
  .footer{
    background-color: #555b6e ;
    color:white;
  }
  .logo{
    max-width: 100%;   
    height: auto;    
    max-height: 50px;  
    object-fit: contain; 
  }
</style>
  