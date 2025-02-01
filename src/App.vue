<template>
  <div class="app-container">
    <!-- Large Screen Sidebar, only if not on authentication routes -->
    <Sidebar v-if="!isMobile && !isAuthPage" />

    <!-- Main Content -->
    <div class="main-content" :style="{ paddingLeft: isAuthPage || isMobile ? '0' : '250px' }">
      <!-- Mobile Sidebar, only if not on authentication routes -->
      <MobileSidebar v-if="isMobile && !isAuthPage" :isOpen="isMobileMenuOpen" @close="isMobileMenuOpen = false" />
      <router-view />
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';  // Import useRoute to access current route
import Sidebar from '@/components/Sidebar.vue';
import MobileSidebar from '@/components/MobileSidebar.vue';
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Sidebar,
    MobileSidebar,
    Navbar
  },
  setup() {
    const isMobile = ref(window.innerWidth <= 768); // Track if screen is mobile
    const isMobileMenuOpen = ref(false); // Track mobile sidebar state
    const route = useRoute(); // Get the current route

    // List of authentication paths to check against
    const authPaths = ['/','/signUp', '/reset', '/login', '/complete'];

    // Function to check if the current route is one of the authentication paths
    const isAuthPage = computed(() => authPaths.includes(route.path));

    // Function to check screen size
    const checkScreenSize = () => {
      isMobile.value = window.innerWidth <= 768;
    };

    // Add event listener on mount
    onMounted(() => {
      window.addEventListener('resize', checkScreenSize);
    });

    // Remove event listener on unmount
    onUnmounted(() => {
      window.removeEventListener('resize', checkScreenSize);
    });

    return { isMobile, isMobileMenuOpen, isAuthPage };
  }
};
</script>

<style scoped>
.app-container {
  display: flex;
}

/* Sidebar hidden on mobile */
.main-content {
  flex-grow: 1;
  transition: padding-left 0.3s ease; /* Smooth transition for padding change */
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .main-content {
    padding-left: 0;
  }
}
</style>
