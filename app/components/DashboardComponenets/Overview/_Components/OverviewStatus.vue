<script setup lang="ts">
import { computed } from "vue";
import CoinIcon from "~/components/Icons/CoinIcon.vue";
import NetworkIcon from "~/components/Icons/NetworkIcon.vue";
import PigIcon from "~/components/Icons/PigIcon.vue";
import ThreeDot from "~/components/Icons/ThreeDot.vue";

interface PortfolioMetric {
  value: string;
  label: string;
}

interface BalanceMetric {
  value: string; 
  change?: string;
  label: string;
  color: string;
}

interface BalanceFooterMetric {
  title: string;
  value: string;
  valueClass?: string;
}

const portfolioMetrics: PortfolioMetric[] = [
  { value: "$22,5k", label: "Daily Profit" },
  { value: "$18,8k", label: "Total Profit" },
  { value: "$15,1k", label: "Referral Reward" },
  { value: "Yes", label: "Refund" },
];

const balanceMetrics: BalanceMetric[] = [
  {
    value: "$70,230",
    change: "+2.5%",
    label: "Portfolio Value",
    color: "#375DFB",
  },
  {
    value: "$15,530",
    change: "+2.5%",
    label: "Wallet Balance",
    color: "#35B9E9",
  },
  {
    value: "$4,620",
    label: "Available to Invest",
    color: "#38C793",
  },
];

const parseMetricValue = (value: string) =>
  Number(value.replace(/[^0-9.-]/g, "")) || 0;

const balanceMetricsWithProgress = computed(() => {
  const total = balanceMetrics.reduce(
    (sum, metric) => sum + parseMetricValue(metric.value),
    0,
  );

  return balanceMetrics.map((metric) => ({
    ...metric,
    progress: total > 0 ? (parseMetricValue(metric.value) / total) * 100 : 0,
  }));
});

const balanceFooterMetrics: BalanceFooterMetric[] = [
  {
    title: "Daily Change:",
    value: "+1.8% (+$1,350)",
    valueClass: "text-[#49E5B8]",
  },
  {
    title: "Monthly Change:",
    value: "+4.5% (+$3,230)",
    valueClass: "text-[#49E5B8]",
  },
  { title: "Pending Orders:", value: "$1,000" },
];
</script>

<template>
  <section class="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-12">
    <article
      class="relative overflow-hidden rounded-xl primary-border bg-[#080808]/95 p-4 lg:p-5 xl:col-span-4"
    >
      <div
        class="pointer-events-none absolute -top-10 -left-12 h-28 w-28 rounded-full bg-[#0b7e61]/35 blur-3xl"
      />

      <div class="relative z-10">
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2 text-sm text-[#D8D8D8]">
            <div
              class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#242424] bg-[#101010]"
            >
              <PigIcon />
            </div>
            <p>Portfolio</p>
          </div>

          <button
            type="button"
            class="flex h-10 w-10 flex-col items-center justify-center gap-0.75 rounded-full border border-[#242424] text-[#7B7B7B] hover:bg-[#111111]"
          >
            <ThreeDot />
          </button>
        </div>

        <div class="my-5 flex justify-between items-center gap-3">
          <div>
            <img
              src="/overview2.svg"
              alt="Antminer"
              class="-mb-6"
            />
          </div>

          <div class="flex items-center gap-3.75">
            <img src="/overview.svg" alt="" />
            <div class="flex flex-col justify-between">
                <p class="text-lg w-[1ch]">12.4%</p>
                <p class="text-xs text-primary">+$8.5K </p>
            </div>
          </div>
        </div>

        <div
          class="mt-4 grid grid-cols-2 gap-3 border-t border-[#222222] pt-4 sm:grid-cols-4"
        >
          <div v-for="metric in portfolioMetrics" :key="metric.label">
            <p class="font-dm text-lg leading-none text-white">
              {{ metric.value }}
            </p>
            <p class="mt-3.5 text-xs text-[#A8A8A8]">{{ metric.label }}</p>
          </div>
        </div>
      </div>
    </article>

    <article
      class="relative overflow-hidden rounded-xl primary-border bg-[#080808]/95 p-4 lg:p-5 xl:col-span-8"
    >
      <div
        class="pointer-events-none absolute top-0 left-24 h-20 w-64 bg-[#2f65ff1f] blur-2xl"
      />

      <div class="relative z-10">
        <header class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2 text-sm text-[#D8D8D8]">
            <span
              class="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#242424] bg-[#101010]"
            >
              <CoinIcon/>
            </span>
            <p>Balance Overview</p>
          </div>

          <div class="flex items-center gap-2">
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-full primary-border px-3 py-1.5 text-xs text-[#EAEAEA] hover:bg-[#111111]"
            >
              <NetworkIcon />
              More Insights
            </button>
            <button
              type="button"
              class="flex h-10 w-10 flex-col items-center justify-center gap-0.75 rounded-full border border-[#242424] text-[#7B7B7B] hover:bg-[#111111]"
            >
              <ThreeDot />
            </button>
          </div>
        </header>

        <div class="mt-4 flex h-2.5 gap-2">
          <span
            v-for="metric in balanceMetricsWithProgress"
            :key="`progress-${metric.label}`"
            class="block h-full rounded-xs"
            :style="{
              flexGrow: metric.progress,
              flexBasis: '0',
              backgroundColor: metric.color,
            }"
          />
        </div>

        <div class="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="metric in balanceMetricsWithProgress"
            :key="metric.label"
            class="space-y-1.5"
          >
            <div class="flex items-end gap-2">
              <p class="font-dm text-[22px] leading-none text-white">
                {{ metric.value }}
              </p>
              <span
                v-if="metric.change"
                class="text-xs font-medium text-[#49E5B8]"
                >{{ metric.change }}</span
              >
            </div>
            <p class="flex items-center gap-2 text-sm text-[#A8A8A8]">
              <span
                class="h-1.5 w-3.5 rounded-xs"
                :style="{ backgroundColor: metric.color }"
              />
              {{ metric.label }}
            </p>
          </div>
        </div>

        <div class="mt-5 border-t border-[#222222] pt-4">
          <div
            class="grid grid-cols-1 gap-2 text-xs text-[#B0B0B0] md:grid-cols-3"
          >
            <div
              v-for="(metric, index) in balanceFooterMetrics"
              :key="metric.title"
              :class="[
                index > 0 ? 'md:border-l md:border-[#2A2A2A] md:pl-6' : '',
              ]"
            >
              <span>{{ metric.title }}</span>
              <span
                :class="metric.valueClass ? metric.valueClass : 'text-white'"
              >
                {{ metric.value }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped></style>
