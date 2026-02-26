<script setup lang="ts">
import { ref, watch } from "vue";
import type { TradingPlan } from "~/types/tradingPlan";
import BaseButtonLink from "../Reusable/BaseButtonLink.vue";
import SectionHeading from "../Reusable/SectionHeading.vue";
import TradingPlanModal from "../Reusable/TradingPlanModal.vue";

const plans: TradingPlan[] = [
  {
    name: "Antminer L9 16Gh/s",
    price: 16000,
    duration: 10,
    dailyProfit: 420,
    totalNetProfit: 4200,
    referralReward: 588,
    principalRefund: true,
  },
  {
    name: "Antminer S19 Pro",
    price: 12000,
    duration: 8,
    dailyProfit: 310,
    totalNetProfit: 2480,
    referralReward: 350,
    principalRefund: true,
  },
  {
    name: "WhatsMiner M50",
    price: 9500,
    duration: 7,
    dailyProfit: 240,
    totalNetProfit: 1680,
    referralReward: 260,
    principalRefund: true,
  },
  {
    name: "AvalonMiner 1246",
    price: 8000,
    duration: 6,
    dailyProfit: 200,
    totalNetProfit: 1200,
    referralReward: 180,
    principalRefund: true,
  },
  {
    name: "Antminer S21",
    price: 20000,
    duration: 12,
    dailyProfit: 550,
    totalNetProfit: 6600,
    referralReward: 900,
    principalRefund: true,
  },
  {
    name: "WhatsMiner M30S++",
    price: 7000,
    duration: 5,
    dailyProfit: 170,
    totalNetProfit: 850,
    referralReward: 120,
    principalRefund: true,
  },
  {
    name: "Antminer L7 9.5Gh/s",
    price: 14000,
    duration: 9,
    dailyProfit: 360,
    totalNetProfit: 3240,
    referralReward: 450,
    principalRefund: true,
  },
  {
    name: "Goldshell KD6",
    price: 6000,
    duration: 5,
    dailyProfit: 150,
    totalNetProfit: 750,
    referralReward: 95,
    principalRefund: true,
  },
  {
    name: "iPollo V1 Mini",
    price: 4000,
    duration: 4,
    dailyProfit: 95,
    totalNetProfit: 380,
    referralReward: 60,
    principalRefund: false,
  },
  {
    name: "Jasminer X16-Q",
    price: 11000,
    duration: 8,
    dailyProfit: 290,
    totalNetProfit: 2320,
    referralReward: 310,
    principalRefund: true,
  },
];

const isModalOpen = ref(false);
const selectedPlan = ref<TradingPlan | null>(null);

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatCurrency = (value: number) => currencyFormatter.format(value);
const formatCompactCurrency = (value: number) =>
  compactCurrencyFormatter.format(value);

const openPlanModal = (plan: TradingPlan) => {
  selectedPlan.value = plan;
  isModalOpen.value = true;
};

watch(isModalOpen, (isOpen) => {
  if (!isOpen) {
    selectedPlan.value = null;
  }
});

const handleBuyPlan = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <section class="relative overflow-hidden">
    <!-- Decoration -->
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-60 -right-20 lg:-top-100 xl:-top-120 lg:-right-20 rotate-45 lg:rotate-45 z-0 h-150 lg:h-auto"
    />

    <div class="pt-25 xl:pt-40 relative z-10">
      <h1
        class="text-[11.11vw] sm:text-[4rem] text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px] mb-5 xl:mb-7.5"
      >
        AI Trading Plans
      </h1>
    </div>

    <div class="max-w-7xl mx-auto px-6 xl:px-10 pt-20 lg:pt-30 relative z-10">
      <SectionHeading
        title="AI quant trading investment plans"
        align="center"
      />
      <div class="grid grid-cols-1 lg:grid-cols-2 mt-10 lg:mt-12.5 gap-6">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="bg-[#080808] border border-[#222222] rounded-2xl p-7 flex flex-col sm:flex-row gap-7.5"
        >
          <div class="sm:w-1/2">
            <img src="/plan-image2.png" alt="" />
            <p
              class="bg-linear-to-b to-[#1A9975] from-[#2BFFC3] text-transparent bg-clip-text font-dm font-medium leading-[187%] text-center"
            >
              {{ plan.name }}
            </p>
            <p class="text-xs text-[#CCC] leading-[213%] text-center">
              24-Hour Profit Payout
            </p>
          </div>

          <div class="sm:w-1/2">
            <div class="mb-1.5 flex justify-between items-center w-full">
              <h2 class="text-[22px] font-semibold leading-[136%]">
                {{ formatCompactCurrency(plan.price) }}
              </h2>
              <p class="text-xs text-[#CCC]">
                {{ plan.duration }} Days Duration
              </p>
            </div>
            <div>
              <div
                class="flex justify-between items-center py-2.5 border-b border-[#222222]"
              >
                <p
                  class="bg-linear-to-b to-[#1A9975] from-[#2BFFC3] text-transparent bg-clip-text font-dm font-medium leading-[187%]"
                >
                  Daily Profit
                </p>
                <p class="text-sm text-[#CCC]">
                  {{ formatCurrency(plan.dailyProfit) }}
                </p>
              </div>
              <div
                class="flex justify-between items-center py-2.5 border-b border-[#222222]"
              >
                <p
                  class="bg-linear-to-b to-[#1A9975] from-[#2BFFC3] text-transparent bg-clip-text font-dm font-medium leading-[187%]"
                >
                  Total Net Profit
                </p>
                <p class="text-sm text-[#CCC]">
                  {{ formatCurrency(plan.totalNetProfit) }}
                </p>
              </div>
              <div
                class="flex justify-between items-center py-2.5 border-b border-[#222222]"
              >
                <p
                  class="bg-linear-to-b to-[#1A9975] from-[#2BFFC3] text-transparent bg-clip-text font-dm font-medium leading-[187%]"
                >
                  Referral Reward
                </p>
                <p class="text-sm text-[#CCC]">
                  {{ formatCurrency(plan.referralReward) }}
                </p>
              </div>
              <div
                class="flex justify-between items-center py-2.5 border-b border-[#222222]"
              >
                <p
                  class="bg-linear-to-b to-[#1A9975] from-[#2BFFC3] text-transparent bg-clip-text font-dm font-medium leading-[187%]"
                >
                  Principal Refund
                </p>
                <p class="text-sm text-[#CCC]">
                  {{ plan.principalRefund ? "Yes" : "No" }}
                </p>
              </div>
            </div>
            <div class="mt-5">
              <BaseButtonLink class="w-full" @click="openPlanModal(plan)"
                >Invest Now</BaseButtonLink
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <TradingPlanModal
      v-model="isModalOpen"
      :plan="selectedPlan"
      @buy="handleBuyPlan"
    />
  </section>
</template>

<style scoped></style>
