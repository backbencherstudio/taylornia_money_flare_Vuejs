<script setup lang="ts">
import ArrowIconUp from "~/components/Icons/ArrowIconUp.vue";
import PigIcon from "~/components/Icons/PigIcon.vue";
import SearchIcon from "~/components/Icons/SearchIcon.vue";
import Wallet1 from "~/components/Icons/Wallet1.vue";
import Wallet2 from "~/components/Icons/Wallet2.vue";
import Wallet3 from "~/components/Icons/Wallet3.vue";
import ReusableTable from "~/components/Reusable/ReusableTable.vue";

type DepositStatus = "Passed" | "Pending";

interface DepositRow {
  id: number;
  date: string;
  orderNo: string;
  amount: string;
  payment: string;
  paymentIcon: string;
  status: DepositStatus;
  isHighlighted?: boolean;
  showDivider?: boolean;
}

const searchTerm = ref("");

const columns = [
  { label: "Date", key: "date" },
  { label: "Order No", key: "orderNo" },
  { label: "Amount", key: "amount" },
  { label: "Payment", key: "payment" },
  { label: "Status", key: "status" },
];

const depositRows: DepositRow[] = [
  {
    id: 1,
    date: "2025-5-06 03:34:02",
    orderNo: "URDH1746480U24702",
    amount: "$202.00",
    payment: "ETH",
    paymentIcon: "/images/landing/coin.png",
    status: "Passed",
  },
  {
    id: 2,
    date: "2025-5-06 03:34:02",
    orderNo: "URDH1746480U24702",
    amount: "$202.00",
    payment: "ETH",
    paymentIcon: "/images/landing/coin.png",
    status: "Pending",
    isHighlighted: true,
  },
  {
    id: 3,
    date: "2025-5-06 03:34:02",
    orderNo: "URDH1746480U24702",
    amount: "$202.00",
    payment: "ETH",
    paymentIcon: "/images/landing/coin.png",
    status: "Passed",
    showDivider: true,
  },
  {
    id: 4,
    date: "2025-5-06 03:34:02",
    orderNo: "URDH1746480U24702",
    amount: "$202.00",
    payment: "ETH",
    paymentIcon: "/images/landing/coin.png",
    status: "Passed",
  },
  {
    id: 5,
    date: "2025-5-06 03:34:02",
    orderNo: "URDH1746480U24702",
    amount: "$202.00",
    payment: "ETH",
    paymentIcon: "/images/landing/coin.png",
    status: "Passed",
  },
];

const filteredRows = computed(() => {
  const query = searchTerm.value.trim().toLowerCase();

  if (!query) {
    return depositRows;
  }

  return depositRows.filter((row) =>
    [row.date, row.orderNo, row.amount, row.payment, row.status]
      .join(" ")
      .toLowerCase()
      .includes(query),
  );
});

const getStatusClass = (status: DepositStatus) => {
  return status === "Passed"
    ? "border border-[#2BFFC3] text-[#49D697]"
    : "border border-[#FF4D4D] text-[#FF4D4D]";
};

const getCellWrapperClass = (row: DepositRow, key: string) => {
  const base = "-mx-3 -my-4 px-3 py-4";
  return base;
};
</script>

<template>
  <section class="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
    <div
      class="lg:col-span-8 primary-border bg-[#080808]/95 p-4 lg:p-5 rounded-[10px]"
    >
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
            class="w-full bg-[#0F0B08] border border-[#222222]  text-xs py-2.5 pl-8 rounded-lg focus:outline-none focus:border-[#28f0b8] duration-500 ease-in-out"
          />
          <button class="absolute top-1/2 -translate-y-1/2 left-3">
            <SearchIcon />
          </button>
        </div>
      </header>

      <div class="mt-5">
        <ReusableTable
          class="deposit-log-table rounded-[14px] border-[#222222]"
          :columns="columns"
          :data="filteredRows"
          row-key="id"
        >
          <template #cell-payment="{ row }">
            <div
              :class="[
                getCellWrapperClass(row as DepositRow, 'payment'),
                'flex items-center gap-3 whitespace-nowrap text-sm lg:text-[16px] text-[#CCCCCC]',
              ]"
            >
              <span
                class="primary-border bg-[#101319] h-9 w-9 flex items-center justify-center rounded-full"
              >
                <img
                  :src="(row as DepositRow).paymentIcon"
                  :alt="`${(row as DepositRow).payment} icon`"
                  class="h-4 w-4 object-contain"
                />
              </span>
              <span>{{ (row as DepositRow).payment }}</span>
            </div>
          </template>

          <template #cell-status="{ row }">
            <div
              :class="[
                getCellWrapperClass(row as DepositRow, 'status'),
                'whitespace-nowrap text-sm lg:text-[16px]',
              ]"
            >
              <span
                :class="[
                  getStatusClass((row as DepositRow).status),
                  'inline-flex items-center rounded-full px-3.5 py-1 text-sm',
                ]"
              >
                {{ (row as DepositRow).status }}
              </span>
            </div>
          </template>

          <template #empty> No deposit log found. </template>
        </ReusableTable>
      </div>
    </div>
    <div
      class="lg:col-span-4 primary-border bg-[#080808]/95 p-4 lg:p-5 rounded-[10px] space-y-4 h-fit"
    >
      <div class="primary-border p-3 rounded-lg">
        <button class="primary-border p-4 rounded-full">
          <Wallet1 />
        </button>
        <div class="mt-4">
          <p class="text-sm text-secondary">Trial funds</p>
          <div class="flex justify-between items-center mt-2.5">
            <p>$2201.99</p>
            <p class="flex items-center gap-0.75 text-[#83B047]">
              <span><ArrowIconUp /></span>25%
            </p>
          </div>
        </div>
      </div>
      <div class="primary-border p-3 rounded-lg">
        <button class="primary-border p-4 rounded-full">
          <Wallet2 />
        </button>
        <div class="mt-4">
          <p class="text-sm text-secondary">Trial funds</p>
          <div class="flex justify-between items-center mt-2.5">
            <p>$2201.99</p>
            <p class="flex items-center gap-0.75 text-red-500">
              <span class="scale-y-[-1]"><ArrowIconUp /></span>25%
            </p>
          </div>
        </div>
      </div>
      <div class="primary-border p-3 rounded-lg">
        <button class="primary-border p-4 rounded-full">
          <Wallet3 />
        </button>
        <div class="mt-4">
          <p class="text-sm text-secondary">Trial funds</p>
          <div class="flex justify-between items-center mt-2.5">
            <p>$2201.99</p>
            <p class="flex items-center gap-0.75 text-sm text-[#83B047]">
              <span><ArrowIconUp /></span>25%
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.deposit-log-table :deep(thead) {
  background-color: transparent;
}

.deposit-log-table :deep(th) {
  border-bottom: 1px solid #1a1a1a;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
  font-size: 16px;
  font-weight: 500;
  color: #f2f2f2;
}
</style>
