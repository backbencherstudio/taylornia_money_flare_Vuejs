<script setup lang="ts">
import AIStrategy from "~/components/AITradingPlans/AIStrategy.vue";
import AITradingPlans from "~/components/AITradingPlans/AITradingPlans.vue";
import RevenueFlow from "~/components/AITradingPlans/RevenueFlow.vue";
import InvestSection from "~/components/HomeSections/InvestSection.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div class="fade-in">
    <AITradingPlans />
    <AIStrategy/>
    <RevenueFlow/>
    <InvestSection/>
  </div>
</template>

<style scoped></style>
