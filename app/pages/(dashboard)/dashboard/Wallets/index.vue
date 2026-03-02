<script setup lang="ts">
import DepositeAndActivity from "~/components/DashboardComponenets/Overview/_Components/Wallets/DepositeAndActivity.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <DashboardUserHeader />
    <DepositeAndActivity/>
  </div>
</template>

<style scoped></style>
