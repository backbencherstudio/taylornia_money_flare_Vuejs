<script setup lang="ts">
import Plans from "~/components/DashboardComponenets/Overview/_Components/Plans.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

definePageMeta({
  layout: "dashboard",
});
</script>

<template>
  <div>
    <DashboardUserHeader />
    <Plans/>
  </div>
</template>

<style scoped></style>
