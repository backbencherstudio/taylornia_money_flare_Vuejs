<script setup lang="ts">
import type { SelectOption, SelectValue } from "../../types/select";

interface Props {
  modelValue: SelectValue | null;
  options: SelectOption[];
  placeholder?: string;
  ariaLabel?: string;
  menuAlign?: "left" | "right";
  buttonClass?: string;
  menuClass?: string;
  optionClass?: string;
  selectedOptionClass?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: "Select",
  ariaLabel: "Select option",
  menuAlign: "right",
  buttonClass: "",
  menuClass: "",
  optionClass: "",
  selectedOptionClass: "",
  fullWidth: false,
  disabled: false,
  size: "md",
});

const emit = defineEmits<{
  (e: "update:modelValue", value: SelectValue): void;
  (e: "change", option: SelectOption): void;
}>();

const isOpen = ref(false);
const rootRef = ref<HTMLElement | null>(null);

const selectedOption = computed(() =>
  props.options.find((option) => option.value === props.modelValue),
);

const alignClass = computed(() =>
  props.menuAlign === "left"
    ? "left-0 origin-top-left"
    : "right-0 origin-top-right",
);

const rootClass = computed(() =>
  props.fullWidth ? "relative w-full" : "relative inline-block max-w-full",
);

const sizeClass = computed(() => {
  if (props.size === "sm") return "h-9 px-3 text-sm";
  if (props.size === "lg") return "h-11 px-4 text-base";
  return "h-10 px-3.5 text-sm";
});

const toggleOpen = () => {
  if (props.disabled) return;
  isOpen.value = !isOpen.value;
};

const close = () => {
  isOpen.value = false;
};

const open = () => {
  if (props.disabled) return;
  isOpen.value = true;
};

const isOptionDisabled = (option: SelectOption) => Boolean(option.disabled);

const selectOption = (option: SelectOption) => {
  if (isOptionDisabled(option)) return;
  emit("update:modelValue", option.value);
  emit("change", option);
  close();
};

const isSelected = (option: SelectOption) => option.value === props.modelValue;

const handleDocumentClick = (event: MouseEvent) => {
  if (!isOpen.value) return;

  const target = event.target as Node | null;
  if (!target) return;

  if (!rootRef.value?.contains(target)) {
    close();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    close();
  }
};

onMounted(() => {
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keydown", handleEscape);
});

defineExpose({ open, close });
</script>

<template>
  <div ref="rootRef" :class="rootClass">
    <button
      type="button"
      class="flex min-w-0 items-center justify-between gap-2 rounded-md border border-white/15 bg-[#0B0B0B] text-white/85 outline-none transition-colors duration-150"
      :class="[
        sizeClass,
        fullWidth ? 'w-full' : 'max-w-full',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'hover:border-white/30 focus-visible:border-[#2BFFC3]/50 focus-visible:ring-2 focus-visible:ring-[#2BFFC3]/20',
        buttonClass,
      ]"
      :aria-label="ariaLabel"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      :disabled="disabled"
      @click.stop="toggleOpen"
    >
      <span class="min-w-0 flex-1 truncate text-left">
        <slot
          name="trigger"
          :selected-option="selectedOption"
          :is-open="isOpen"
          :placeholder="placeholder"
        >
          <span class="block truncate">
            {{ selectedOption?.label ?? placeholder }}
          </span>
        </slot>
      </span>

      <span
        class="shrink-0 text-white/60 transition-transform duration-200"
        :class="isOpen ? 'rotate-180' : ''"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          class="h-4 w-4"
          aria-hidden="true"
        >
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <div
      role="listbox"
      class="absolute top-full z-50 mt-2 min-w-full max-w-[min(calc(100vw-1rem),24rem)] overflow-hidden rounded-md border border-white/12 bg-[#0B0B0B] p-1 shadow-lg backdrop-blur-sm transition-all duration-150 ease-out"
      :class="[
        alignClass,
        menuClass,
        isOpen
          ? 'pointer-events-auto translate-y-0 scale-100 opacity-100'
          : 'pointer-events-none -translate-y-2 scale-95 opacity-0',
      ]"
    >
      <div class="max-h-60 overflow-y-auto">
      <button
        v-for="option in options"
        :key="String(option.value)"
        type="button"
        role="option"
        :disabled="isOptionDisabled(option)"
        :aria-selected="isSelected(option)"
        class="flex w-full min-w-0 items-center justify-between gap-3 rounded-sm px-2.5 py-2 text-left text-sm transition-colors"
        :class="[
          optionClass,
          isOptionDisabled(option) ? 'cursor-not-allowed opacity-50' : 'hover:bg-white/7',
          isSelected(option)
            ? selectedOptionClass || 'bg-white/10 text-white'
            : 'text-white/80',
        ]"
        @click="selectOption(option)"
      >
        <span class="min-w-0 flex-1 truncate">
          <slot name="option" :option="option" :selected="isSelected(option)">
            {{ option.label }}
          </slot>
        </span>
        <svg
          v-if="isSelected(option)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          class="h-4 w-4 shrink-0 text-[#2BFFC3]"
          aria-hidden="true"
        >
          <path
            d="M20 6L9 17l-5-5"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      </div>
    </div>
  </div>
</template>
