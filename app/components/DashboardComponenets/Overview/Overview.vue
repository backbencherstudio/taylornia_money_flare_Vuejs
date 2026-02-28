<script setup lang="ts">
import PigIcon from "~/components/Icons/PigIcon.vue";
import WithdrawIcon from "~/components/Icons/WithdrawIcon.vue";
import OverviewStatus from "./_Components/OverviewStatus.vue";
import MarketUpdate from "./_Components/MarketUpdate.vue";
</script>

<template>
  <div>
    <header class="flex flex-col sm:flex-row justify-between lg:items-center gap-3">
      <div>
        <h3 class="text-lg xl:text-xl font-dm ">Welcome back, Jhon!</h3>
        <p class="text-sm leading-[160%] text-[#CCC]">Monday, 18 December 2024</p>
      </div>
      <div class="flex items-center justify-between gap-3">
        <button
          class="flex items-center gap-2 text-sm font-medium bg-linear-to-t from-[#1a9975] to-[#2bffc3] border border-[#2BFFC3] text-black py-2 px-4 rounded-full leading-[150%]"
        >
          <PigIcon /> Invest Now
        </button>
        <button
          class="flex items-center gap-2 text-sm font-medium border border-[#222222] text-white py-2 px-4 rounded-full leading-[150%]"
        >
          <WithdrawIcon /> Withdraw
        </button>
      </div>
    </header>
    <div>
        <OverviewStatus/>
    </div>
    <div>
        <MarketUpdate/>
    </div>
  </div>
</template>

<style scoped></style>

