<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from "vue";
import type { TradingPlan, TradingPlanInstruction } from "~/types/tradingPlan";
import BaseButtonLink from "./BaseButtonLink.vue";
import CircleIcon from "../Icons/CircleIcon.vue";

interface BuyPayload {
  plan: TradingPlan;
  quantity: number;
  totalPrice: number;
}

const defaultInstructions: TradingPlanInstruction[] = [
  {
    title: "Purchase instructions",
    description:
      "Please understand the product carefully before placing an order. If you have any questions, please consult customer service. After placing an order, the mining contract takes effect immediately upon confirmation of payment. All purchases are final and non-refundable unless otherwise required by applicable law or a specific offer.",
  },
  {
    title: "Calculate output",
    description:
      "For calculation of mining income, please refer to XXX mining pool: https://xxxminer.com/packages",
  },
  {
    title: "Output settlement",
    description:
      "After the contract expires, the mining machine will stop running, and the system will settle the principal and profit for you; users can only withdraw money if they meet the minimum amount requirement set by the platform.",
  },
  {
    title: "Termination of contract",
    description:
      "The contract will be automatically terminated upon expiration. No refunds will be given for early termination. Thank you for your understanding.",
  },
  {
    title: "Risk warning",
    description:
      "Neither party is responsible for power outages or damage to mines or mining machines caused by natural disasters, policy impacts, war, political unrest, or other force majeure events.",
  },
];

interface Props {
  modelValue: boolean;
  plan: TradingPlan | null;
  imageSrc?: string;
  heading?: string;
  subtitle?: string;
  instructions?: TradingPlanInstruction[];
}

const props = withDefaults(defineProps<Props>(), {
  imageSrc: "/plan-image2.png",
  heading: "Crypto Factor-Based Strategy",
  subtitle: "Popular smart contract coin mining",
});

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
  (event: "buy", payload: BuyPayload): void;
}>();

const quantity = ref(1);
const isAgreed = ref(true);
const showDetails = ref(false);

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const formatCurrency = (value: number) => currencyFormatter.format(value);
const formatCompactCurrency = (value: number) =>
  compactCurrencyFormatter.format(value);

const planDuration = computed(() =>
  props.plan ? `${props.plan.duration} Days` : "0 Days",
);
const dailyProfit = computed(() =>
  props.plan
    ? formatCurrency(props.plan.dailyProfit * quantity.value)
    : formatCurrency(0),
);
const totalNetProfit = computed(() =>
  props.plan
    ? formatCurrency(props.plan.totalNetProfit * quantity.value)
    : formatCurrency(0),
);
const level1Referral = computed(() =>
  props.plan
    ? formatCurrency(props.plan.referralReward * quantity.value)
    : formatCurrency(0),
);
const level2Referral = computed(() =>
  props.plan
    ? formatCurrency(props.plan.referralReward * 0.25 * quantity.value)
    : formatCurrency(0),
);
const displayedPrice = computed(() =>
  props.plan
    ? formatCompactCurrency(props.plan.price * quantity.value)
    : formatCompactCurrency(0),
);
const resolvedInstructions = computed(
  () => props.instructions ?? defaultInstructions,
);

const resetState = () => {
  quantity.value = 1;
  isAgreed.value = true;
  showDetails.value = false;
};

const setBodyScroll = (locked: boolean) => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = locked ? "hidden" : "";
  }
};

const closeModal = () => {
  emit("update:modelValue", false);
};

const emitBuy = () => {
  if (!props.plan || !isAgreed.value) {
    return;
  }
  emit("buy", {
    plan: props.plan,
    quantity: quantity.value,
    totalPrice: props.plan.price * quantity.value,
  });
};

const decreaseQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1);
};

const increaseQuantity = () => {
  quantity.value += 1;
};

const handleOverlayClick = (event: MouseEvent) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === "Escape" && props.modelValue) {
    closeModal();
  }
};

watch(
  () => props.modelValue,
  (isOpen) => {
    setBodyScroll(isOpen);
    if (isOpen) {
      resetState();
    }
  },
  { immediate: true },
);

watch(
  () => props.plan,
  () => {
    if (props.modelValue) {
      resetState();
    }
  },
);

