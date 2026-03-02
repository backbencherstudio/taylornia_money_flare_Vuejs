<script setup lang="ts">
import { Carousel, Slide } from "vue3-carousel";
import "vue3-carousel/carousel.css";
import WalletIcon from "../Icons/WalletIcon.vue";

const visionCards = [
  {
    id: 1,
    title: "Intelligent Automation",
    description:
      "We simplify complex trading through disciplined AI systems that operate automatically, consistently, and without emotional decision-making.",
    outerClass: "bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px",
    innerClass: "bg-[#080808] rounded-3xl px-7 py-10.75",
  },
  {
    id: 2,
    title: "Professional Foundation",
    description:
      "Our platform is built on structured quantitative methods and professional oversight to ensure reliability and long-term stability.",
    outerClass: "border border-[#2BFFC366] rounded-3xl",
    innerClass: "bg-grad rounded-3xl px-7 py-10.75",
  },
  {
    id: 3,
    title: "Responsible Innovation",
    description:
      "We advance AI-driven finance with a focus on transparency, controlled risk, and long-term trust.",
    outerClass:
      "lg:col-span-3 xl:col-span-1 bg-linear-to-l to-[#1f1f1f] from-[#1f1f1f] rounded-3xl p-px",
    innerClass: "bg-[#080808] rounded-3xl px-7 py-10.75 h-full",
  },
];
</script>

<template>
  <section class="max-w-7xl mx-auto px-6 xl:px-10 mb-20 lg:mb-45">
    <div class="lg:hidden">
      <Carousel
        :items-to-show="1"
        :items-to-scroll="1"
        :wrap-around="false"
        :transition="450"
        :mouse-drag="true"
        :touch-drag="true"
        :gap="14"
        class="our-vision-carousel"
      >
        <Slide v-for="card in visionCards" :key="`vision-mobile-${card.id}`">
          <div class="w-full" :class="card.outerClass">
            <div :class="card.innerClass">
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
                {{ card.title }}
              </h1>
              <p class="text-center text-secondary">
                {{ card.description }}
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>

    <div class="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <div v-for="card in visionCards" :key="card.id" :class="card.outerClass">
        <div :class="card.innerClass">
          <div class="flex justify-center mb-13.5">
            <button
              class="w-18 h-18 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
            >
              <WalletIcon />
            </button>
          </div>
          <h1 class="text-[22px] sm:text-[1.75rem] text-center mb-5 leading-[107%]">
            {{ card.title }}
          </h1>
          <p class="text-center text-secondary">
            {{ card.description }}
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

.our-vision-carousel :deep(.carousel__slide) {
  align-items: stretch;
  padding-inline: 0.125rem;
}
</style>
