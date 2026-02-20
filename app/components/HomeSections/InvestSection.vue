<script setup lang="ts">
import ArrowUp from "../Icons/ArrowUp.vue";
import SectionHeading from "../Reusable/SectionHeading.vue";
</script>

<template>
  <section class="py-20 xl:py-45 relative">
    <img src="/bg-lights2.svg" alt="" class="absolute top-0" />
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div>
        <SectionHeading
          title="Invest without guesswork"
          description="Leverage smart automation and data-driven insights to make informed decisions."
        />
      </div>

      <div class="grid lg:grid-cols-2 gap-6 mt-10 lg:mt-12.5">
        <div class="space-y-6">
          <div
            class="bg-[#080808CC] px-8 py-5.5 backdrop-blur-2xl border border-[#222222] rounded-3xl"
          >
            <div class="mb-7">
              <h2 class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5">
                Transactions automation
              </h2>
              <p class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[45ch]">
                Put all your crypto transfers on auto-pilot. Make it easy and
                effortless to track all your investments.
              </p>
            </div>
            <div
              class="flex justify-between items-center text-sm text-[#CCC] leading-[137%]"
            >
              <p>Latest transactions</p>
              <button
                class="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                Show all <ArrowUp />
              </button>
            </div>
            <div class="mt-5 space-y-2.75">
              <div
                class="text-xs leading-[160%] px-6 bg-[#12121C] py-[14.5px] flex justify-between items-center rounded-[10px]"
              >
                <p>Ox8L9522CA3Fa83</p>
                <p>Feb 2025</p>
                <p>$1,352</p>
              </div>
              <div
                class="text-xs leading-[160%] px-6 bg-[#12121C] py-[14.5px] flex justify-between items-center rounded-[10px]"
              >
                <p>Ox8L9522CA3Fa83</p>
                <p>Feb 2025</p>
                <p>$1,352</p>
              </div>
            </div>
          </div>

          <div
            class="bg-[#080808CC] px-6 py-3 backdrop-blur-2xl border border-[#222222] rounded-3xl h-fit flex items-center gap-6"
          >
            <div>
              <img src="/images/landing/invest2.png" alt="" class="w-37" />
            </div>
            <div>
              <h2 class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5">
                Investments analytics
              </h2>
              <p class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[35ch]">
                Review all your transactions and track the payments history in
                one tailored hub.
              </p>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div
            class="bg-[#080808CC] px-6 py-3 backdrop-blur-2xl border border-[#222222] rounded-3xl h-fit flex items-center gap-6"
          >
            <div>
              <img src="/images/landing/invest.png" alt="" class="w-37" />
            </div>
            <div>
              <h2 class="text-lg lg:text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5">
                All-in-one integrations
              </h2>
              <p class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[30ch]">
                Connect to 70+ enterprise payment systems just in one click.
              </p>
            </div>
          </div>
          <div
            class="bg-[#080808CC] px-8 py-5.5 backdrop-blur-2xl border border-[#222222] rounded-3xl"
          >
            <div class="mb-7">
              <h2 class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5">
                Transactions automation
              </h2>
              <p class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[45ch]">
                Put all your crypto transfers on auto-pilot. Make it easy and
                effortless to track all your investments.
              </p>
            </div>
            <div
              class="flex justify-between items-center text-sm text-[#CCC] leading-[137%]"
            >
              <p>Latest transactions</p>
              <button
                class="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                Show all <ArrowUp />
              </button>
            </div>
            <div class="mt-5 space-y-2.75">
              <div
                class="text-xs leading-[160%] px-6 bg-[#12121C] py-[14.5px] flex justify-between items-center rounded-[10px]"
              >
                <p>Ox8L9522CA3Fa83</p>
                <p>Feb 2025</p>
                <p>$1,352</p>
              </div>
              <div
                class="text-xs leading-[160%] px-6 bg-[#12121C] py-[14.5px] flex justify-between items-center rounded-[10px]"
              >
                <p>Ox8L9522CA3Fa83</p>
                <p>Feb 2025</p>
                <p>$1,352</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
