<script setup lang="ts">
import ArrowLeft from "../Icons/ArrowLeft.vue";
import WalletIcon from "../Icons/WalletIcon.vue";
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 xl:px-10 mb-20 lg:mb-45">
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div
        class="bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px "
      >
        <div class="bg-[#080808] rounded-3xl px-7 py-10.75">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
            >
              <WalletIcon />
            </button>
          </div>
          <h1
            class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]"
          >
            Intelligent Automation
          </h1>
          <p class="text-center text-[#CCC]">
           We simplify complex trading through disciplined AI systems that operate automatically, consistently, and without emotional decision-making.
          </p>
        </div>
      </div>
      <div class="border border-[#2BFFC366] rounded-3xl">
        <div class="bg-grad rounded-3xl px-7 py-10.75">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
            >
              <WalletIcon />
            </button>
          </div>
          <h1
            class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]"
          >
            Professional Foundation
          </h1>
          <p class="text-center text-[#CCC]">
            Our platform is built on structured quantitative methods and professional oversight to ensure reliability and long-term stability.
          </p>
        </div>
      </div>
      <div
        class="lg:col-span-3 xl:col-span-1 bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px  "
      >
        <div class="bg-[#080808] rounded-3xl px-7 py-10.75 h-full">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
            >
              <WalletIcon />
            </button>
          </div>
          <h1
            class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]"
          >
            Responsible Innovation
          </h1>
          <p class="text-center text-[#CCC]">
            We advance AI-driven finance with a focus on transparency, controlled risk, and long-term trust.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-grad {
  background: radial-gradient(
    72.07% 129.2% at 49.58% 0%,
    rgba(43, 255, 195, 0.7) 0%,
    rgba(43, 255, 195, 0) 100%
  );
  box-shadow:
    0 9px 100px 0 rgba(43, 255, 195, 0.2),
    0 0 50px 0 rgba(43, 255, 195, 0.1);
}
</style>
