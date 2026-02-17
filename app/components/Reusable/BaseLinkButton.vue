<script setup lang="ts">
interface Props {
  to?: string;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
}

const props = withDefaults(defineProps<Props>(), {
  type: "button",
  variant: "primary",
});
</script>

<template>
  <!-- NuxtLink -->
  <NuxtLink v-if="to" :to="to" :class="buttonClass">
    <slot />
  </NuxtLink>

  <!-- External link -->
  <a v-else-if="href" :href="href" :class="buttonClass">
    <slot />
  </a>

  <!-- Button -->
  <button v-else :type="type" :class="buttonClass">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
  computed: {
    buttonClass(): string {
      const base =
        "leading-[150%] font-medium text-sm rounded-full px-6.75 py-3 transition-all duration-200";

      const variants = {
        primary: "btn-bg border border-[#2BFFC3] text-black hover:opacity-90",
        outline:
          "border border-[#2BFFC3] text-[#2BFFC3] hover:bg-[#2BFFC3] hover:text-black",
      };

      return `${base} ${variants[this.variant]}`;
    },
  },
};
</script>
