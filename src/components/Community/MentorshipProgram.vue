<template>
    <div class="mentorship-card bg-white shadow-md rounded-lg p-6">
       <h3 class="text-2xl font-semibold mb-4">Mentorship Program</h3>
       <p class="text-gray-500">Experienced hackers provide guidance and mentorship to newcomers in the ethical hacking community.</p>
       <router-link to="/mentorship" class="mt-4 text-blue-600 hover:underline">Become a Mentor</router-link>
    </div>
 </template>
 
 <script>
 export default {
   name: 'MentorshipProgram',
 };
 </script>
 
 <style scoped>
 .mentorship-card {
   background-color: var(--card-bg-color);
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 }
 
 .mentorship-card h3 {
   color: var(--primary-text-color);
   font-size: 1.25rem;
 }
 
 .mentorship-card p {
   color: var(--secondary-text-color);
   font-size: 1rem;
 }
 
 .mentorship-card a {
   font-size: 1rem;
   color: var(--link-color);
 }
 
 .mentorship-card a:hover {
   text-decoration: underline;
 }
 </style>
 