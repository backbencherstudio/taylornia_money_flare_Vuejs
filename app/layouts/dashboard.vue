<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import DashIcon from "~/components/Icons/DashIcon.vue";
import DashIcon2 from "~/components/Icons/DashIcon2.vue";
import DashIcon3 from "~/components/Icons/DashIcon3.vue";
import DashIcon4 from "~/components/Icons/DashIcon4.vue";
import DashIcon5 from "~/components/Icons/DashIcon5.vue";
import DashIcon6 from "~/components/Icons/DashIcon6.vue";
import DashIcon7 from "~/components/Icons/DashIcon7.vue";

const sidebarOpen = ref(false);
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const route = useRoute();
const router = useRouter();

/* Menu Items */
const menuItems = [
  { href: "/dashboard", icon: DashIcon, label: "Dashboard" },
  { href: "/dashboard/start-mining", icon: DashIcon2, label: "Plans" },
  { href: "/dashboard/wallets", icon: DashIcon3, label: "Wallets" },
  { href: "/dashboard/orders", icon: DashIcon4, label: "Orders" },
  { href: "/dashboard/profit", icon: DashIcon5, label: "Profit" },
  {
    href: "/dashboard/referral-rewards",
    icon: DashIcon6,
    label: "Referral Rewards",
  },
  { href: "/dashboard/settings", icon: DashIcon7, label: "Settings" },
];

const isActive = (href) => {
  if (href === "/dashboard") {
    return route.path === "/dashboard";
  }
  return route.path.startsWith(href);
};

/* Dynamic Page Title */
const pageTitle = computed(() => {
  const matchedItem = [...menuItems]
    .sort((a, b) => b.href.length - a.href.length)
    .find((item) => route.path.startsWith(item.href));

  return matchedItem ? matchedItem.label : "Page";
});

/* Logout */
const logout = async () => {
  if (process.client) {
    localStorage.removeItem("token");
  }
  await router.push("/auth/login");
};
</script>

<template>
  <div class="flex min-h-screen">
    <!-- Mobile Backdrop -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-20 bg-black/20 lg:hidden"
      @click="toggleSidebar"
    />

    <aside
      :class="[
        'fixed flex flex-col justify-between z-30 h-screen w-64 transform bg-[#080808] border-r border-[#222222] transition-transform duration-300 ease-in-out',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'lg:translate-x-0',
      ]"
    >
      <div>
        <div class="flex items-center py-5 px-6">
          <NuxtLink to="/">
            <img src="/logo.png" alt="logo" class="w-full" />
          </NuxtLink>
        </div>

        <nav class="mt-4 space-y-3 px-6 relative">
          <NuxtLink
            v-for="menuItem in menuItems"
            :key="menuItem.href"
            :to="menuItem.href"
            :class="[
              'flex gap-2 items-center text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition-all duration-300',
              isActive(menuItem.href)
                ? 'bg-linear-to-t from-[#1a9975] to-[#2bffc3] border border-[#2BFFC3] text-black'
                : 'text-white hover:opacity-90',
            ]"
          >
            <component :is="menuItem.icon" />
            {{ menuItem.label }}
          </NuxtLink>
          <div
            class="absolute top-full -left-30 bg-[#00ffb7] h-30 w-30 rounded-full blur-[125px] opacity-[]"
          />
        </nav>
      </div>

      <div class="mb-6 px-4">
        <button
          @click="logout"
          class="flex items-center gap-2 text-base lg:text-lg text-white hover:bg-[#00e88711] w-full py-2 px-4 rounded-full duration-300 cursor-pointer"
        >
          Logout
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 overflow-auto lg:ml-64">
      <div
        class="flex justify-between items-center bg-[#08080808] p-6 border-b border-[#222222] fixed lg:static top-0 left-0 right-0 z-50 "
      >
        <!-- Mobile Menu Button -->
        <div class="lg:hidden">
          <button @click="toggleSidebar">
            Menu
          </button>
        </div>
        <div class="absolute bg-red-500 h-20 w-30 top-0 left-[80%] blur-[100px]" />

        <!-- Page Title -->
        <h1 class="hidden lg:block text-xl font-semibold text-white w-fit">
          {{ pageTitle }}
        </h1>

        <div>Here will search</div>
      </div>

      <div class="p-4 mt-20 lg:mt-0 fade-in relative overflow-hidden h-screen">
        <div class="relative z-20">
          <slot />
        </div>
        <!-- Decoration -->
        <div class="absolute inset-0 bg-black/5 backdrop-blur-sm z-10"></div>
        <img
          src="/bg-lights.svg"
          alt=""
          class="absolute lg:-top-100 xl:-top-90 lg:-right-20 rotate-40 lg:rotate-40 z-0 h-150 lg:h-auto"
        />
      </div>
    </main>
  </div>
</template>
