<script setup lang="ts">
import DashboardIcon from "~/components/Icons/DashboardIcon.vue";
import HexaIcon from "~/components/Icons/HexaIcon.vue";
import MenuIcon2 from "~/components/Icons/MenuIcon2.vue";
import PaperIcon from "~/components/Icons/PaperIcon.vue";

import StarIcon from "~/components/Icons/StarIcon.vue";
import MarketUpdate from "~/components/MarketUpdate/MarketUpdate.vue";
import ReferNow from "~/components/ReferralProgram/ReferNow.vue";
import Technology from "~/components/ReferralProgram/Technology.vue";

definePageMeta({
  layout: "client",
});
const features = [
  {
    title: "Purpose",
    description:
      "The referral program allows users to invite others to MoneyFlare in a controlled and transparent way. It is designed to support steady, long-term growth rather than promotional activity.",
    icon: StarIcon,
  },
  {
    title: "How It Works",
    description:
      "Users receive a unique referral link. When a new user joins through this link and completes onboarding, the referral is recorded automatically by the system.  ",
    icon: DashboardIcon,
  },
  {
    title: "Benefits",
    description:
      "Referral benefits are applied based on clearly defined participation conditions and are structured for long-term engagement, not volume-based recruitment.  ",
    icon: HexaIcon,
  },
  {
    title: "Rules & Transparency",
    description:
      "All referral activity follows clear platform rules. Eligibility, tracking, and benefits are visible within the user account interface.",
    icon: PaperIcon,
  },
  {
    title: "Long-Term Focus",
    description:
      "Let AI-driven strategies operate automatically based on predefined rules and market signals — no constant monitoring required.",
    icon: MenuIcon2,
  },
];
</script>

<template>
  <section class="relative overflow-hidden pb-20 pt-25 lg:py-45 fade-in">
    <div class="max-w-7xl mx-auto px-6 xl:px-10 relative z-10">
      <div>
        <h1
          class="text-[11.11vw] sm:text-[4rem] text-center font-dm text-white font-medium leading-[109%] tracking-[-1.28px]"
        >
          Referral Program
        </h1>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-15 xl:mt-25">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="bg-[#080808] border border-[#222222] rounded-xl p-6 lg:col-span-2"
          :class="{ 'lg:col-span-3': index > 2 }"
        >
          <div
            class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
          >
            <component :is="feature.icon" />
          </div>
          <div class="mt-8">
            <h2 class="text-xl font-semibold">{{ feature.title }}</h2>
            <p class="text-sm text-[#CCC] leading-[160%]">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Decoration -->
    <img
      src="/bg-lights.svg"
      alt=""
      class="absolute -top-60 -right-20 lg:-top-80 xl:-top-100 lg:-right-20 rotate-40 lg:rotate-40 z-0 h-150 lg:h-auto"
    />
  </section>
  <ReferNow />
  <Technology />
  <div class="py-20">
    <MarketUpdate />
  </div>
</template>

<style scoped></style>
