<script setup lang="ts">
import BaseLinkButton from "../Reusable/BaseButtonLink.vue";
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
  <section class="hero-section pt-9 xl:pt-22 overflow-hidden relative">
    <div
      class="flex flex-col lg:flex-row justify-center items-center px-6 xl:px-0 relative"
    >
      <div class="relative z-20">
        <div class="lg:w-150 xl:w-193 py-25">
          <h1
            class="text-5xl xl:text-[4rem] text-center text-[#FFFFFF99] font-medium leading-[109%] tracking-[-1.28px] mb-5 xl:mb-7.5"
          >
            AI‑Driven Crypto Trading. Truly Automated. Truly Smart.
          </h1>
          <p
            class="text-base xl:text-lg text-[#CCC] leading-[140%] text-center"
          >
            MoneyFlare uses advanced AI and professional quantitative systems to
            automate your crypto trading — no expertise needed.
          </p>
        </div>
        <div class="flex justify-center mt-7.5 xl:mt-10">
          <BaseLinkButton to="/auth/signup" variant="primary"
            >Get Started</BaseLinkButton
          >
        </div>
        <div class="mt-15 xl:mt-20">
          <p class="text-sm text-[#ccc] leading-[160%] text-center mb-4">
            Support top 30+ chains
          </p>
        </div>
      </div>
    </div>
    <!-- marquee -->
    <div class="marquee-wrapper xl:w-193 mx-auto relative overflow-hidden">
      <div class="marquee-track">
        <div class="marquee-group">
          <img
            v-for="(image, index) in marqueeImages"
            :key="`logo-a-${index}`"
            :src="image"
            alt=""
            class="marquee-logo"
          />
        </div>
        <div class="marquee-group" aria-hidden="true">
          <img
            v-for="(image, index) in marqueeImages"
            :key="`logo-b-${index}`"
            :src="image"
            alt=""
            class="marquee-logo"
          />
        </div>
      </div>
      <div class="marquee-fade marquee-fade-left" />
      <div class="marquee-fade marquee-fade-right" />
    </div>
    <!-- decoration -->
    <div
      class="absolute -top-32 -left-32 lg:-top-100 lg:-left-100 blur-[125px] opacity-[0.4] w-54.75 h-54.75 lg:w-160.75 lg:h-160.75 bg-primary rounded-full"
    />
    <div>
      <img
        src="/images/landing/robot-pc.png"
        alt=""
        class="hidden lg:block lg:absolute bottom-0 right-0 lg:h-120 xl:h-150"
      />
      <div class="flex justify-end mt-12.5 bg-[#030303]">
        <img
          src="/images/landing/robot-mobile.png"
          alt=""
          class="block lg:hidden h-102.75 right-0"
        />
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

.marquee-wrapper {
  width: min(100%, 48.25rem);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee-scroll 18s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: clamp(2rem, 4vw, 4rem);
  padding-right: clamp(2rem, 4vw, 4rem);
}

.marquee-logo {
  height: 2rem;
  width: auto;
  object-fit: contain;
  opacity: 0.9;
}

.marquee-fade {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 6rem;
  pointer-events: none;
  z-index: 1;
}

.marquee-fade-left {
  left: 0;
  background: linear-gradient(to right, #030303 0%, transparent 100%);
}

.marquee-fade-right {
  right: 0;
  background: linear-gradient(to left, #030303 0%, transparent 100%);
}

@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track {
    animation: none;
  }
}
</style>
