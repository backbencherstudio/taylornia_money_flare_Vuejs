<script setup lang="ts">
import ArrowLeft from "~/components/Icons/ArrowLeft.vue";
import WalletIcon from "~/components/Icons/WalletIcon.vue";
import SectionHeading from "~/components/Reusable/SectionHeading.vue";
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 xl:px-10">
    <div class="mb-10 lg:mb-30">
      <SectionHeading title="Sophisticated AI Makes Trading Simple" description="" align="center" titleWidth="w-[15ch]"
        descriptionWidth="sm:w-[60ch]" />
    </div>
    <!-- cards -->
    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div class="bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px h-fit">
        <div class="bg-[#080808] rounded-3xl px-7 py-10.75">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center">
              <WalletIcon />
            </button>
          </div>
          <h1 class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]">
            Full Automation
          </h1>
          <p class="text-center mb-7.5 text-secondary">
            Let advanced AI systems manage the entire trading process for you.
            MoneyFlare operates continuously, analyzing market conditions.
          </p>
          <button
            class="w-full text-[#2BFFC3] hover:brightness-110 transition-all flex justify-center items-center gap-2">
            learn more
            <ArrowLeft />
          </button>
        </div>
      </div>
      <div class="border border-[#2BFFC366] rounded-3xl  h-fit xl:-mt-17.5">
        <div class="bg-grad rounded-3xl px-7 py-10.75">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center">
              <WalletIcon />
            </button>
          </div>
          <h1 class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]">
            Intelligent Models
          </h1>
          <p class="text-center mb-7.5 text-secondary">
            Our quantitative models are built using advanced data analysis,
            machine learning, and market behavior signals.
          </p>
          <button class="w-full text-[#FFF] hover:brightness-110 transition-all flex justify-center items-center gap-2">
            learn more
            <ArrowLeft />
          </button>
        </div>
      </div>
      <div class="lg:col-span-3 xl:col-span-1 bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px h-fit">
        <div class="bg-[#080808] rounded-3xl px-7 py-10.75">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center">
              <WalletIcon />
            </button>
          </div>
          <h1 class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]">
            Secure Infrastructure
          </h1>
          <p class="text-center mb-7.5 text-secondary">
            Your assets remain under your control through secure, API-based
            connections. MoneyFlare never takes custody of your funds,
            ensuring.
          </p>
          <button class="w-full text-[#FFF] hover:brightness-110 transition-all flex justify-center items-center gap-2">
            learn more
            <ArrowLeft />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg-grad {
  background: radial-gradient(72.07% 129.2% at 49.58% 0%,
      rgba(43, 255, 195, 0.7) 0%,
      rgba(43, 255, 195, 0) 100%);
  box-shadow:
    0 9px 100px 0 rgba(43, 255, 195, 0.2),
    0 0 50px 0 rgba(43, 255, 195, 0.1);
}
</style>
