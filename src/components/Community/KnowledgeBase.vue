<template>
    <div class="knowledge-base-card bg-white shadow-md rounded-lg p-6">
       <h3 class="text-2xl font-semibold mb-4">Knowledge Base</h3>
       <p class="text-gray-500">Browse our collection of tutorials, FAQs, and guidelines to improve your ethical hacking skills.</p>
       <router-link to="/knowledge-base" class="mt-4 text-blue-600 hover:underline">Explore Knowledge Base</router-link>
    </div>
 </template>
 
 <script>
 export default {
   name: 'KnowledgeBase',
 };
 </script>
 
 <style scoped>
 .knowledge-base-card {
   background-color: var(--card-bg-color);
   border-radius: 8px;
   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
 }
 
 .knowledge-base-card h3 {
   color: var(--primary-text-color);
   font-size: 1.25rem;
 }
 
 .knowledge-base-card p {
   color: var(--secondary-text-color);
   font-size: 1rem;
 }
 
 .knowledge-base-card a {
   font-size: 1rem;
   color: var(--link-color);
 }
 
 .knowledge-base-card a:hover {
   text-decoration: underline;
 }
 </style>
 