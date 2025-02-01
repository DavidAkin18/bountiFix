<template>
    <div class="status-card">
      <h3 class="text-lg font-semibold">Report Status</h3>
      <select v-model="status" class="status-select">
        <option v-for="statusOption in statusOptions" :key="statusOption" :value="statusOption">
          {{ statusOption }}
        </option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        status: 'New', // Default status
        statusOptions: ['New', 'Triaged', 'Resolved', 'Closed'],
      };
    },
  };
  </script>
  
  <style scoped>
  .status-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .status-select {
    width: 100%;
    padding: 0.5rem;
    border-radius: 8px;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
  }
  </style>
  