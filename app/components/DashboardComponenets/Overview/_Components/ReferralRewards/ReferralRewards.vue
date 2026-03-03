<script setup lang="ts">
import IncomeChart from "./IncomeChart.vue";
import ReferralHeader from "./ReferralHeader.vue";
import ReferralLog from "./ReferralLog.vue";
import TotalEarningsChart from "./TotalEarningsChart.vue";
import TotalReferralsChart from "./TotalReferralsChart.vue";
</script>

<template>
  <div>
    <ReferralHeader />

    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <TotalReferralsChart />
      <TotalEarningsChart />
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-12 gap-6 mt-6">
      <div class="xl:col-span-8">
        <ReferralLog />
      </div>
      <div class="xl:col-span-4">
        <IncomeChart />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
