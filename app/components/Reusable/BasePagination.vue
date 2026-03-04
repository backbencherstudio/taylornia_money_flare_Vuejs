<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    modelValue?: number;
    totalPages: number;
    previousLabel?: string;
    nextLabel?: string;
  }>(),
  {
    modelValue: 1,
    previousLabel: "Previous",
    nextLabel: "Next",
  },
);

const emit = defineEmits<{
  (event: "update:modelValue", page: number): void;
  (event: "change", page: number): void;
  (event: "previous", page: number): void;
  (event: "next", page: number): void;
}>();

const safeTotalPages = computed(() => Math.max(1, props.totalPages || 1));
const currentPage = computed(() =>
  Math.min(Math.max(1, props.modelValue || 1), safeTotalPages.value),
);

const isPreviousDisabled = computed(() => currentPage.value <= 1);
const isNextDisabled = computed(() => currentPage.value >= safeTotalPages.value);

const emitPage = (page: number) => {
  emit("update:modelValue", page);
  emit("change", page);
};

const goToPrevious = () => {
  if (isPreviousDisabled.value) {
    return;
  }

  const targetPage = currentPage.value - 1;
  emitPage(targetPage);
  emit("previous", targetPage);
};

const goToNext = () => {
  if (isNextDisabled.value) {
    return;
  }

  const targetPage = currentPage.value + 1;
  emitPage(targetPage);
  emit("next", targetPage);
};
</script>

<template>
  <nav
    class="w-full  flex items-center justify-between gap-2"
    aria-label="Pagination"
  >
    <button
      type="button"
      :disabled="isPreviousDisabled"
      class="min-w-22 rounded-full border border-[#1F1F1F] bg-[#050505] px-4 py-1.5 text-sm text-[#D8D8D8] transition disabled:cursor-not-allowed disabled:opacity-40"
      @click="goToPrevious"
    >
      {{ previousLabel }}
    </button>

    <p class="text-sm text-white whitespace-nowrap">
      Page {{ currentPage }} of {{ safeTotalPages }}
    </p>

    <button
      type="button"
      :disabled="isNextDisabled"
      :class="[
        'min-w-22 rounded-full border px-4 py-1.5 text-sm transition disabled:cursor-not-allowed disabled:opacity-40',
        isNextDisabled
          ? 'border-[#1F1F1F] bg-[#050505] text-[#777777]'
          : 'border-[#2BFFC3] bg-linear-to-t from-[#1a9975] to-[#2bffc3] text-black',
      ]"
      @click="goToNext"
    >
      {{ nextLabel }}
    </button>
  </nav>
</template>
