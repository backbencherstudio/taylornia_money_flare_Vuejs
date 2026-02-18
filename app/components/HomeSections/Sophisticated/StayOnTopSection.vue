<script setup lang="ts">
import BaseButtonLink from "~/components/Reusable/BaseButtonLink.vue";
import SectionHeading from "~/components/Reusable/SectionHeading.vue";
</script>

<template>
  <div class="xl:max-w-312 mx-auto py-20 md:py-25 lg:py-45 ">
    <div class="flex flex-col lg:flex-row gap-10 lg:gap-6 items-center justify-between">
      <div class="px-6">
        <SectionHeading
          title="Stay on top of market moves in real time"
          description="Track live price changes, market shifts, and key events as they happen. Never miss an opportunity or a critical update again."
          align="left"
          titleWidth="lg:w-[15ch]"
          descriptionWidth="xl:w-[45ch]"
        />
        <div class="mt-11">
          <BaseButtonLink>Get Started</BaseButtonLink>
        </div>
      </div>
      <div class="relative lg:pr-6 xl:pr-0">
        <div class="absolute lg:hidden inset-0 bg-linear-to-l to-[#030303] via-transparent from-[#030303]  "/>
        <img src="/images/landing/stat.png" alt="w-" class="hidden lg:block lg:w-auto xl:w-152.25" />
        <img src="/images/landing/stat-mobile.png" alt="w" class=" lg:hidden lg:w-120.25" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
