<script setup lang="ts">
import SectionHeading from "../Reusable/SectionHeading.vue";
</script>

<template>
  <section class="relative">
    <div class="absolute bottom-0 h-10  bg-[#030303] w-full"></div>
    <div class="max-w-7xl mx-auto px-6 xl:px-10 flex flex-col lg:flex-row justify-between gap-10 items-center relative z-10">
      <div>
        <div class="mb-6">
          <SectionHeading title="How the Plans Differ" align="left" />
        </div>
        <div class="text-[#CCC] leading-[160%] text-base space-y-4">
          <p>
            AI Trading Plans are differentiated by their underlying quantitative
            models, market behavior focus, and risk control parameters. Some
            frameworks prioritize stability across broader market movements,
            while others are optimized for adaptive responses to changing
            volatility.
          </p>
          <p>
            The purpose of this structure is to offer flexibility while
            maintaining consistency, transparency, and professional standards.
          </p>
          <p>
            The purpose of this structure is to offer flexibility while
            maintaining consistency, transparency, and professional standards.
          </p>
        </div>
      </div>
      <div>
        <img src="/images/aitrading/flow.png" alt="" class="border border-[#222222] pb-6 rounded-2xl">
      </div>
    </div>
  </section>
</template>

<style scoped></style>
