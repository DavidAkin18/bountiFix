<template>
    <div class="bg-white  rounded-lg p-6 pt-32 mx-auto ">
      <!-- Header -->
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">Earnings Overview</h2>
        <i class="ri-money-dollar-circle-line text-2xl text-green-500"></i>
      </div>
  
      <!-- Earnings Summary -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="bg-green-100 p-4 rounded-lg text-center">
          <p class="text-gray-600 text-sm">Total Earnings</p>
          <h3 class="text-xl font-bold text-green-600">${{ totalEarnings }}</h3>
        </div>
        <div class="bg-blue-100 p-4 rounded-lg text-center">
          <p class="text-gray-600 text-sm">Current Balance</p>
          <h3 class="text-xl font-bold text-blue-600">${{ currentBalance }}</h3>
        </div>
      </div>
  
      <!-- Earnings Chart -->
      <div class="mb-6">
        <canvas ref="earningsChart"></canvas>
      </div>
  
      <!-- Recent Transactions -->
      <div>
        <h3 class="text-md font-semibold mb-2">Recent Transactions</h3>
        <ul class="divide-y divide-gray-200">
          <li v-for="(transaction, index) in transactions" :key="index" class="py-2 flex justify-between items-center">
            <span class="text-sm text-gray-700">{{ transaction.description }}</span>
            <span
              :class="transaction.amount > 0 ? 'text-green-500' : 'text-red-500'"
              class="text-sm font-semibold"
            >
              {{ transaction.amount > 0 ? '+' : '-' }}${{ Math.abs(transaction.amount) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from "vue";
  import Chart from "chart.js/auto";
  
  export default {
    setup() {
      const totalEarnings = ref(15230);
      const currentBalance = ref(5230);
      const transactions = ref([
        { description: "Freelance Payment", amount: 1200 },
        { description: "Stock Dividend", amount: 450 },
        { description: "Online Course Sale", amount: 300 },
        { description: "Subscription Payment", amount: -50 },
        { description: "Marketplace Withdrawal", amount: -200 },
      ]);
  
      const earningsChart = ref(null);
  
      onMounted(() => {
        const ctx = earningsChart.value.getContext("2d");
        new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                label: "Monthly Earnings",
                data: [300, 500, 1000, 750, 2000, 1800, 2500],
                borderColor: "#10B981",
                backgroundColor: "rgba(16, 185, 129, 0.2)",
                borderWidth: 2,
                tension: 0.3,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  color: "#E5E7EB",
                },
              },
            },
          },
        });
      });
  
      return {
        totalEarnings,
        currentBalance,
        transactions,
        earningsChart,
      };
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles (if needed) */
  </style>
  