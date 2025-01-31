<template>
  <nav :class="{'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode}" class="p-4 mx-auto md:px-20 w-full fixed top-0 z-[1000] shadow-md">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <!-- Logo -->
      <div class="text-2xl font-bold hover:text-blue-500 dark:text-white">
        <router-link to="/">
          <img v-if="isDarkMode" src="../assets/images/darkLogo.png" class="logo rounded-lg" alt="">
          <img v-else src="../assets/images/lightLogo.png" class="logo rounded-lg" alt="">
        </router-link>
      </div>

      <!-- Navbar Links (Desktop) -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="nav-link" :class="{'active': isActive('/')}" >Home</router-link>
        <router-link to="/dashboard" class="nav-link" :class="{'active': isActive('/dashboard')}">Dashboard</router-link>
        <router-link to="/leaderboard" class="nav-link" :class="{'active': isActive('/leaderboard')}">Leaderboard</router-link>
        <router-link to="/report-form" class="nav-link" :class="{'active': isActive('/report-form')}">Report Form</router-link>
        
        <!-- Dark Mode Toggle -->
        <button @click="toggleDarkMode" class="text-xl rounded focus:outline-none">
          <i v-if="isDarkMode" class="ri-sun-fill text-yellow-400"></i>
          <i v-else class="ri-contrast-2-fill text-gray-400"></i>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMobileMenu" class="text-xl md:hidden">
        <i :class="{'text-black': !isDarkMode, 'text-white': isDarkMode}" class="ri-menu-line"></i>
      </button>
    </div>

    <!-- Mobile Menu (Right Sidebar) -->
    <div 
      v-if="isMobileMenuOpen" 
      :class="{
        'bg-gray-900 text-white': isDarkMode,
        'bg-white text-black': !isDarkMode
      }"
      class="mobile-menu"
    >
      <router-link to="/" class="nav-link" :class="{'active': isActive('/')}" >Home</router-link>

      <router-link to="/dashboard" class="nav-link" :class="{'active': isActive('/dashboard')}" @click="closeMobileMenu">Dashboard</router-link>
      <router-link to="/leaderboard" class="nav-link" :class="{'active': isActive('/leaderboard')}" @click="closeMobileMenu">Leaderboard</router-link>
      <router-link to="/report-form" class="nav-link" :class="{'active': isActive('/report-form')}" @click="closeMobileMenu">Report Form</router-link>
      
      <!-- Dark Mode Toggle -->
      <button @click="toggleDarkMode" class="text-3xl">
        <i v-if="isDarkMode" class="ri-sun-fill text-yellow-400"></i>
        <i v-else class="ri-contrast-2-fill text-gray-400"></i>
      </button>

      <!-- Close Button -->
      <button @click="closeMobileMenu" class="absolute top-5 left-5 text-3xl">
        <i class="ri-close-line"></i>
      </button>
    </div>

    <!-- Background Overlay -->
    <div v-if="isMobileMenuOpen" class="overlay" @click="closeMobileMenu"></div>
  </nav>
</template>

<script>
export default {
  props: {
    isDarkMode: Boolean,
    toggleDarkMode: Function,
  },
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false;
    },
    isActive(route) {
      return this.$route.path === route;
    }
  },
};
</script>

<style scoped>
/* Smooth transition for all elements */
* {
  transition: all 0.3s ease;
}

/* Navbar always on top */
nav {
  z-index: 60;
}

/* Logo styling */
.logo {
  max-width: 100%;
  height: auto;
  max-height: 50px;
  object-fit: contain;
}

/* Desktop Navbar Links */
.nav-link {
  font-size: 1.125rem;
  font-weight: 600;
  color: inherit;
  transition: color 0.3s;
  position: relative;
}

/* Active Link Highlight */
.nav-link.active::after,
.mobile-link.active::after {
  content: '';
  display: block;
  width: 100%;
  height: 3px;
  background-color: #3b82f6; /* Blue-500 */
  position: absolute;
  bottom: -2px;
  left: 0;
}

.dark .nav-link.active::after,
.dark .mobile-link.active::after {
  background-color: #facc15; /* Yellow-400 */
}

/* Mobile Menu (Right Sidebar) */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0; /* Now on the right */
  width: 30%; /* Reduced width */
  height: 100vh; /* Full height */
  z-index: 70;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
}

/* Mobile Menu Links */
.mobile-link {
  font-size: 1.5rem;
  font-weight: 700;
  transition: color 0.3s;
  position: relative;
}

.mobile-link:hover {
  color: #3b82f6;
}

/* Background Overlay (Covers 70% of the screen) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 60; /* Just below mobile menu */
}

/* Responsive Design */
@media (max-width: 768px) {
  .mobile-menu {
    width: 60%; /* Slightly wider for smaller screens */
  }
  .overlay {
    width: 40%; /* Cover remaining screen */
  }
}
</style>
