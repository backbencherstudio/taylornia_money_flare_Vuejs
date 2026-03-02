<script setup lang="ts">
import type { TradingPlan } from '~/types/tradingPlan';
import SectionHeading from '../Reusable/SectionHeading.vue';
import BaseButtonLink from '../Reusable/BaseButtonLink.vue';
import TradingPlanModal from '../Reusable/TradingPlanModal.vue';
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
  <section class="pb-20 lg:pb-35">
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div>
        <SectionHeading
          title="AI Trading Plans"
          description="AI quant trading investment plans"
        />
      </div>
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
      <div class="flex justify-center mt-5">
        <BaseButtonLink to="/ai-trading-plans" >
            See More
        </BaseButtonLink>
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
