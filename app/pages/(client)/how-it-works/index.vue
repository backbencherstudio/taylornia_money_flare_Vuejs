<script setup lang="ts">
import OurArticles from '~/components/HomeSections/OurArticles.vue';
import StayOnTopSection from '~/components/HomeSections/Sophisticated/StayOnTopSection.vue';
import HowaItHero from '~/components/HowItWorks/HowaItHero.vue';
import HowItWork from '~/components/HowItWorks/HowItWork.vue';

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div class="fade-in">
    <HowaItHero/>
    <HowItWork/>
    <StayOnTopSection/>
    <OurArticles/>
  </div>
</template>

<style scoped></style>
