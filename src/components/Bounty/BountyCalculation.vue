<template>
    <div class="bounty-calculation-card">
      <h3 class="text-lg font-semibold">Bounty Calculation</h3>
      <div class="severity-selection">
        <label for="severity">Severity</label>
        <select v-model="severity" class="select-input">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
          <option value="Critical">Critical</option>
        </select>
      </div>
      <div class="impact-selection">
        <label for="impact">Impact</label>
        <select v-model="impact" class="select-input">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div class="calculation-result">
        <p class="font-semibold">Calculated Bounty: ${{ calculatedBounty }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        severity: 'Low',
        impact: 'Low',
        baseAmount: 50,
      };
    },
    computed: {
      calculatedBounty() {
        let severityMultiplier = 1;
        let impactMultiplier = 1;
  
        if (this.severity === 'Medium') severityMultiplier = 1.5;
        if (this.severity === 'High') severityMultiplier = 2;
        if (this.severity === 'Critical') severityMultiplier = 3;
  
        if (this.impact === 'Medium') impactMultiplier = 1.5;
        if (this.impact === 'High') impactMultiplier = 2;
  
        return (this.baseAmount * severityMultiplier * impactMultiplier).toFixed(2);
      },
    },
  };
  </script>
  
  <style scoped>
  .bounty-calculation-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .select-input {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
    background-color: var(--input-bg-color);
    border: 1px solid var(--input-border-color);
  }
  .calculation-result {
    margin-top: 1rem;
  }
  </style>
  