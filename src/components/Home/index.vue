<template>
    <div>
      <Hero />
      <About />
      <HowItWork />
      
      <!-- FAQ & Contact Section -->
      <div class="faq-contact-section">
        <FAQ class="w-1/2 px-4" />
        <Contact class="w-1/2 px-4" />
      </div>
    </div>
  </template>
  
  <script>
  import About from './About.vue';
  import Contact from './Contact.vue';
  import FAQ from './FAQ.vue';
  import Hero from './Hero.vue';
  import HowItWork from './HowItWork.vue';
  
  export default {
    components: {
      About,
      Contact,
      FAQ,
      HowItWork,
      Hero,
    },
  };
  </script>
  
  <style scoped>
 
  .faq-contact-section {
    /* background-color: #dde9f1;  */
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 72rem; 
    margin: 0 auto; 
    border-radius: 5px; 
  }
  
  /* Ensure responsiveness */
  @media (max-width: 768px) {
    .faq-contact-section {
      flex-direction: column;
      text-align: center;
      padding: 0;
    }
    
    .faq-contact-section > * {
      width: 100%;
    }
  }
  </style>
  