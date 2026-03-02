<script setup lang="ts">
import DepositeLog from "~/components/DashboardComponenets/Overview/_Components/Wallets/DepositeLog.vue";
import Wallets from "~/components/DashboardComponenets/Overview/_Components/Wallets/Wallets.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <Wallets/>
  </div>
</template>

<style scoped></style>
