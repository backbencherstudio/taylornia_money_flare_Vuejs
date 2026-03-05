<script setup lang="ts">
import ReferralIcon from "~/components/Icons/ReferralIcon.vue";
import ThreeDot from "~/components/Icons/ThreeDot.vue";
import TrophyIcon from "~/components/Icons/TrophyIcon.vue";
import BaseSelect from "~/components/Reusable/BaseSelect.vue";
import type { SelectOption } from "~/types/select";

type ReferralFilterValue = "all" | "this_month" | "last_30_days" | "this_year";

interface ReferralRow {
  id: number;
  email: string;
  joinDate: string;
  joinDateIso: string;
}

const referralRows: ReferralRow[] = [
  {
    id: 1,
    email: "dccwdc@gmail.com",
    joinDate: "2026-03-02 03:41:42",
    joinDateIso: "2026-03-02T03:41:42",
  },
  {
    id: 2,
    email: "zayad@gmail.com",
    joinDate: "2026-02-24 16:20:12",
    joinDateIso: "2026-02-24T16:20:12",
  },
  {
    id: 3,
    email: "a.hassan@gmail.com",
    joinDate: "2026-01-12 09:15:47",
    joinDateIso: "2026-01-12T09:15:47",
  },
  {
    id: 4,
    email: "rima@gmail.com",
    joinDate: "2025-11-06 03:41:42",
    joinDateIso: "2025-11-06T03:41:42",
  },
  {
    id: 5,
    email: "jibran@gmail.com",
    joinDate: "2025-05-06 03:41:42",
    joinDateIso: "2025-05-06T03:41:42",
  },
];

const filterOptions: SelectOption<ReferralFilterValue>[] = [
  { label: "All Time", value: "all" },
  { label: "This Month", value: "this_month" },
  { label: "Last 30 Days", value: "last_30_days" },
  { label: "This Year", value: "this_year" },
];

const selectedFilter = ref<ReferralFilterValue>("all");

const selectedFilterLabel = computed(() => {
  return (
    filterOptions.find((option) => option.value === selectedFilter.value)?.label ??
    "All Time"
  );
});

const filteredReferralRows = computed(() => {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const thirtyDaysAgo = new Date(now);
  thirtyDaysAgo.setDate(now.getDate() - 30);

  return referralRows.filter((row) => {
    const joinedAt = new Date(row.joinDateIso);

    if (selectedFilter.value === "this_month") {
      return joinedAt >= startOfMonth;
    }

    if (selectedFilter.value === "last_30_days") {
      return joinedAt >= thirtyDaysAgo;
    }

    if (selectedFilter.value === "this_year") {
      return joinedAt >= startOfYear;
    }

    return true;
  });
});
</script>

<template>
  <div class=" primary-border rounded-xl p-5">
    <header
      class="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center"
    >
      <div class="flex items-center gap-2">
        <button class="p-2.5 primary-border rounded-lg">
          <TrophyIcon />
        </button>
        <p class="text-secondary font-dm tracking-[-0.75px]">Referral Log </p>
      </div>
      <div class="flex items-center gap-3">
        <BaseSelect
          v-model="selectedFilter"
          :options="filterOptions"
          aria-label="Referral period filter"
          menu-align="right"
          size="sm"
          button-class="!h-10 !rounded-full !border-[#222222] !bg-transparent !px-4 !text-sm !text-white/85 hover:!bg-[#111111]"
          menu-class="!rounded-xl !border-[#222222] !bg-[#0B0B0B]"
          option-class="!rounded-lg"
          selected-option-class="!bg-white/10 !text-white"
        >
          <template #trigger>
            <span class="block truncate">{{ selectedFilterLabel }}</span>
          </template>
        </BaseSelect>
        <button
          type="button"
          class="flex h-10 w-10 flex-col items-center justify-center gap-0.75 rounded-full primary-border text-[#7B7B7B] hover:bg-[#111111] duration-300"
        >
          <ThreeDot />
        </button>
      </div>
    </header>
    <div class="mt-5 space-y-3">
        <div
          v-if="!filteredReferralRows.length"
          class="primary-border rounded-lg p-3 text-sm text-secondary"
        >
          No referral log found for the selected period.
        </div>
        <div
          v-for="row in filteredReferralRows"
          :key="row.id"
          class="primary-border p-3 flex justify-between items-center rounded-lg "
        >
            <div class="flex gap-2  ">
                <ReferralIcon/>
                <div>
                    <p class="text-xs text-secondary">Email</p>
                    <p class="text-sm lg:text-base">{{ row.email }}</p>
                </div>
            </div>
            <div class="text-[10px] space-y-2">
                <p>Join Date</p>
                <p>{{ row.joinDate }}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<style scoped></style>
