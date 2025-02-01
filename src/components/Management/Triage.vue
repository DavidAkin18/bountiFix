<template>
    <div class="triage-card">
      <h3 class="text-lg font-semibold">Assign Report</h3>
      <select v-model="assignedTeam" class="select-team">
        <option disabled value="">Select Team</option>
        <option v-for="team in teams" :key="team" :value="team">{{ team }}</option>
      </select>
      <button @click="assignReport" class="assign-button">Assign</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        assignedTeam: '',
        teams: ['Team A', 'Team B', 'Team C'], // Sample teams
      };
    },
    methods: {
      assignReport() {
        if (!this.assignedTeam) {
          alert('Please select a team!');
          return;
        }
        // Logic for assigning the report
        console.log(`Report assigned to: ${this.assignedTeam}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .triage-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .select-team {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
  }
  .assign-button {
    background-color: var(--btn-bg-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }
  </style>
  