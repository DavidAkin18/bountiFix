<template>
    <div class="forums-card bg-white shadow-md rounded-lg p-6">
       <h3 class="text-2xl font-semibold mb-4">Forums & Discussions</h3>
       <p class="text-gray-500">Engage with other ethical hackers to share knowledge, best practices, and the latest security trends.</p>
       <router-link to="/forums" class="mt-4 text-blue-600 hover:underline">Join the Forum</router-link>
    </div>
 </template>
 
 <script>
 export default {
   name: 'ForumsAndDiscussions',
 };
 </script>
 
 <style scoped>
 .forums-card {
   background-color: var(--card-bg-color);
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 }
 
 .forums-card h3 {
   color: var(--primary-text-color);
   font-size: 1.25rem;
 }
 
 .forums-card p {
   color: var(--secondary-text-color);
   font-size: 1rem;
 }
 
 .forums-card a {
   font-size: 1rem;
   color: var(--link-color);
 }
 
 .forums-card a:hover {
   text-decoration: underline;
 }
 </style>
 