<script setup lang="ts">
import ArrowUp from "../Icons/ArrowUp.vue";
import SectionHeading from "../Reusable/SectionHeading.vue";
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from "vue";

const containerRef = ref<HTMLElement | null>(null);
const barCount = ref(0);

const ranges = ["1D", "1W", "1M", "1Y"] as const;
type Range = (typeof ranges)[number];
const activeRange = ref<Range>("1M");
const barGap = 10;
const rangeRatio: Record<Range, number> = {
  "1D": 0.3,
  "1W": 0.45,
  "1M": 0.6,
  "1Y": 0.8,
};
const now = ref(new Date());
let nowTimer: ReturnType<typeof setInterval> | null = null;

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "2-digit",
});
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
});
const monthFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
});

const calculateBars = () => {
  if (!containerRef.value) return;

  const containerWidth = containerRef.value.offsetWidth;
  const barWidth = 12;
  const totalBarSpace = barWidth + barGap;

  barCount.value = Math.max(0, Math.floor(containerWidth / totalBarSpace));
};

const bars = computed(() => Array.from({ length: barCount.value }));

const activeBarCount = computed(() =>
  Math.max(1, Math.floor(barCount.value * rangeRatio[activeRange.value])),
);

const timeRangeLabels = computed(() => {
  const endDate = now.value;
  const startDate = new Date(endDate);

  switch (activeRange.value) {
    case "1D":
      startDate.setDate(startDate.getDate() - 1);
      return {
        start: timeFormatter.format(startDate),
        end: timeFormatter.format(endDate),
      };
    case "1W":
      startDate.setDate(startDate.getDate() - 6);
      return {
        start: dateFormatter.format(startDate),
        end: dateFormatter.format(endDate),
      };
    case "1M":
      startDate.setMonth(startDate.getMonth() - 1);
      return {
        start: dateFormatter.format(startDate),
        end: dateFormatter.format(endDate),
      };
    case "1Y":
      startDate.setFullYear(startDate.getFullYear() - 1);
      return {
        start: monthFormatter.format(startDate),
        end: monthFormatter.format(endDate),
      };
  }
});

const setRange = (range: Range) => {
  activeRange.value = range;
};

onMounted(() => {
  nextTick(() => {
    calculateBars();
    window.addEventListener("resize", calculateBars);
  });

  nowTimer = setInterval(() => {
    now.value = new Date();
  }, 60 * 1000);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", calculateBars);

  if (nowTimer) {
    clearInterval(nowTimer);
    nowTimer = null;
  }
});
</script>

<template>
  <section class="py-20 xl:py-45 relative overflow-hidden">
    <img src="/bg-lights2.svg" alt="" class="absolute -top-105 right-0" />
    <div class="max-w-7xl mx-auto px-6 xl:px-10">
      <div>
        <SectionHeading
          title="Invest without guesswork"
          description="Leverage smart automation and data-driven insights to make informed decisions."
        />
      </div>

      <div class="grid lg:grid-cols-2 gap-5 lg:gap-6 mt-10 lg:mt-12.5">
        <div class="space-y-5 lg:space-y-6">
          <div
            class="bg-[#080808CC] px-8 py-5.5 backdrop-blur border border-[#222222] rounded-3xl"
          >
            <div class="mb-7">
              <h2
                class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5"
              >
                Transactions automation
              </h2>
              <p
                class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[45ch]"
              >
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
              <h2
                class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5"
              >
                Investments analytics
              </h2>
              <p
                class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[35ch]"
              >
                Review all your transactions and track the payments history in
                one tailored hub.
              </p>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col-reverse lg:flex-col justify-stretch gap-5 lg:gap-6"
        >
          <div
            class="bg-[#080808CC] px-6 py-3 backdrop-blur-2xl border border-[#222222] rounded-3xl h-fit flex items-center gap-6"
          >
            <div>
              <img src="/images/landing/invest.png" alt="" class="w-37" />
            </div>
            <div>
              <h2
                class="text-lg lg:text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5"
              >
                All-in-one integrations
              </h2>
              <p
                class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[30ch]"
              >
                Connect to 70+ enterprise payment systems just in one click.
              </p>
            </div>
          </div>
          <div
            class="bg-[#080808CC] px-6 py-5 backdrop-blur-2xl border border-[#222222] rounded-3xl h-fit"
          >
            <div>
              <!-- Header -->
              <div>
                <div class="flex justify-between items-center">
                  <p class="text-base text-[#CCC]">Performance</p>

                  <div class="flex items-center gap-2.5 text-sm text-[#CCC]">
                    <button
                      v-for="range in ranges"
                      :key="range"
                      type="button"
                      @click="setRange(range)"
                      :class="[
                        'px-3 py-2 rounded-md transition',
                        activeRange === range
                          ? 'bg-green-500 text-black'
                          : 'bg-[#18191D]',
                      ]"
                    >
                      {{ range }}
                    </button>
                  </div>
                </div>

                <div class="mt-3 text-sm flex justify-between items-center">
                  <p>{{ timeRangeLabels.start }}</p>
                  <p>{{ timeRangeLabels.end }}</p>
                </div>
              </div>

              <!-- Bars -->
              <div ref="containerRef" class="mb-7 mt-4">
                <div class="flex gap-2.5 items-end">
                  <div
                    v-for="(bar, index) in bars"
                    :key="index"
                    :class="[
                      'w-3 h-16.5 rounded-full transition-all duration-300',
                      index < activeBarCount ? 'bg-primary' : 'bg-[#18191D]',
                    ]"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2
                class="text-lg lg:text-[22px] leading-[109%] font-dm font-medium mb-3.5"
              >
                Keep your portfolio on track
              </h2>
              <p
                class="text-xs lg:text-sm text-[#CCC] leading-[137%] lg:w-[50ch]"
              >
                Set up your investment goals and track the efficiency throughout
                the defined period of time, make sure you are on track.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
