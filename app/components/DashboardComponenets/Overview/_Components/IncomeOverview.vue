<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import type { ApexOptions } from "apexcharts";

const ApexChart = defineAsyncComponent(async () => {
  const module = await import("vue3-apexcharts");
  return module.default;
});

const series = [
  {
    name: "Income",
    data: [18, 36, 58, 18],
  },
];

const chartOptions: ApexOptions = {
  chart: {
    type: "bar",
    background: "transparent",
    toolbar: { show: false },
    sparkline: { enabled: true },
    parentHeightOffset: 0,
    animations: {
      enabled: true,
      speed: 850,
    },
  },
  colors: ["#2BFFC3", "#22a07e", "#34e2bc", "#1a7f64"],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 12,
      columnWidth: "88%",
    },
  },
  dataLabels: { enabled: false },
  stroke: { width: 0 },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      opacityFrom: 1,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  legend: { show: false },
  tooltip: { enabled: false },
  xaxis: {
    labels: { show: false },
    axisBorder: { show: false },
    axisTicks: { show: false },
    categories: ["W1", "W2", "W3", "W4"],
  },
  yaxis: { show: false },
  grid: { show: false, padding: { top: 0, right: 0, bottom: 0, left: 0 } },
  states: {
    hover: { filter: { type: "none" } },
    active: { filter: { type: "none" } },
  },
};
</script>

<template>
  <section class="relative flex flex-col lg:flex-row  justify-between items-center overflow-hidden primary-border rounded-xl bg-[#050505] p-5">
    <div class="relative z-10 ">
      <p class="text-secondary">Income</p>
      <h3 class="mt-2 text-2xl font-semibold text-white">$32,500</h3>

      <div class="mt-6 ">
        <p class="text-secondary text-base">Today up to</p>
        <p class="text-[#2BFFC3]">+2.25% <span class="text-white">This month</span></p>
      </div>
    </div>

    <div class="relative z-0 h-45">
      <ClientOnly>
        <ApexChart
          type="bar"
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
