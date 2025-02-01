<template>
   <nav 
        class=" fixed-header fixed z-50 top-0 left-64 right-0 h-16 hidden lg:flex justify-between items-center px-6 shadow-md">
        
        <!-- App Name -->
        <h1 class="text-xl font-semibold">Bounty & Payment System</h1>

        <!-- User Avatar -->
        <router-link to="/bio" class="flex items-center space-x-4">
          <img
            :src="userProfile.profilePicture "
            class="h-10 w-10 rounded-full object-cover"
            alt="User Avatar"
          />
          <span class="text-sm font-semibold">{{ fullName }}</span>
        </router-link>
    </nav>
    <div class="report-management max-w5xl mx-auto z-0 border px-6  pt-10 md:pt-28 transition-colors duration-300">
    <div class="lg:flex flex-row item-center justify-between px-4">
      <BountyCalculation  class="lg:w-1/3"/>
      <PaymentIntegration class="lg:w-1/3"/>
      <EarningsDashboardComponent class="lg:w-1/3"/>
    </div>
    <Earnings class="w-full"/>
  </div>
  
</template>

<script>

import { mapState } from 'vuex';

import Earnings from '../Dashboard/Earnings.vue';
import PaymentIntegration from './PaymentIntegration.vue';
import BountyCalculation from './BountyCalculation.vue';
import EarningsDashboardComponent from './EarningsDashboardComponent.vue';

export default {
  components: {
    BountyCalculation,
    PaymentIntegration,
    Earnings,
    EarningsDashboardComponent
  },
  computed: {
    ...mapState({
      userProfile: state => state.profile,
    }),
    fullName() {
      return `${this.userProfile.firstName} ${this.userProfile.lastName}`;
    },
  },
};
</script>

<style scoped>
.bounty-payment-system {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
