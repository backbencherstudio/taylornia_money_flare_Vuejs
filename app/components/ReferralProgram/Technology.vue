<script setup lang="ts">
import LoveFileIcon from "../Icons/LoveFileIcon.vue";
import SectionHeading from "../Reusable/SectionHeading.vue";
</script>

<template>
  <section class="py-20 lg:py-45 relative z-10">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-10"
      >
        <div class="lg:w-143.75">
          <SectionHeading
            title="Technology-Driven Philosophy"
            description="Technology is central to how MoneyFlare operates. Advanced AI systems continuously analyze market data, execute trades, and manage risk through predefined quantitative frameworks. These systems are designed to function with discipline, precision, and adaptability across changing market conditions.
            Rather than emphasizing speed or speculation, MoneyFlare prioritizes controlled automation and intelligent system design."
            align="left"
          />
          <div class="flex gap-6 mt-7.5 lg:mt-10">
            <div>
              <LoveFileIcon />
            </div>
            <div>
              <h1 class="text-lg lg:text-2xl font-dm">Predictive Modeling</h1>
              <p class="text-sm text-[#CCC] leading-[160%] mt-3">
                Leverage cutting-edge predictive analytics to forecast future
                trends and outcomes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img src="/graph.png" alt="" class="lg:w-131" />
        </div>
      </div>
    </div>
  </section>
</template>
