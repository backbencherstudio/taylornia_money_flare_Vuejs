<script setup lang="ts">
import OverviewStatus from "./_Components/OverviewStatus.vue";
import MarketUpdate from "./_Components/MarketUpdate.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";
import TransactionHistory from "./_Components/TransactionHistory.vue";
import IncomeOverview from "./_Components/IncomeOverview.vue";
import TotalTradingVolume from "./_Components/TotalTradingVolume.vue";
</script>

<template>
  <div>
    <DashboardUserHeader/>
    <div>
        <OverviewStatus/>
    </div>
    <div>
        <MarketUpdate/>
    </div>
    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
      <TransactionHistory/>
      <div class="space-y-6">
          <IncomeOverview/>
          <TotalTradingVolume/>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

