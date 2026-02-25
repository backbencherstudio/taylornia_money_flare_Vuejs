<script setup lang="ts">
import StayOnTopSection from "./StayOnTopSection.vue";
import TradingSimpleSection from "./TradingSimpleSection.vue";
</script>

<template>
  <section class="relative overflow-hidden">
    <div class="absolute bg-black/90 inset-0"/>
    <img
      src="/bg-lights.svg"
      alt="bg-light"
      class="absolute top-0 -right-50 h-[90vh] z-10"
    />
    <img
      src="/bg-lights.svg"
      alt="bg-light"
      class="absolute top-0 -left-50 h-[90vh] z-10 scale-x-[-1]"
    />
    <div class="relative z-20"> 
      <TradingSimpleSection />
      <StayOnTopSection/>
    </div>
  </section>
</template>

<style scoped></style>
