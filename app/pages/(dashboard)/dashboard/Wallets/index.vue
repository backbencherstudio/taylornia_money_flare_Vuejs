<script setup lang="ts">
import DepositeAndActivity from "~/components/DashboardComponenets/Overview/_Components/Wallets/DepositeAndActivity.vue";
import DepositeLog from "~/components/DashboardComponenets/Overview/_Components/Wallets/DepositeLog.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <DashboardUserHeader />
    <DepositeAndActivity/>
    <DepositeLog/>
  </div>
</template>

<style scoped></style>
