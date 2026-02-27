<script setup lang="ts">
import BaseSelect from "~/components/Reusable/BaseSelect.vue";
import type { SelectOption } from "~/types/select";

interface LanguageOption extends SelectOption<string> {
  shortLabel: string;
  flag: string;
}

const languageOptions: LanguageOption[] = [
  {
    label: "English",
    value: "en",
    shortLabel: "Eng",
    flag: "/images/flags/eng.png",
  },
  {
    label: "Spanish",
    value: "es",
    shortLabel: "Esp",
    flag: "/images/flags/spain.png",
  },
  {
    label: "Chinese",
    value: "cn",
    shortLabel: "Chi",
    flag: "/images/flags/china.png",
  },
];

const selectedLanguage = ref<LanguageOption["value"]>(languageOptions[0]!.value);

const selectedLanguageOption = computed<LanguageOption>(() => {
  return (
    languageOptions.find((option) => option.value === selectedLanguage.value) ??
    languageOptions[0]!
  );
});
</script>

<template>
  <BaseSelect
    v-model="selectedLanguage"
    :options="languageOptions"
    aria-label="Language selector"
    menu-align="right"
    size="sm"
    button-class="!h-auto !w-[4.75rem] sm:!w-[5.25rem] !rounded-none !border-transparent !bg-transparent !px-0 text-white/80 hover:!text-white hover:!border-transparent focus-visible:!border-transparent focus-visible:!ring-0"
    menu-class="!mt-2 min-w-[10rem] !rounded-xl !border-white/10 !bg-[#050505]"
    option-class="!rounded-lg"
    selected-option-class="!bg-white/10 !text-white"
  >
    <template #trigger>
      <span class="flex items-center gap-2">
        <img
          :src="selectedLanguageOption.flag"
          alt=""
          class="h-4 w-4 rounded-full object-cover"
        />
        <span class="text-sm leading-none">{{ selectedLanguageOption.shortLabel }}</span>
      </span>
    </template>
  </BaseSelect>
</template>
