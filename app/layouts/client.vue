<script setup lang="ts">
import Footer from '~/components/Shared/Footer.vue';
import Navbar from '~/components/Shared/Navbar.vue';

</script>

<template>
  <div class="">
    <main class="">
      <Navbar/>
      <slot />
      <Footer/>
    </main>
   <div
      class="absolute -top-32 -left-32 lg:-top-100 lg:-left-100 blur-[125px] opacity-[0.4] w-54.75 h-54.75 lg:w-160.75 lg:h-160.75 bg-primary rounded-full"
    />
  </div>
</template>

