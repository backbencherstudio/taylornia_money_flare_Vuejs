<script setup lang="ts">
import BaseButtonLink from "~/components/Reusable/BaseButtonLink.vue";

interface WorkflowStep {
  title: string;
  description: string;
}

const workflowSteps: WorkflowStep[] = [
  {
    title: "AI Market Intelligence",
    description:
      "MoneyFlare is designed to make professional cryptocurrency quantitative trading accessible without complexity. The platform removes the need for market analysis, technical expertise, or active trade management by handling the entire trading process automatically. Every decision is driven by advanced AI systems built to operate with consistency, discipline, and long-term reliability.",
  },
  {
    title: "AI-Driven Market Intelligence",
    description:
      "At the core of MoneyFlare is a continuously operating AI engine that monitors global cryptocurrency markets in real time. The system processes large volumes of market data, identifies patterns, trends, and anomalies across multiple exchanges and market conditions. This constant analysis allows the platform to respond intelligently to changing environments without human delay or emotional bias.",
  },
  {
    title: "Quantitative Strategy Execution",
    description:
      "When market conditions meet the criteria defined by MoneyFlare's quantitative models, trades are executed automatically. Each decision follows a structured, rule-based framework developed using professional trading methodologies. This approach ensures that every action is systematic, consistent, and aligned with the platform's long-term strategy rather than short-term speculation.",
  },
  {
    title: "Embedded Risk Management",
    description:
      "Risk management is integrated into every stage of the trading process. The AI continuously evaluates exposure, position sizing, and market volatility to ensure trading activity remains controlled and balanced. As conditions change, the system dynamically adjusts its behavior to prioritize capital preservation and operational stability.",
  },
  {
    title: "Professional Oversight And Continuous Optimization",
    description:
      "While MoneyFlare operates through full automation, it is supported by an experienced professional team. Trading performance, system behavior, and infrastructure reliability are continuously monitored to ensure stability and security. AI models are refined over time, allowing the platform to evolve while maintaining strict operational standards.",
  },
];

const getStepNumber = (index: number): string =>
  `${index + 1}`.padStart(2, "0");
</script>

<template>
  <div>
    <section
      class="relative isolate overflow-hidden "
    >
      <div class="max-w-7xl mx-auto px-6 xl:px-10 lg:py-45">
        <div class="relative">
          <span
            class="absolute left-5 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-white/60 md:left-1/2"
          />
          <span
            class="absolute bottom-0 left-5 h-2 w-2 -translate-x-1/2 rounded-full bg-white/60 md:left-1/2"
          />
          <span
            class="absolute bottom-2 left-5 top-1 w-px bg-linear-to-b from-white/30 via-[#2BFFC3]/80 to-white/30 md:left-1/2 md:-translate-x-1/2"
          />

          <ol class="space-y-10 sm:space-y-12 md:space-y-14">
            <li
              v-for="(step, index) in workflowSteps"
              :key="step.title"
              class="relative grid grid-cols-[2.5rem_minmax(0,1fr)] md:min-h-42 md:grid-cols-2 md:items-start"
            >
              <div class="absolute left-5 top-0 -translate-x-1/2 md:left-1/2">
                <div
                  class="grid h-9 w-9 lg:h-20 lg:w-20 place-items-center rounded-xl bg-linear-to-b from-[#2BFFC3] to-[#1A9975] shadow-[0_10px_28px_rgba(43,255,195,0.35)]"
                >
                  <span
                    class="relative lg:h-10 lg:w-10 rounded-full border-4 border-[#0f3e31]"
                  >
                    <span
                      class="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full  border-4 border-[#0f3e31]"
                    />
                  </span>
                </div>
              </div>

              <article
                class="relative col-start-2 pt-1 "
                :class="
                  index % 2 === 0
                    ? 'md:col-start-1 md:justify-self-end md:max-w-3xl pl-10 sm:pr-10 lg:pr-36 md:text-right'
                    : 'md:col-start-2 md:max-w-3xl pl-10 sm:pl-10 lg:pl-36'
                "
              >
                <p
                  class="pointer-events-none absolute -top-2.5 hidden select-none text-[4.5rem] xl:text-[100px] leading-none font-bold tracking-[-0.06em] bg-linear-to-b from-white/20 to-black/20 bg-clip-text text-transparent md:block"
                  :class="index % 2 === 0 ? 'sm:-right-32 lg:-right-63' : 'sm:-left-32  lg:-left-63'"
                >
                  {{ getStepNumber(index) }}
                </p>

                <h3 class="font-dm  text-2xl lg:text-[2rem] leading-[150%] tracking-[-0.64px] text-white">
                  {{ step.title }}
                </h3>
                <p class="mt-3.5 text-sm leading-[1.65] text-[#A4A4A4]">
                  {{ step.description }}
                </p>
              </article>
            </li>
          </ol>
        </div>

        <div class="mt-12 flex justify-center md:mt-16">
          <BaseButtonLink to="/auth/signup" class="px-8 py-2 text-xs">
            Get Started
          </BaseButtonLink>
        </div>
      </div>
    </section>
  </div>
</template>
