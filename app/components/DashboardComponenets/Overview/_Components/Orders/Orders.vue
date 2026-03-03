<script setup lang="ts">
import PigIcon from "~/components/Icons/PigIcon.vue";
import ReusableTable from "~/components/Reusable/ReusableTable.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

const orders = [
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 40,
    time: "11:11:11",
    status: "Reject",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
];

const columns = [
  { label: "Order No", key: "orderNo" },
  { label: "Name", key: "name" },
  { label: "Period", key: "period" },
  { label: "Amount", key: "amount" },
  { label: "Day : Hou : Min", key: "time" },
  { label: "Status", key: "status" },
  { label: "Action", key: "action" },
];
</script>

<template>
  <div>
    <DashboardUserHeader />
    <div class="primary-border bg-[#080808]/95 p-4 lg:p-5 rounded-[10px] mt-6">
      <header
        class="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-center"
      >
        <div class="flex items-center gap-2">
          <button class="p-2.5 primary-border rounded-lg">
            <PigIcon />
          </button>
          <p class="text-secondary font-dm tracking-[-0.75px]">Withdraw Log</p>
        </div>
        <div class="w-full max-w-77.25 relative">
          <input
            placeholder="Search"
            type="text"
            class="w-full bg-[#0F0B08] border border-[#222222] text-xs py-2.5 pl-8 rounded-lg focus:outline-none focus:border-[#28f0b8] duration-500 ease-in-out"
          />
          <button class="absolute top-1/2 -translate-y-1/2 left-3">
            <SearchIcon />
          </button>
        </div>
      </header>
      <div class="mt-6">
        <ReusableTable :columns="columns" :data="orders">
          <template #cell-status="{ row }">
            <div
              :class="[
                (row as any).status === 'Passed'
                  ? 'text-green-500 border border-green-500 px-2  '
                  : 'text-red-500 border border-red-500 px-2',
                'whitespace-nowrap text-sm lg:text-[16px] w-fit rounded-full',
              ]"
            >
              <span
                :class="[
                  'inline-flex items-center rounded-full px-3.5 py-1 text-sm',
                ]"
              >
                {{ (row as any).status }}
              </span>
            </div>
          </template>

          <template #cell-time="{ row }">
            <button
              class="text-xs text-secondary border border-[#222222] px-3 py-1.5 rounded-full bg-[#0F0B08]"
            >
              {{ row.time }}
            </button>
          </template>
          <template #cell-action="{ row }">
            <button
              class="text-xs text-secondary border border-[#222222] px-3 py-1.5 rounded-full bg-[#0F0B08]"
            >
              View
            </button>
          </template>
        </ReusableTable>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
