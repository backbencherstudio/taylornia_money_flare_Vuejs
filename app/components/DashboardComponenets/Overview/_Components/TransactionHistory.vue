<script setup lang="ts">
import ReferralIcon from "~/components/Icons/ReferralIcon.vue";
import ReferralIconRed from "~/components/Icons/ReferralIconRed.vue";
import ThreeDot from "~/components/Icons/ThreeDot.vue";
import TrophyIcon from "~/components/Icons/TrophyIcon.vue";

const transactions = [
  {
    id: 1,
    type: "swap",
    asset: "ETH",
    amount: 0.2849,
    symbol: "+",
    pair: "USDC > ETH",
    direction: "in",
    date: "2025-07-15",
    txHash: "0x92ab...e719"
  },
  {
    id: 2,
    type: "send",
    asset: "BTC",
    amount: 0.015,
    symbol: "-",
    pair: "BTC",
    direction: "out",
    date: "2025-07-13",
    txHash: "0x92ab...e719"
  },
  {
    id: 3,
    type: "receive",
    asset: "ETH",
    amount: 0.1239,
    symbol: "+",
    pair: "ETH",
    direction: "in",
    date: "2025-07-12",
    txHash: "0x92ab...e719"
  },
  {
    id: 4,
    type: "send",
    asset: "BTC",
    amount: 0.024,
    symbol: "-",
    pair: "BTC",
    direction: "out",
    date: "2025-07-10",
    txHash: "0x92ab...e719"
  },
  {
    id: 5,
    type: "receive",
    asset: "ETH",
    amount: 0.1239,
    symbol: "+",
    pair: "ETH",
    direction: "in",
    date: "2025-07-08",
    txHash: "0x92ab...e719"
  },
  {
    id: 6,
    type: "receive",
    asset: "ETH",
    amount: 0.1239,
    symbol: "+",
    pair: "ETH",
    direction: "in",
    date: "2025-07-08",
    txHash: "0x92ab...e719"
  }
];
</script>

<template>
  <div class=" primary-border rounded-xl p-5">
    <header
      class="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center"
    >
      <div class="flex items-center gap-2">
        <button class="p-2.5 primary-border rounded-lg">
          <TrophyIcon />
        </button>
        <p class="text-secondary font-dm tracking-[-0.75px]">Transaction History </p>
      </div>
      <div class="flex items-center gap-3">
        <button class="primary-border px-4 py-2 rounded-full hover:bg-[#111111] duration-300">
            All
        </button>
        <button
          type="button"
          class="flex h-10 w-10 flex-col items-center justify-center gap-0.75 rounded-full primary-border text-[#7B7B7B] hover:bg-[#111111] duration-300"
        >
          <ThreeDot />
        </button>
      </div>
    </header>
    <div class="mt-5 space-y-3">
        <div v-for="transaction in transactions" :key="transaction.id" class="primary-border p-3 flex justify-between items-center rounded-lg ">
            <div class="flex gap-2  ">
                <component :is="transaction.direction === 'in' ? ReferralIcon : ReferralIconRed" />
                <div>
                    <p class="text-xs text-secondary"> {{transaction.symbol}}{{transaction.amount}} {{transaction.asset}}</p>
                    <p class="text-sm lg:text-base">Swap / {{transaction.pair}}</p>
                </div>
            </div>
            <div class="text-[10px] space-y-2">
                <p>Join Date</p>
                <p>2025-05-06 03:41:42</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
