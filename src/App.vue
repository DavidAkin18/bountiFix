<template>
  <div :class="{'dark': isDarkMode}" class="h-screen">
    <Navbar :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" />

    <router-view :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode" class="pt-20" />

    <!-- <Footer :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode"   /> -->
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';


export default {
  components:{
    Navbar, Footer
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
