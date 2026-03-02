<script setup lang="ts">
import PigIcon from '../Icons/PigIcon.vue';
import WithdrawIcon from '../Icons/WithdrawIcon.vue';
  const router = useRouter();
</script>

<template>
  <header
    class="flex flex-col sm:flex-row justify-between lg:items-center gap-3"
  >
    <div>
      <h3 class="text-lg xl:text-xl font-dm">Welcome back, Jhon!</h3>
      <p class="text-sm leading-[160%] text-secondary">Monday, 18 December 2024</p>
    </div>
    <div class="flex items-center justify-between gap-3">
      <button
        @click="router.push('/dashboard/wallets')"
        class="flex items-center gap-2 text-sm font-medium bg-linear-to-t from-[#1a9975] to-[#2bffc3] border border-[#2BFFC3] text-black py-2 px-4 rounded-full leading-[150%]"
      >
        <PigIcon /> Invest Now
      </button>
      <button
        @click="router.push('/dashboard/wallets?tab=withdraw')"
        class="flex items-center gap-2 text-sm font-medium primary-border text-white py-2 px-4 rounded-full leading-[150%]"
      >
        <WithdrawIcon /> Withdraw
      </button>
    </div>
  </header>
</template>

<style scoped></style>
