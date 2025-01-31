<template>
    <div :class="{'dark': isDarkMode}">
      <div class="bg-[#dde9f1] FAQ dark:bg-gray-900 text-gray-800 ">
        <div class="max-w-5xl mx-auto px-6 py-16">
          
          <h1 class="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h1>
  
          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <button 
                @click="toggleFAQ(index)" 
                class="flex justify-between w-full text-lg font-medium text-left"
              >
                <span>{{ faq.question }}</span>
                <span :class="faq.open ? 'rotate-180' : 'rotate-0'" class="transition-transform">▼</span>
              </button>
              <p v-if="faq.open" class="mt-2 text-gray-600 dark:text-gray-300">{{ faq.answer }}</p>
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
    },
    data() {
      return {
        faqs: [
          { question: "What is Bountifix?", answer: "Bountifix is a bug bounty platform that connects ethical hackers with companies.", open: false },
          { question: "How can I participate?", answer: "Sign up, join programs, and start reporting security vulnerabilities.", open: false },
          { question: "Is Bountifix free?", answer: "For hackers, yes. Companies may have paid plans to host programs.", open: false },
          { question: "How do I get paid?", answer: "Payments are made via bank transfer, PayPal, or crypto once a vulnerability is validated.", open: false },
        ]
      };
    },
    methods: {
      toggleFAQ(index) {
        this.faqs[index].open = !this.faqs[index].open;
      }
    }
  };
  </script>
<style>
  .FAQ{
    background-color: #dde9f1;
  }
</style>