<script setup lang="ts">
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";
</script>

<template>
  <div>
    <DashboardUserHeader />
    <div
      class="flex flex-col lg:flex-row justify-between items-center primary-border p-5 rounded-lg mt-6"
    >
      <div>
        <p class="text-sm mb-2 text-secondary">Invitation code</p>
        <p class="text-sm lg:text-base font-semibold">
          Share your site with others. You'll get an extra bonus for each
          purchase they make
        </p>
      </div>
      <p class="text-[2rem] font-bold text-[#2BFFC3]">9CTKAD</p>
    </div>
  </div>
</template>

<style scoped></style>
