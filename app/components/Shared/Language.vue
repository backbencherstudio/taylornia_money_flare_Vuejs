<script setup lang="ts">
const languageOptions = [
  { label: "English", value: "en", flag: "/images/flags/eng.png" },
  { label: "Spanish", value: "es", flag: "/images/flags/spain.png" },
  { label: "French", value: "cn", flag: "/images/flags/china.png" },
];
</script>

<template>
  <div>
    <button
      type="button"
      class="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      aria-label="Language selector"
    >
      <img src="/images/flags/eng.png" alt="" class="w-4" />
      <span class="text-sm">Eng</span>
      <ArrowDown />
    </button>
  </div>
</template>

<style scoped></style>
