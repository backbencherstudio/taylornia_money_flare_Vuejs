<script setup lang="ts">
import OverviewStatus from "./_Components/OverviewStatus.vue";
import MarketUpdate from "./_Components/MarketUpdate.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";
import TransactionHistory from "./_Components/TransactionHistory.vue";
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
    <div class="mt-6">
      <TransactionHistory/>
      <div>
        
      </div>
    </div>
  </div>
</template>

<style scoped></style>

