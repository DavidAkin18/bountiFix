<template>
  <div class="app-container">
    <Navbar :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />
    
    <main class="content pt-20">
      <router-view :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />
    </main>

    <Footer :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      isDarkMode: false, // Initially set to false (light mode)
    };
  },
  created() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    this.isDarkMode = savedMode;
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      localStorage.setItem('darkMode', this.isDarkMode);
    },
  },
};
</script>


<style scoped>
/* 🛠 Ensure Full-Page Layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the app takes at least the full viewport height */
}

.content {
  flex-grow: 1; /* Pushes footer to the bottom */
  padding-bottom: 50px; /* Default padding */
}

/* 🛠 Apply 550px padding-bottom only for mobile screens */
@media (max-width: 768px) {
  .content {
    padding-bottom: 500px;
  }
}
</style>


