<script setup lang="ts">
import OurArticles from '~/components/HomeSections/OurArticles.vue';
import StayOnTopSection from '~/components/HomeSections/Sophisticated/StayOnTopSection.vue';
import HowaItHero from '~/components/HowItWorks/HowaItHero.vue';

definePageMeta({
  layout: "client",
});
</script>

<template>
  <div>
    <HowaItHero/>
    
    <StayOnTopSection/>
    <OurArticles/>
  </div>
</template>

<style scoped></style>
