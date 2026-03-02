<script setup lang="ts">
import MarketUpdate from "../MarketUpdate/MarketUpdate.vue";
import SectionHeading from "../Reusable/SectionHeading.vue";
</script>

<template>
  <section class="relative overflow-hidden py-20 xl:py-45">
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div class="flex flex-col lg:flex-row gap-3.5 xl:gap-20 justify-between mb-10 lg:mb-12.5">
        <SectionHeading
          title="AI Strategy Frameworks"
          align="left"
          titleWidth="md:w-[10ch]"
        />
        <div class="space-y-3 text-secondary">
          <p>
            MoneyFlare offers multiple AI-driven quantitative trading frameworks
            designed to operate under different market conditions and risk
            profiles. These frameworks are not products or promotional packages,
            but structured system configurations managed entirely by the
            platform’s AI infrastructure.
          </p>
          <p>
            Each framework follows disciplined quantitative logic and operates
            automatically once activated.
          </p>
        </div>
      </div>
      <MarketUpdate />
    </div>
    <img src="/bg-lights.svg" alt="" class="hidden xl:absolute xl:-top-120 xl:-right-20 rotate-45 opacity-[0.5]">
  </section>
</template>

<style scoped></style>
