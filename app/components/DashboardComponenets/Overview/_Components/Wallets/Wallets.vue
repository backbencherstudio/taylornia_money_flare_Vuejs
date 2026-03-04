<script setup lang="ts">
import { ref, type Component } from "vue";
import PigIcon from "~/components/Icons/PigIcon.vue";
import WithdrawIcon from "~/components/Icons/WithdrawIcon.vue";
import BaseTabs from "~/components/Reusable/BaseTabs.vue";
import DepositeAndActivity from "./DepositeAndActivity.vue";
import WithdrawAndActivity from "./WithdrawAndActivity.vue";

type TabType = "deposit" | "withdraw";

interface WalletTab {
  key: TabType;
  label: string;
  icon: Component;
}

const route = useRoute();
const router = useRouter();

const activeTab = ref<TabType>(
  route.query.tab === "withdraw" ? "withdraw" : "deposit"
);

const tabs: WalletTab[] = [
  { key: "deposit", label: "Invest Now", icon: PigIcon },
  { key: "withdraw", label: "Withdraw", icon: WithdrawIcon },
];

const setTab = (tab: any) => {
  if (tab === "deposit" || tab === "withdraw") {
    activeTab.value = tab;

    router.replace({
      query: {
        ...route.query,
        tab,
      },
    });
  }
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
      <BaseTabs
        :model-value="activeTab"
        :tabs="tabs"
        @update:model-value="setTab"
      />
    </header>

    <div>
      <DepositeAndActivity v-if="activeTab === 'deposit'" />
      <WithdrawAndActivity v-if="activeTab === 'withdraw'" />
    </div>
  </div>
</template>

<style scoped></style>
