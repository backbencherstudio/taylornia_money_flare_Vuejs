<script setup lang="ts">
import ReferralIcon from "~/components/Icons/ReferralIcon.vue";
import ThreeDot from "~/components/Icons/ThreeDot.vue";
import TrophyIcon from "~/components/Icons/TrophyIcon.vue";
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
        <p class="text-secondary font-dm tracking-[-0.75px]">Referral Log </p>
      </div>
      <div class="flex items-center gap-3">
        <button class="primary-border px-4 py-2 rounded-full hover:bg-[#111111] duration-300">
            This Month
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
        <div v-for="i in 5" :key="i" class="primary-border p-3 flex justify-between items-center rounded-lg ">
            <div class="flex gap-2  ">
                <ReferralIcon/>
                <div>
                    <p class="text-xs text-secondary">Email</p>
                    <p class="text-sm lg:text-base">dccwdc@gmail.com</p>
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
