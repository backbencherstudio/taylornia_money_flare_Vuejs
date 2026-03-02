<script setup lang="ts">
import SectionHeading from "../Reusable/SectionHeading.vue";

interface MarketRow {
  id: number;
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
}

const marketRows: MarketRow[] = [
  {
    id: 1,
    symbol: "ETH",
    icon: "/images/landing/coin.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "+12.5%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
  },
  {
    id: 2,
    symbol: "NEM",
    icon: "/images/landing/coin2.png",
    lastPrice: "$0.00123",
    volume: "$1.7K",
    marketCap: "$510,000",
    change: "-5.1%",
    isPositive: false,
    isFavorite: true,
    chart: "/images/RedChart.svg",
  },
  {
    id: 3,
    symbol: "ETH",
    icon: "/images/landing/coin.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "+12.5%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
  },
  {
    id: 4,
    symbol: "EDR",
    icon: "/images/landing/coin4.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "-2.22%",
    isPositive: false,
    chart: "/images/RedChart.svg",
  },
  {
    id: 5,
    symbol: "VIN",
    icon: "/images/landing/coin5.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "+12.5%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
  },
  {
    id: 6,
    symbol: "BNB",
    icon: "/images/landing/coin6.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "+12.5%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
  },
  {
    id: 7,
    symbol: "PPC",
    icon: "/images/landing/coin7.png",
    lastPrice: "$0.00123",
    volume: "$2.1K",
    marketCap: "$420,300",
    change: "+12.5%",
    isPositive: true,
    chart: "/images/GreenChart.svg",
  },
];

const rowCellClass = (row: MarketRow, index: number) => {
  if (row.isHighlighted) {
    return "bg-[#0D0805] border-y border-[#2D251F] py-4 first:rounded-l-2xl first:border-l last:rounded-r-2xl last:border-r";
  }

  if (index === marketRows.length - 1) {
    return "py-5";
  }

  return "border-b border-[#1A1A1A] py-5";
};
</script>

<template>
  <section class="relative ">
    <!-- decoration -->
    <div
      class="h-16 max-w-6xl mx-auto bg-[#2BFFC366] rounded-full blur-[46px] relative z-20 -mb-15"
    />
    <div class="h-10 xl:h-16 w-56 xl:w-4xl mx-auto bg-[#2bffc3]/50 rounded-full -mb-10 blur-md" />
    <!-- decoration -->
    <div class="mx-auto max-w-7xl px-6 xl:px-10  relative z-30">
      <div
        class="rounded-[30px] primary-border bg-[#050505] p-6 sm:p-8 lg:p-10 xl:p-12"
      >
        <SectionHeading title="Market Update" align="left" />
        <div class="mt-6 border-t border-[#1A1A1A]" />

        <div class="mt-4 overflow-x-auto">
          <table class="w-full min-w-245 border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  class="w-9 px-2 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  <span class="sr-only">Favorite</span>
                </th>
                <th
                  class="w-14 px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  #
                </th>
                <th
                  class="px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  Name
                </th>
                <th
                  class="px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  Last Price
                </th>
                <th
                  class="px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  24h Volume
                </th>
                <th
                  class="px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  Market Cap
                </th>
                <th
                  class="w-28 px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  24h %
                </th>
                <th
                  class="w-48 px-3 py-4 text-left text-sm xl:text-[16.34px] font-medium text-[#FFF] leading-[133%]"
                >
                  Last 7 Days
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colspan="8" class="p-0">
                  <div class="h-px w-full bg-[#1A1A1A]" />
                </td>
              </tr>

              <tr v-for="(row, index) in marketRows" :key="row.id">
                <td
                  :class="[
                    'px-2 align-middle text-[#ECECEC]',
                    rowCellClass(row, index),
                  ]"
                >
                  <span class="flex h-5 w-5 items-center justify-center">
                    <svg
                      class="h-4 w-4"
                      viewBox="0 0 24 24"
                      :fill="row.isFavorite ? '#2BFFC3' : 'none'"
                      :stroke="row.isFavorite ? '#2BFFC3' : '#8A8A91'"
                      stroke-width="1.8"
                    >
                      <path
                        d="M12 2.75L14.82 8.48L21 9.37L16.53 13.75L17.59 19.94L12 17L6.41 19.94L7.47 13.75L3 9.37L9.18 8.48L12 2.75Z"
                      />
                    </svg>
                  </span>
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base text-[#ECECEC] whitespace-nowrap',
                    rowCellClass(row, index),
                  ]"
                >
                  {{ row.id }}
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base text-[#ECECEC] whitespace-nowrap',
                    rowCellClass(row, index),
                  ]"
                >
                  <div class="flex items-center gap-3">
                    <span
                      class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-[#30343B] bg-[#101319]"
                    >
                      <img
                        :src="row.icon"
                        :alt="`${row.symbol} icon`"
                        class="h-6 w-6 object-contain"
                      />
                    </span>
                    <span>{{ row.symbol }}</span>
                  </div>
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base text-[#ECECEC] whitespace-nowrap',
                    rowCellClass(row, index),
                  ]"
                >
                  {{ row.lastPrice }}
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base text-[#ECECEC] whitespace-nowrap',
                    rowCellClass(row, index),
                  ]"
                >
                  {{ row.volume }}
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base text-[#ECECEC] whitespace-nowrap',
                    rowCellClass(row, index),
                  ]"
                >
                  {{ row.marketCap }}
                </td>

                <td
                  :class="[
                    'px-3 align-middle text-sm lg:text-base whitespace-nowrap',
                    row.isPositive ? 'text-[#49D697]' : 'text-[#FF4D4D]',
                    rowCellClass(row, index),
                  ]"
                >
                  {{ row.change }}
                </td>

                <td :class="['px-3 align-middle', rowCellClass(row, index)]">
                  <img
                    :src="row.chart"
                    alt="7 day trend"
                    class="h-auto w-30.75"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
