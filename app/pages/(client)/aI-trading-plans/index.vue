<script setup lang="ts">
import AIStrategy from "~/components/AITradingPlans/AIStrategy.vue";
import AITradingPlans from "~/components/AITradingPlans/AITradingPlans.vue";
import InvestSection from "~/components/HomeSections/InvestSection.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div>
    <AITradingPlans />
    <AIStrategy/>
    <InvestSection/>
  </div>
</template>

<style scoped></style>
