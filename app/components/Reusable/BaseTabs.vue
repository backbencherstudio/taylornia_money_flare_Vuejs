<script setup lang="ts">
import type { Component } from "vue";

type TabValue = string | number;

interface TabItem {
  key: TabValue;
  label: string;
  icon?: Component;
}

const props = withDefaults(
  defineProps<{
    modelValue: TabValue;
    tabs: TabItem[];
    containerClass?: string;
    activeClass?: string;
    inactiveClass?: string;
  }>(),
  {
    containerClass: "flex items-center justify-between gap-3",
    activeClass:
      "bg-linear-to-t from-[#1a9975] to-[#2bffc3] border-[#2BFFC3] text-black",
    inactiveClass: "primary-border text-white",
  },
);

const emit = defineEmits<{
  (event: "update:modelValue", key: TabValue): void;
  (event: "change", key: TabValue): void;
}>();

const selectTab = (key: TabValue) => {
  if (key === props.modelValue) {
    return;
  }

  emit("update:modelValue", key);
  emit("change", key);
};
</script>

<template>
  <div :class="containerClass">
    <button
      v-for="tab in tabs"
      :key="tab.key"
      type="button"
      :class="[
        'flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full leading-[150%] border transition',
        modelValue === tab.key ? activeClass : inactiveClass,
      ]"
      @click="selectTab(tab.key)"
    >
      <component :is="tab.icon" v-if="tab.icon" />
      <span>{{ tab.label }}</span>
    </button>
  </div>
</template>
