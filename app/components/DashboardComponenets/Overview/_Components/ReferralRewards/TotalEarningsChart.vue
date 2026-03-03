<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type { ApexOptions } from "apexcharts";

const ApexChart = defineAsyncComponent(async () => {
  const module = await import("vue3-apexcharts");
  return module.default;
});

const series = [
  {
    name: "Earnings",
    data: [
      102,75,70, 45, 26, 39, 63, 88, 97, 93, 22, 46, 24, 58, 74, 48, 25, 53, 61, 49, ,
      ,
    ],
  },
];

const chartOptions: ApexOptions = {
  chart: {
    type: "area",
    background: "transparent",
    toolbar: { show: false },
    zoom: { enabled: false },
    sparkline: { enabled: true },
    animations: {
      enabled: true,
      speed: 850,
    },
  },
  colors: ["#ff392b"],
  stroke: {
    width: 3,
    curve: "smooth",
    lineCap: "round",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      opacityFrom: 0.42,
      opacityTo: 0.3,
      stops: [0, 75, 100],
    },
  },
  dataLabels: { enabled: false },
  markers: { size: 0 },
  grid: { show: false, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
  xaxis: {
    labels: { show: false },
    axisTicks: { show: false },
    axisBorder: { show: false },
    tooltip: { enabled: false },
  },
  yaxis: { show: false },
  tooltip: {
    theme: "dark",
    x: { show: false },
    marker: { show: false },
  },
  legend: { show: false },
};
</script>

<template>
  <section
    class="relative overflow-hidden rounded-xl border border-[#1f1f1f] bg-[#050505]"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(100%_80%_at_100%_100%,rgba(43,255,195,0.1)_0%,rgba(5,5,5,0)_55%)]"
    />

    <div class="relative z-10 p-5">
      <p class="text-secondary">Total Earnings</p>
      <h3 class="mt-2 text-2xl font-semibold text-white">$85.00</h3>

      <div class="mt-6 flex items-end justify-between gap-3">
        <p class="text-secondary text-base">Today up to</p>
        <p class="text-[#ff392b]">- 30% </p>
      </div>
    </div>

    <div class="relative z-0 mt-4 h-45 sm:h-60 lg:h-82.5">
      <ClientOnly>
        <ApexChart
          type="area"
          height="100%"
          width="100%"
          :options="chartOptions"
          :series="series"
        />
        <template #fallback>
          <div class="h-full w-full" />
        </template>
      </ClientOnly>
    </div>
  </section>
</template>

<style scoped></style>
