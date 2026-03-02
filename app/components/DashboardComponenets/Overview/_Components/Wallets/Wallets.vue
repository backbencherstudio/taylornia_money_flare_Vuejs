<script setup lang="ts">
import { ref } from "vue";
import PigIcon from "~/components/Icons/PigIcon.vue";
import WithdrawIcon from "~/components/Icons/WithdrawIcon.vue";
import DepositeAndActivity from "./DepositeAndActivity.vue";
import WithdrawAndActivity from "./WithdrawAndActivity.vue";

type TabType = "deposit" | "withdraw";

const route = useRoute();
const router = useRouter();

const activeTab = ref<TabType>(
  route.query.tab === "withdraw" ? "withdraw" : "deposit"
);

const setTab = (tab: TabType) => {
  activeTab.value = tab;

  router.replace({
    query: {
      ...route.query,
      tab,
    },
  });
};

watch(
  () => route.query.tab,
  (newTab) => {
    if (newTab === "withdraw" || newTab === "deposit") {
      activeTab.value = newTab;
    }
  }
);
</script>

<template>
  <div>
    <header
      class="flex flex-col sm:flex-row justify-between lg:items-center gap-3"
    >
      <div>
        <h3 class="text-lg xl:text-xl font-dm">Welcome back, Jhon!</h3>
        <p class="text-sm leading-[160%] text-secondary">
          Monday, 18 December 2024
        </p>
      </div>
      <div class="flex items-center justify-between gap-3">
        <button
          @click="setTab('deposit')"
          :class="[
            'flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full leading-[150%] border transition',
            activeTab === 'deposit'
              ? 'bg-linear-to-t from-[#1a9975] to-[#2bffc3] border-[#2BFFC3] text-black'
              : 'primary-border text-white',
          ]"
        >
          <PigIcon /> Invest Now
        </button>
        <button
          @click="setTab('withdraw')"
          :class="[
            'flex items-center gap-2 text-sm font-medium py-2 px-4 rounded-full leading-[150%] border transition',
            activeTab === 'withdraw'
              ? 'bg-linear-to-t from-[#1a9975] to-[#2bffc3] border-[#2BFFC3] text-black'
              : 'primary-border text-white',
          ]"
        >
          <WithdrawIcon /> Withdraw
        </button>
      </div>
    </header>

    <div>
      <DepositeAndActivity v-if="activeTab === 'deposit'" />
      <WithdrawAndActivity v-if="activeTab === 'withdraw'" />
    </div>
  </div>
</template>

<style scoped></style>
