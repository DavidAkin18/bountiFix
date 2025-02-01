<template>
    <nav class="fixed-header fixed z-50 top-0 left-64 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md">
       <!-- App Name -->
       <h1 class="text-xl font-semibold">Community Features</h1>
 
       <!-- User Avatar -->
       <router-link to="/bio" class="flex items-center space-x-4">
        <img
          :src="userProfile.profilePicture "
          class="h-10 w-10 rounded-full object-cover"
          alt="User Avatar"
        />
        <span class="text-sm font-semibold">{{ fullName }}</span>
       </router-link>
    </nav>
 
    <div class="report-management max-w5xl mx-auto z-0  px-6  pt-10 md:pt-28 transition-colors duration-300">
       <div class="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <ForumsAndDiscussions class="sm:w-1/3 w-full" />
          <KnowledgeBase class="md:w-1/3 w-full" />
          <MentorshipProgram class="md:w-1/3 w-full" />
       </div>
    </div>
 </template>
 
<script>
import { mapState } from 'vuex';

import ForumsAndDiscussions from './ForumsAndDiscussions.vue';
import KnowledgeBase from './KnowledgeBase.vue';
import MentorshipProgram from './MentorshipProgram.vue';
 
 export default {
   components: {
     ForumsAndDiscussions,
     KnowledgeBase,
     MentorshipProgram,
   },
   computed: {
      ...mapState({
        userProfile: state => state.profile,
      }),
      fullName() {
        return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
      },
    },
 };
 </script>
 
 <style scoped>
 .community-features {
   background-color: var(--card-bg-color);
   padding: 1.5rem;
   border-radius: 8px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
 }
 
 /* Responsive Flex layout for larger screens */
 @media (min-width: 768px) {
   .community-features {
     display: flex;

     flex-direction: column;
     gap: 2rem;
   }
 
   .w-full {
     width: 100%;
   }
 
   .lg\:w-1\/3 {
     width: 33.3333%;
   }
 
   .lg\:mt-10 {
     margin-top: 2.5rem;
   }
 }
 
 /* Flex layout for small to medium screens */
 @media (max-width: 912px) {
  
 
   .gap-6 {
     gap: 1.5rem;
   }
 
   .lg\:gap-10 {
     gap: 2rem;
   }
 }
 </style>
 