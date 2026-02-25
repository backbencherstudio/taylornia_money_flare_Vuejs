<script setup lang="ts">
import MenuIcon from "../Icons/MenuIcon.vue";
import Language from "./Language.vue";

const isMenuOpen = ref(false);
const route = useRoute();

const navLinks = [
  { label: "Home", to: "/" },
  { label: "AI Trading Plans", to: "/ai-trading-plans" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Referral Program", to: "/referral-program" },
  { label: "About", to: "/about" },
];

const isActiveLink = (to: string) => {
  if (to === "/") return route.path === "/";
  return route.path === to || route.path.startsWith(`${to}/`);
};

</script>

<template>
  <nav class="bg-[#03030333] backdrop-blur-[5px] border-b border-white/10 fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div class="flex items-center justify-between py-2 xl:py-5">
        <div class="flex items-center gap-10">
          <NuxtLink to="/" class="text-white text-2xl lg:text-[2.5rem] font-semibold">
            <!-- <img src="/logo.png" alt="" class="h-auto w-44 xl:w-55.75" /> -->
            MoneyFlare
          </NuxtLink>
          <div class="hidden lg:flex items-center gap-2.5 text-white/80 text-sm lg:text-base">
            <template v-for="(link, index) in navLinks" :key="link.label">
              <NuxtLink :to="link.to" class="text-sm transition-colors"
                :class="isActiveLink(link.to) ? 'text-primary' : 'text-white/80 hover:text-white'">
                {{ link.label }}
              </NuxtLink>
              <span v-if="index < navLinks.length - 1" class="w-1 h-1 rounded-full bg-white/40" />
            </template>
          </div>
        </div>
        <div class="hidden lg:flex items-center gap-10">
          <div class="flex items-center gap-6">
            <Language />

            <NuxtLink to="/auth/signup"
              class="btn-bg border border-[#2BFFC3] leading-[150%] font-medium text-sm rounded-full px-6.75 py-3 transition-all duration-200 hover:opacity-90 text-black">
              Get Started
            </NuxtLink>
          </div>
        </div>

        <div class="lg:hidden flex items-center gap-4">
          <Language />

          <button type="button" class="scale-x-[-1]" @click="isMenuOpen = true" :aria-expanded="isMenuOpen"
            aria-label="Open menu">
            <MenuIcon class="text-2xl" />
          </button>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <div class="lg:hidden fixed inset-0 z-999" :class="isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'">
        <div class="absolute inset-0 bg-black/60 transition-opacity duration-300"
          :class="isMenuOpen ? 'opacity-100' : 'opacity-0'" @click="isMenuOpen = false" />
        <aside
          class="absolute right-0 top-0 h-full w-72 max-w-[80vw] bg-[#050505] border-l border-white/10 p-6 flex flex-col gap-6 transition-transform duration-300 ease-out"
          :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'">
          <div class="flex items-center justify-between">
            <span class="text-white text-lg font-semibold">Menu</span>
            <button type="button" class="text-white/70 hover:text-white transition-colors" @click="isMenuOpen = false">
              Close
            </button>
          </div>

          <nav class="flex flex-col gap-4 text-white/80">
            <NuxtLink v-for="link in navLinks" :key="link.label" :to="link.to"
              class="transition-colors" :class="isActiveLink(link.to) ? 'text-primary' : 'text-white/80 hover:text-primary'"
              @click="isMenuOpen = false">
              {{ link.label }}
            </NuxtLink>
          </nav>

          <NuxtLink to="/auth/signup"
            class="btn-bg border border-primary text-black font-medium text-sm rounded-full px-6 py-3 text-center"
            @click="isMenuOpen = false">
            Get Started
          </NuxtLink>
        </aside>
      </div>
    </Teleport>
  </nav>
</template>

<style scoped>
.nav-toggle {
  width: 44px;
  height: 36px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border-radius: 10px;
  background: rgba(43, 255, 195, 0.08);
  border: 1px solid rgba(43, 255, 195, 0.35);
  box-shadow: 0 0 16px rgba(43, 255, 195, 0.25);
}

.nav-toggle span {
  width: 24px;
  height: 3px;
  border-radius: 999px;
  background: linear-gradient(90deg, #2bffc3, #64ffd8);
  display: block;
}
</style>
