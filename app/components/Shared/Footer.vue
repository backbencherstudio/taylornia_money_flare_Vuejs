<script setup lang="ts">
import Instagram from "../Icons/Instagram.vue";
import Linkedin from "../Icons/Linkedin.vue";
import Toktok from "../Icons/Toktok.vue";
import Youtube from "../Icons/Youtube.vue";
</script>

<template>
  <div>
    <footer
      class="bg-linear-to-l to-transparent via-white/30 from-transparent py-px"
    >
      <div class="bg-[#030303]">
        <div class="max-w-312 mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-12.5 justify-between pb-15 pt-20 lg:py-20">
            <div class="sm:w-95.5">
              <NuxtLink
                to="/"
                class="text-white text-2xl lg:text-[2.5rem] font-semibold mb-5"
              >
                MoneyFlare
              </NuxtLink>
              <p class="text-sm text-[#c0c0c0] mb-7.5">
                MoneyFlare uses advanced AI and professional quantitative
                systems to automate your crypto trading — no expertise needed.
              </p>
              <div class="flex gap-4.5 items-center">
                <div
                  class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
                >
                  <a href=""><Instagram /></a>
                </div>
                <div
                  class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
                >
                  <a href=""><Toktok /></a>
                </div>
                <div
                  class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
                >
                  <a href=""><Youtube /></a>
                </div>
                <div
                  class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center"
                >
                  <a href=""><Linkedin /></a>
                </div>
              </div>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-26"
            >
              <div>
                <h2 class="text-xl font-bold leading-[146%] mb-5">Sitemap</h2>
                <div class="flex flex-col gap-3.5 text-sm">
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Home</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >AI Trading Plans</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >How It Works</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Referral Program</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >About</NuxtLink
                  >
                </div>
              </div>
              <div>
                <h2 class="text-xl font-bold leading-[146%] mb-5">Features</h2>
                <div class="flex flex-col gap-3.5 text-sm">
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Instant transfers</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Risk analysis</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Real-time alerts</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Tax Optimization</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Autopilot mode</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >Maximum security</NuxtLink
                  >
                </div>
              </div>
              <div>
                <h2 class="text-xl font-bold leading-[146%] mb-5">
                  Get in Touch
                </h2>
                <div class="flex flex-col gap-3.5 text-sm">
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >+44 123 456 7890</NuxtLink
                  >
                  <NuxtLink
                    to="/"
                    class="text-[#c0c0c0] hover:text-white transition-all"
                    >hello@moneyflare.co</NuxtLink
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="flex justify-between text-sm text-[#c0c0c0] py-6 max-w-312 px-6 mx-auto">
      <p>© Money Flare. All rights reserved.</p>
      <div class="flex items-center gap-5">
        <NuxtLink to="/terms">Terms of Service</NuxtLink>
        <div class="w-px h-5 bg-[#c0c0c0]" />
        <NuxtLink to="/privacy">Privacy Policy</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
