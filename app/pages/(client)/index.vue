<script setup lang="ts">
import EasySteps from "~/components/HomeSections/EasySteps.vue";
import FAQ from "~/components/HomeSections/FAQ.vue";
import HeroSection from "~/components/HomeSections/HeroSection.vue";
import InvestSection from "~/components/HomeSections/InvestSection.vue";
import OurArticles from "~/components/HomeSections/OurArticles.vue";
import PowerfulFeatures from "~/components/HomeSections/PowerfulFeatures.vue";
import SophisticatedAI from "~/components/HomeSections/Sophisticated/SophisticatedAI.vue";

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div class="">
    <HeroSection />
    <SophisticatedAI />
    <EasySteps />
    <PowerfulFeatures />
    <InvestSection />
    <OurArticles />
    <FAQ />
  </div>
</template>

<style scoped></style>
