<script setup lang="ts">
import AITradingPlans from "~/components/AITradingPlans/AITradingPlans.vue";
import InvestSection from "~/components/HomeSections/InvestSection.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div>
    <AITradingPlans />
    <InvestSection/>
  </div>
</template>

<style scoped></style>
