<template>
    <div :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}"  class="h-screen">
     <Leaderboard :is-dark-mode="isDarkMode" :toggle-dark-mode="toggleDarkMode"/>
    </div>
</template>
  
<script>
import Leaderboard from '@/components/Leaderboard.vue';
  
  // @ is an alias to /src
  
  export default {
    name: 'HomeView',
    props: {
      isDarkMode: Boolean,
      toggleDarkMode: Function,
    },
    components: {
      Leaderboard
    }
  }
</script>