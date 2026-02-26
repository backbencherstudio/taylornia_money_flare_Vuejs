<script setup lang="ts">
import OurVision from "~/components/About/OurVision.vue";
import SupportTop from "~/components/About/SupportTop.vue";
import LoveFileIcon from "~/components/Icons/LoveFileIcon.vue";
import PaperBoard from "~/components/Icons/PaperBoard.vue";
import MarketUpdate from "~/components/MarketUpdate/MarketUpdate.vue";
import Technology from "~/components/ReferralProgram/Technology.vue";
import SectionHeading from "~/components/Reusable/SectionHeading.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <section class="relative overflow-hidden pb-20 pt-25 lg:py-45">
    <div class="max-w-7xl mx-auto px-6 xl:px-10 relative z-10">
      <div>
        <h1
          class="text-[11.11vw] sm:text-[4rem] text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px]"
        >
          About MoneyFlare
        </h1>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center justify-between gap-10 pt-25"
      >
        <div class="lg:w-143.75">
          <SectionHeading
            title="A Trusted AI Financial Platform"
            description="MoneyFlare is a professional AI-powered cryptocurrency quantitative trading platform built to deliver automated trading through structured technology and disciplined execution. The platform is designed to operate with stability, clarity, and long-term reliability, positioning MoneyFlare as a serious financial technology brand rather than a short-term trading product."
            align="left"
          />
          <p
            class="text-[3.7vw] sm:text-base text-neutral-400 leading-[160%] mt-3.5 md:mt-4"
          >
            Every aspect of MoneyFlare reflects a commitment to trust,
            professional standards, and responsible innovation.
          </p>
          <div class="flex gap-6 mt-7.5 lg:mt-10">
            <div>
              <PaperBoard />
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
          <img src="/about.png" alt="" class="lg:w-131" />
        </div>
      </div>
    </div>

  
    <div
      class="absolute -right-60 bottom-20 blur-[125px] w-54.75 h-54.75 lg:w-160.75 lg:h-160.75 bg-[#000000fd] rounded-full"
    />
    <!-- Decoration -->
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-60 -right-20 lg:-top-100 xl:-top-120 lg:-right-20 rotate-45 lg:rotate-45 z-0 h-150 lg:h-auto"
    />
  </section>
  <OurVision/>
  <SupportTop />

  <div class="px-6">
    <div
      class="max-w-7xl mx-auto px pt-20 xl:px-10 lg:pt-45 flex flex-col lg:flex-row gap-3.5 xl:gap-20 justify-between mb-10 lg:mb-12.5"
    >
      <SectionHeading
        title="AI Strategy Frameworks"
        align="left"
        titleWidth="md:w-[10ch]"
      />
      <div class="space-y-3 text-[#CCC]">
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
  <div class="relative overflow-hidden">
    <Technology />
   <!-- Decoration -->
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-10 -right-10 rotate-45 lg:rotate-45 z-0 h-150 lg:h-auto "
    />
  </div>
</template>

<style scoped></style>
