<template>
    <div class="payment-integration-card">
      <h3 class="text-lg font-semibold">Payment Integration</h3>
      <div class="payment-method-selection">
        <label for="payment-method">Select Payment Method</label>
        <select v-model="paymentMethod" class="select-input">
          <option value="PayPal">PayPal</option>
          <option value="Stripe">Stripe</option>
          <option value="Paystack">Paystack</option>
        </select>
      </div>
      <button @click="processPayment" class="payment-button">Process Payment</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        paymentMethod: 'PayPal', // Default payment method
      };
    },
    methods: {
      processPayment() {
        alert(`Processing payment via ${this.paymentMethod}`);
        // Logic to integrate with PayPal, Stripe, or Paystack
        console.log(`Payment initiated through ${this.paymentMethod}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .payment-integration-card {
    background-color: var(--card-bg-color);
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .payment-method-selection {
    margin-bottom: 1rem;
  }
  .payment-button {
    background-color: var(--btn-bg-color);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    cursor: pointer;
    border: none;
  }
  </style>
  