onMounted(() => {
  window.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
  setBodyScroll(false);
});
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="props.modelValue && props.plan"
      class="fixed inset-0 z-50 bg-black/80 backdrop-blur-[2px] p-4 sm:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      @click="handleOverlayClick"
    >
      <div
        class="mx-auto w-full max-w-7xl rounded-[20px] border border-[#2BFFC3]/65 bg-[#030303] shadow-[0_0_0_1px_rgba(43,255,195,0.3),0_0_36px_rgba(43,255,195,0.55)]"
      >
        <div class="relative rounded-[30px] bg-[#050505] p-5 sm:p-8 lg:p-10">
          <button
            type="button"
            class="absolute right-6 top-6 sm:right-3 sm:top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#2BFFC3] hover:text-[#2BFFC3]"
            @click="closeModal"
          >
            <span aria-hidden="true" class="text-xl leading-none">&times;</span>
          </button>

          <div
            class="grid grid-cols-1 xl:grid-cols-[1fr_1.1fr] gap-8 xl:gap-12"
          >
            <div
              class="rounded-[34px] border border-white/10 bg-black p-5 min-h-75 sm:min-h-110 flex items-center justify-center"
            >
              <img
                :src="props.imageSrc"
                alt="Crypto strategy plan image"
                class="w-full max-w-140 object-contain"
              />
            </div>

            <div>
              <div
                class="flex flex-col xl:flex-row items-start justify-between gap-4"
              >
                <div>
                  <h2 class="text-[2rem] font-dm leading-[110%]">
                    {{ props.heading }}
                  </h2>
                  <p class="text-base text-[#CCC] mt-2">
                    {{ props.subtitle }}
                  </p>
                </div>
                <BaseButtonLink> {{ displayedPrice }}</BaseButtonLink>
              </div>

              <div class="mt-7">
                <h3 class="text-lg lg:text-xl leading-none mb-4 sm:mb-6">
                  Plans Detail
                </h3>
                <div
                  class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-[13px] tracking-wide text-[#CCC] uppercase">
                      Plan Duration
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      {{ planDuration }}
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                      Daily Profit
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      {{ dailyProfit }}
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                      Total Net Profit
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      {{ totalNetProfit }}
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                      Level 1 Referral
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      {{ level1Referral }}
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                      Level 2 Referral
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      {{ level2Referral }}
                    </p>
                  </div>
                  <div
                    class="rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                  >
                    <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                      Profit Payout
                    </p>
                    <p
                      class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                    >
                      24-Hour
                    </p>
                  </div>
                </div>
                <div
                  class="mt-4 rounded-2xl border border-white/10 bg-[#070707] p-4 sm:p-5"
                >
                  <p class="text-xs lg:text-[13px] text-[#CCC] uppercase">
                    Principal Refund
                  </p>
                  <p
                    class="mt-2.5 text-2xl lg:text-[2rem] leading-tight text-[#2BFFC3]"
                  >
                    {{ props.plan.principalRefund ? "Yes" : "No" }}
                  </p>
                </div>
              </div>

              <div class="mt-7 sm:mt-8">
                <div class="flex flex-col sm:flex-row gap-4">
                  <div
                    class="h-14 sm:h-15.5 flex w-full sm:max-w-65 items-center justify-between rounded-full border border-white/15 px-6 text-base"
                  >
                    <button
                      type="button"
                      class="text-white/90 text-lg hover:text-[#2BFFC3] transition"
                      @click="decreaseQuantity"
                    >
                      -
                    </button>
                    <span class="text-white">{{ quantity }}</span>
                    <button
                      type="button"
                      class="text-white/90 text-lg hover:text-[#2BFFC3] transition"
                      @click="increaseQuantity"
                    >
                      +
                    </button>
                  </div>
                  <BaseButtonLink
                    type="button"
                    :disabled="!isAgreed"
                    @click="emitBuy"
                    class="w-full disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Buy Plan
                  </BaseButtonLink>
                </div>

                <div class="flex flex-col">
                  <div class="flex gap-2.5 my-5">
                    <label class="neon-checkbox">
                      <input type="checkbox" v-model="isAgreed" />
                      <div class="neon-checkbox__frame">
                        <div class="neon-checkbox__box">
                          <div class="neon-checkbox__check-container">
                            <svg
                              viewBox="0 0 24 24"
                              class="neon-checkbox__check"
                            >
                              <path d="M3,12.5l7,7L21,5"></path>
                            </svg>
                          </div>
                          <div class="neon-checkbox__glow"></div>
                          <div class="neon-checkbox__borders">
                            <span></span><span></span><span></span><span></span>
                          </div>
                        </div>
                        <div class="neon-checkbox__effects">
                          <div class="neon-checkbox__particles">
                            <span></span><span></span><span></span><span></span>
                            <span></span><span></span><span></span><span></span>
                            <span></span><span></span><span></span><span></span>
                          </div>
                          <div class="neon-checkbox__rings">
                            <div class="ring"></div>
                            <div class="ring"></div>
                            <div class="ring"></div>
                          </div>
                          <div class="neon-checkbox__sparks">
                            <span></span><span></span><span></span><span></span>
                          </div>
                        </div>
                      </div>
                    </label>
                    <p>‘I have read and agree to the terms’.</p>
                  </div>

                  <button
                    type="button"
                    class="inline-flex items-center gap-3 text-[#2BFFC3] text-sm leading-none hover:opacity-90 transition"
                    @click="showDetails = !showDetails"
                  >
                    <CircleIcon/>
                    {{
                      showDetails
                        ? "Hide view details"
                        : "Expand to view details"
                    }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="opacity-0 translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-2"
          >
            <div
              v-if="showDetails"
              class="p-7.5 space-x-7.5 lg:space-y-10 border border-[#222222] rounded-[20px] mt-15 lg:mt-20"
            >
              <div
                v-for="instruction in resolvedInstructions"
                :key="instruction.title"
              >
                <h4
                  class="text-[#2BFFC3] text-lg font-dm leading-none mb-2.5"
                >
                  {{ instruction.title }}
                </h4>
                <p class="text-[#CCC] text-sm leading-[160%]">
                  {{ instruction.description }}
                </p>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</template>
