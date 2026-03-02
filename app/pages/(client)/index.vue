<script setup lang="ts">
import EasySteps from "~/components/HomeSections/EasySteps.vue";
import FAQ from "~/components/HomeSections/FAQ.vue";
import HeroSection from "~/components/HomeSections/HeroSection.vue";
import InvestSection from "~/components/HomeSections/InvestSection.vue";
import OurArticles from "~/components/HomeSections/OurArticles.vue";
import OurPlan from "~/components/HomeSections/OurPlan.vue";
import PowerfulFeatures from "~/components/HomeSections/PowerfulFeatures.vue";
import SophisticatedAI from "~/components/HomeSections/Sophisticated/SophisticatedAI.vue";
import MarketUpdate from "~/components/MarketUpdate/MarketUpdate.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div class="fade-in">
    <HeroSection />
    <SophisticatedAI />
    <EasySteps />
    <PowerfulFeatures />
    <InvestSection />
    <OurPlan/>
    <MarketUpdate/>
    <OurArticles />
    <FAQ />
  </div>
</template>

<style scoped></style>
