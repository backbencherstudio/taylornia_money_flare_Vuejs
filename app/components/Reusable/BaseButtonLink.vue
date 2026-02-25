<script setup lang="ts">
import { computed } from "vue";

interface Props {
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  class?: string; 
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
});

const buttonClass = computed(() => {
  const base =
    "leading-[150%] font-medium text-sm rounded-full px-6.75 py-3 transition-all duration-200";

  const variants = {
    primary: " bg-linear-to-t from-[#1a9975] to-[#2bffc3] border border-[#2BFFC3] text-black hover:opacity-90",
    outline:
      "border border-[#2BFFC3] text-[#2BFFC3] hover:bg-[#2BFFC3] hover:text-black",
  };

  return [
    base,
    variants[props.variant],
    props.class, 
  ];
});
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="buttonClass">
    <slot />
  </NuxtLink>

  <a v-else-if="href" :href="href" :class="buttonClass">
    <slot />
  </a>

  <button v-else :type="type" :class="buttonClass">
    <slot />
  </button>
</template>
