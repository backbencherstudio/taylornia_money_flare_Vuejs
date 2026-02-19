<script setup lang="ts">
import EasySteps from '~/components/HomeSections/EasySteps.vue';
import HeroSection from '~/components/HomeSections/HeroSection.vue';
import PowerfulFeatures from '~/components/HomeSections/PowerfulFeatures.vue';
import SophisticatedAI from '~/components/HomeSections/Sophisticated/SophisticatedAI.vue';

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div class="">
    <HeroSection/>
    <SophisticatedAI/>
    <EasySteps/>
    <PowerfulFeatures/>
  </div>
</template>

<style scoped>

</style>
