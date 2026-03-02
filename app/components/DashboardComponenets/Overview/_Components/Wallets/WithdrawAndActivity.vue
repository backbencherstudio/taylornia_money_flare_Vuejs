<script setup lang="ts">
import Wallet1 from "~/components/Icons/Wallet1.vue";
import Wallet2 from "~/components/Icons/Wallet2.vue";
import Wallet3 from "~/components/Icons/Wallet3.vue";
import BaseButtonLink from "~/components/Reusable/BaseButtonLink.vue";
</script>

<template>
  <div class="mt-6 grid md:grid-cols-2 gap-3">
    <div
      class="primary-border bg-[#080808]/95 p-4 lg:p-5 rounded-[10px]"
    >
      <p class="text-secondary font-dm tracking-[-0.75px]">Withdrawal Funds</p>

      <form class="mt-5 space-y-4">
        <div>
          <label for="" class="text-[10px] text-white font-medium mb-2"
            >Amount</label
          >
          <input
            placeholder="Enter your Amount"
            type="text"
            class="w-full primary-border text-xs py-3 px-3.75 rounded-lg focus:outline-none focus:border-[#28f0b8] duration-500 ease-in-out"
          />
        </div>
        <div>
          <label for="" class="text-[10px] text-white font-medium mb-2"
            >Payment Method</label
          >
          <input
            placeholder="Enter your Amount"
            type="text"
            class="w-full primary-border text-xs py-3 px-3.75 rounded-lg focus:outline-none focus:border-[#28f0b8] duration-500 ease-in-out"
          />
        </div>
        <BaseButtonLink type="submit" class="w-full"> Withdraw </BaseButtonLink>
      </form>
    </div>
    <div
      class="primary-border bg-[#080808]/95 p-4 lg:p-5 rounded-[10px]"
    >
      <div class="flex justify-between items-center">
        <p class="text-secondary font-dm tracking-[-0.75px]">Activity</p>
        <button class="text-xs text-secondary">See all</button>
      </div>

      <div>
        <div
          class="primary-border p-3 mt-4 rounded-lg flex items-center justify-between gap-3"
        >
          <div class="flex items-center gap-2">
            <button
              class="p-3 primary-border bg-[#0F0B08] rounded-full"
            >
              <Wallet1 />
            </button>
            <p class="text-sm">Profit</p>
          </div>
          <p class="text-[10px] text-secondary">$25315.00</p>
        </div>
        <div
          class="primary-border p-3 mt-4 rounded-lg flex items-center justify-between gap-3"
        >
          <div class="flex items-center gap-2">
            <button
              class="p-3 primary-border bg-[#0F0B08] rounded-full"
            >
              <Wallet2 />
            </button>
            <p class="text-sm">Withdraw</p>
          </div>
          <p class="text-[10px] text-secondary">$20,500.00</p>
        </div>
        <div
          class="primary-border p-3 mt-4 rounded-lg flex items-center justify-between gap-3"
        >
          <div class="flex items-center gap-2">
            <button
              class="p-3 primary-border bg-[#0F0B08] rounded-full"
            >
              <Wallet3 />
            </button>
            <p class="text-sm">Invest</p>
          </div>
          <p class="text-[10px] text-secondary">$15,800.00</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
