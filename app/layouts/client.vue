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
  </div>
</template>

