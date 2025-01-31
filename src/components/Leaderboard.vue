<template>
  <div :class="{'bg-gray-900 text-white': isDarkMode, 'bg-white text-black': !isDarkMode}" class=" pt-20 max-w-6xl mx-auto px-6">
    <h1 class="text-3xl font-bold mb-6">Leaderboard</h1>
    <ul class="space-y-4">
      <li v-for="(user, index) in leaderboard" :key="index" :class="{'bg-gray-800 dark:bg-gray-700': isDarkMode, 'bg-gray-100': !isDarkMode}" class="p-4 rounded flex justify-between">
        <span>{{ user.name }}</span>
        <span>${{ user.earnings }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isDarkMode: Boolean,
    toggleDarkMode: Function,
  },
  data() {
    return {
      leaderboard: [
        { name: "HackerX", earnings: 10000 },
        { name: "BugHunter", earnings: 8500 },
        { name: "CyberNinja", earnings: 7200 },
      ],
    };
  },
};
</script>
