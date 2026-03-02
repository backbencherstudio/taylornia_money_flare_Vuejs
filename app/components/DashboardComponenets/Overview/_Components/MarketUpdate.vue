<script setup lang="ts">
import ReusableTable from "~/components/Reusable/ReusableTable.vue";

interface MarketRow {
  id: number;
  favorite: boolean;
  rank: number;
  symbol: string;
  icon: string;
  lastPrice: string;
  volume: string;
  marketCap: string;
  change: string;
  isPositive: boolean;
  isFavorite?: boolean;
  isHighlighted?: boolean;
  chart: string;
  actionLabel: string;
}

const emit = defineEmits<{
  (event: "trade-click", row: MarketRow): void;
}>();

const marketRows: MarketRow[] = [
  {
    id: 1,
    favorite: false,
    rank: 1,
    symbol: "BTC",
    icon: "/images/landing/coin.png",
    lastPrice: "$63,120.45",
    volume: "$38.2B",
    marketCap: "$1.24T",
    change: "+1.82%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
    actionLabel: "Trade",
  },
  {
    id: 2,
    favorite: true,
    rank: 2,
    symbol: "ETH",
    icon: "/images/landing/coin2.png",
    lastPrice: "$3,246.11",
    volume: "$16.7B",
    marketCap: "$390.8B",
    change: "-0.74%",
    isPositive: false,
    isFavorite: true,
    chart: "/images/RedChart.svg",
    actionLabel: "Trade",
  },
  {
    id: 3,
    favorite: false,
    rank: 3,
    symbol: "SOL",
    icon: "/images/landing/coin.png",
    lastPrice: "$142.87",
    volume: "$4.9B",
    marketCap: "$66.2B",
    change: "+3.26%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
    actionLabel: "Trade",
  },
  {
    id: 4,
    favorite: false,
    rank: 4,
    symbol: "BNB",
    icon: "/images/landing/coin4.png",
    lastPrice: "$518.90",
    volume: "$1.8B",
    marketCap: "$74.6B",
    change: "+0.65%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
    actionLabel: "Trade",
  },
];

const columns = [
  { label: "", key: "favorite" },
  { label: "#", key: "rank" },
  { label: "Name", key: "symbol" },
  { label: "Last Price", key: "lastPrice" },
  { label: "24h Volume", key: "volume" },
  { label: "Market Cap", key: "marketCap" },
  { label: "24h %", key: "change" },
  { label: "Last 7 Days", key: "chart" },
  { label: "Action", key: "action" },
];

const handleTradeClick = (row: MarketRow) => {
  emit("trade-click", row);
};
</script>

<template>
  <section class="mt-5 rounded-[10px] primary-border bg-black p-6">
    <ReusableTable :columns="columns" :data="marketRows" row-key="id">
      <template #cell-favorite="{ row }">
        <span class="flex h-5 w-5 items-center justify-center">
          <svg
            class="h-4 w-4"
            viewBox="0 0 24 24"
            :fill="(row as MarketRow).favorite ? '#2BFFC3' : 'none'"
            :stroke="(row as MarketRow).favorite ? '#2BFFC3' : '#8A8A91'"
            stroke-width="1.8"
          >
            <path
              d="M12 2.75L14.82 8.48L21 9.37L16.53 13.75L17.59 19.94L12 17L6.41 19.94L7.47 13.75L3 9.37L9.18 8.48L12 2.75Z"
            />
          </svg>
        </span>
      </template>

      <template #cell-symbol="{ row }">
        <div class="flex items-center gap-3">
          <span
            class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#30343B] bg-[#101319]"
          >
            <img
              :src="(row as MarketRow).icon"
              :alt="`${(row as MarketRow).symbol} icon`"
              class="h-6 w-6 object-contain"
            />
          </span>
          <span>{{ (row as MarketRow).symbol }}</span>
        </div>
      </template>

      <template #cell-change="{ row }">
        <span :class="(row as MarketRow).isPositive ? 'text-[#49D697]' : 'text-[#FF4D4D]'">
          {{ (row as MarketRow).change }}
        </span>
      </template>

      <template #cell-chart="{ row }">
        <img :src="(row as MarketRow).chart" alt="7 day trend" class="h-auto w-30.75" />
      </template>

      <template #cell-action="{ row }">
        <button
          type="button"
          class="rounded-full border border-[#2BFFC3] bg-linear-to-t from-[#1a9975] to-[#2bffc3] px-4 py-1.5 text-xs font-semibold text-black"
          @click="handleTradeClick(row as MarketRow)"
        >
          {{ (row as MarketRow).actionLabel }}
        </button>
      </template>
    </ReusableTable>
  </section>
</template>
