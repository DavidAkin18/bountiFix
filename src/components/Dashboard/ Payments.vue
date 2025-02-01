<template>
    <div :class="{'bg-white text-black': !isDarkMode, 'bg-gray-900 text-white': isDarkMode}"
      class="max-w-6xl mx-auto px-6 py-16 transition-colors duration-300 pt-28">
      <h1 class="text-3xl font-bold mb-6">Payments</h1>
      <div>
        <p class="font-semibold mb-4">Your Payments</p>
        <table class="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th class="py-2 px-4">Date</th>
              <th class="py-2 px-4">Amount</th>
              <th class="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="payment in payments" :key="payment.id">
              <td class="py-2 px-4">{{ payment.date }}</td>
              <td class="py-2 px-4">${{ payment.amount }}</td>
              <td class="py-2 px-4">{{ payment.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      isDarkMode: Boolean
    },
    data() {
      return {
        payments: [
          { id: 1, date: "2025-01-25", amount: 500, status: "Completed" },
          { id: 2, date: "2025-01-15", amount: 300, status: "Pending" }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    text-align: left;
    padding: 12px;
  }
  
  th {
    background-color: #f1f1f1;
  }
  
  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  tr:hover {
    background-color: #e1e1e1;
  }
  </style>
  