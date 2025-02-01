<template>
    <div class="earnings-dashboard-card">
      <h3 class="text-lg font-semibold">Earnings Dashboard</h3>
      <div class="total-earnings">
        <p class="font-semibold">Total Earnings: ${{ totalEarnings }}</p>
      </div>
      <div class="transaction-history">
        <h4 class="font-semibold">Transaction History</h4>
        <ul>
          <li v-for="(transaction, index) in transactions" :key="index">
            <p>{{ transaction.date }} - ${{ transaction.amount }} - {{ transaction.status }}</p>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        totalEarnings: 4500, // Example total earnings
        transactions: [
          { date: '2025-01-15', amount: 500, status: 'Completed' },
          { date: '2025-01-10', amount: 800, status: 'Completed' },
          { date: '2025-01-05', amount: 300, status: 'Pending' },
        ], // Example transactions
      };
    },
  };
  </script>
  
  <style scoped>
  .earnings-dashboard-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .total-earnings {
    margin-bottom: 1rem;
  }
  .transaction-history {
    margin-top: 1rem;
  }
  </style>
  