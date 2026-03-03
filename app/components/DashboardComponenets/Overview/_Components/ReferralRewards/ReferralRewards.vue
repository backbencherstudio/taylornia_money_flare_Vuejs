<script setup lang="ts">
import ReferralHeader from "./ReferralHeader.vue";
import TotalEarningsChart from "./TotalEarningsChart.vue";
import TotalReferralsChart from "./TotalReferralsChart.vue";
</script>

<template>
  <div>
    <ReferralHeader />

    <div class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
      <TotalReferralsChart />
      <TotalEarningsChart />
    </div>
  </div>
</template>

<style scoped></style>
