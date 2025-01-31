<template>
  <div
    :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}"
    class="mt-20 max-w-6xl mx-auto px-6 my-44 transition-colors duration-300"
  >
    <!-- Hacker Profile -->
    <div class="flex items-center space-x-4 mb-8">
      <img
        :src="hackerImage"
        alt="Hacker Profile"
        class="w-16 h-16 rounded-full object-cover border-2"
        :class="{'border-gray-300': !isDarkMode, 'border-gray-600': isDarkMode}"
      />
      <div>
        <h2 class="text-2xl font-bold">{{ hackerName }}</h2>
        <p class="text-gray-500 dark:text-gray-400">Ethical Hacker</p>
      </div>
    </div>

    <!-- Dashboard Stats -->
    <h1 class="text-3xl font-bold mb-6">Dashboard</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Total Reports -->
      <router-link to="/my-reports">
        <div class="dashboard-card">
          <div>
            <p class="font-semibold">Total Reports</p>
            <h2 class="text-2xl">{{ totalReports }}</h2>
          </div>
          <i class="ri-file-list-line text-3xl"></i>
        </div>
      </router-link>

      <!-- Resolved Reports -->
      <div class="dashboard-card">
        <div>
          <p class="font-semibold">Resolved Reports</p>
          <h2 class="text-2xl">{{ resolvedReports }}</h2>
        </div>
        <i class="ri-check-line text-3xl"></i>
      </div>

      <!-- Earnings -->
      <router-link to="/payments">
        <div class="dashboard-card">
          <div>
            <p class="font-semibold">Earnings</p>
            <h2 class="text-2xl">${{ earnings }}</h2>
          </div>
          <i class="ri-money-dollar-circle-line text-3xl"></i>
        </div>
      </router-link>
    </div>

    <!-- Navigation Links -->
    <div class="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
      <router-link to="/leaderboard" class="nav-card">
        <i class="ri-trophy-line text-2xl"></i> Leaderboard
      </router-link>
      <router-link to="/payments" class="nav-card">
        <i class="ri-bank-card-line text-2xl"></i> Payouts
      </router-link>
      <router-link to="/bio" class="nav-card">
        <i class="ri-user-line text-2xl"></i> My Profile
      </router-link>
    </div>

    <!-- Notifications -->
    <div class="mt-8">
      <p class="font-semibold mb-2">Notifications</p>
      <div class="notification-card">
        <p><i class="ri-chat-1-line mr-2"></i> New message received</p>
      </div>
      <div class="notification-card">
        <p><i class="ri-alert-line mr-2"></i> Report status changed to Resolved</p>
      </div>
    </div>
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
      hackerName: "John Doe", // Example name
      hackerImage: "https://via.placeholder.com/150", // Example image (replace with actual)
      totalReports: 12,
      resolvedReports: 8,
      earnings: 4500,
    };
  },
};
</script>

<style scoped>
/* Ensure Body and HTML are responsive */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* Dashboard Card Styling */
.dashboard-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  flex-wrap: wrap; /* Allow items to wrap */
}

.dashboard-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Dark & Light Mode Colors */
.dashboard-card {
  background-color: var(--bg-color);
  color: var(--text-color);
}
.dashboard-card i {
  color: var(--icon-color);
}

/* Navigation Links */
.nav-card {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.2s ease;
}

.nav-card:hover {
  background-color: var(--hover-bg);
}

/* Notifications */
.notification-card {
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 0.5rem;
}

/* Dark & Light Mode Variables */
:root {
  --bg-color: #f9f9f9;
  --text-color: #000;
  --icon-color: #007bff;
  --hover-bg: #dde9f1;
}

.dark-mode {
  --bg-color: #1e293b;
  --text-color: #fff;
  --icon-color: #facc15;
  --hover-bg: #374151;
}

/* Responsiveness for Mobile */
@media screen and (max-width: 600px) {
  /* Stack items vertically in cards */
  .dashboard-card {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

  }

  /* Adjust grid layout for mobile */
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Adjusts grid items */
    gap: 1rem;
  }

  .mt-8 {
    margin-top: 1rem; /* Reduced space on mobile */
  }

  /* Adjust margins for mobile */
  .my-44 {
    margin-top: 1rem; /* Reduced margin-top on mobile */
  }
}

/* General spacing adjustments */
.mt-8, .my-44 {
  margin-top: 2rem; /* Adjust for mobile */
}

/* Ensure content doesn't overflow */
* {
  box-sizing: border-box;
  overflow-wrap: break-word;
}
</style>
