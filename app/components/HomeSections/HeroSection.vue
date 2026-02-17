<script setup lang="ts">
import BaseLinkButton from "../Reusable/baseLinkButton.vue";
const marqueeImages = [
  "/images/landing/cosmos.png",
  "/images/landing/elrond.png",
  "/images/landing/ethereum.png",
  "/images/landing/marquee4.png",
  "/images/landing/stacks.png",
  "/images/landing/polygon.png",
  ,
];
</script>

<template>
  <section class="hero-section pt-9 xl:pt-22 flex justify-center items-center px-6 xl:px-0">
    <div>
      <div class="xl:w-193 py-25">
        <h1
          class="text-5xl xl:text-[4rem] text-center text-[#FFFFFF99] font-medium leading-[109%] tracking-[-1.28px] mb-5 xl:mb-7.5"
        >
          AI‑Driven Crypto Trading. Truly Automated. Truly Smart.
        </h1>
        <p class="text-base xl:text-lg text-[#CCC] leading-[140%] text-center">
          MoneyFlare uses advanced AI and professional quantitative systems to
          automate your crypto trading — no expertise needed.
        </p>
      </div>
      <div class="flex justify-center mt-7.5 xl:mt-10">
        <BaseLinkButton> Get Started </BaseLinkButton>
      </div>
      <div class="mt-15 xl:mt-20">
        <p class="text-sm text-[#ccc] leading-[160%] text-center mb-4">
          Support top 30+ chains
        </p>
        <div class="xl:w-193 mx-auto flex justify-between relative overflow-hidden">
            <!-- Deco -->
            <img src="/images/landing/cosmos.png" alt="" class="h-8">
            <img src="/images/landing/cosmos.png" alt="" class="h-8">
            <img src="/images/landing/cosmos.png" alt="" class="h-8">
            <img src="/images/landing/cosmos.png" alt="" class="h-8">
            <img src="/images/landing/cosmos.png" alt="" class="h-8">
            <!-- decoration -->
             <div class="absolute h-8 w-40 bg-linear-to-l to-[#030a08] from-transparent"/>
             <div class="absolute right-0 h-8 w-40 bg-linear-to-l from-[#030a08] to-transparent"/>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  background:
    linear-gradient(180deg, rgba(3, 3, 3, 0.829) 71.97%, #030303 100%),
    linear-gradient(0deg, #2bffc3 0%, #2bffc3 100%),
    url("/images/landing/hero3.png");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: normal, color, normal;
}
</style>
