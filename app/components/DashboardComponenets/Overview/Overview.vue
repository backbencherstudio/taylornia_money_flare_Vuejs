<script setup lang="ts">
import PigIcon from "~/components/Icons/PigIcon.vue";
import WithdrawIcon from "~/components/Icons/WithdrawIcon.vue";
import OverviewStatus from "./_Components/OverviewStatus.vue";
import MarketUpdate from "./_Components/MarketUpdate.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";
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
  </div>
</template>

<style scoped></style>

