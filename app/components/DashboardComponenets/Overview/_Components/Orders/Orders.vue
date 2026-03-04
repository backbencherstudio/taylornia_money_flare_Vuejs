<script setup lang="ts">
import PigIcon from "~/components/Icons/PigIcon.vue";
import SearchIcon from "~/components/Icons/SearchIcon.vue";
import BasePagination from "~/components/Reusable/BasePagination.vue";
import ReusableTable from "~/components/Reusable/ReusableTable.vue";
import DashboardUserHeader from "~/components/Shared/DashboardUserHeader.vue";

interface OrderRow {
  id: number;
  orderNo: string;
  name: string;
  period: string;
  amount: number;
  time: string;
  status: "Passed" | "Reject";
}

const searchTerm = ref("");
const currentPage = ref(1);
const pageSize = 10;

const orders: OrderRow[] = [
  {
    id: 1,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 2,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 40,
    time: "11:11:11",
    status: "Reject",
  },
  {
    id: 3,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 4,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 5,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 6,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 7,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 8,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 9,
    orderNo: "2025-5-06 03:34:02",
    name: "URDH1746480U24702",
    period: "1 Day",
    amount: 30,
    time: "11:11:11",
    status: "Passed",
  },
  {
    id: 10,
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

const filteredRows = computed(() => {
  const query = searchTerm.value.trim().toLowerCase();

  if (!query) {
    return orders;
  }

  return orders.filter((row) =>
    [row.orderNo, row.name, row.period, row.amount, row.time, row.status]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
});

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(filteredRows.value.length / pageSize));
});

const paginatedRows = computed(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredRows.value.slice(start, start + pageSize);
});

watch([filteredRows, totalPages], () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = totalPages.value;
  }
});
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
            v-model="searchTerm"
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
        <ReusableTable :columns="columns" :data="paginatedRows" row-key="id">
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

          <template #empty> No order log found. </template>
        </ReusableTable>
        <BasePagination
          v-model="currentPage"
          :total-pages="totalPages"
          class="mt-5"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
