<script setup lang="ts">
import BellIcon from '../Icons/BellIcon.vue';
import PaperIcon from '../Icons/PaperIcon.vue';
import ShildIcon from '../Icons/ShildIcon.vue';
import StatsIcon from '../Icons/StatsIcon.vue';
import UserCheckIcon from '../Icons/UserCheckIcon.vue';
import WalletIcon2 from '../Icons/WalletIcon2.vue';
import SectionHeading from '../Reusable/SectionHeading.vue';

const features = [
    {
        title: 'Instant transfers',
        description: 'Move assets quickly and efficiently supported networks. Optimized infrastructure ensures fast execution without unnecessary friction.',
        icon: WalletIcon2,
    },
    {
        title: 'Risk analysis',
        description: 'Advanced AI continuously evaluates market conditions and exposure. Make informed decisions backed by real-time quantitative insights.',
        icon: StatsIcon,
    },
    {
        title: 'Real-time alerts',
        description: 'Stay informed with instant notifications on key market movements, trades, and system updates — exactly when it matters.',
        icon: BellIcon,
    },
    {
        title: 'Tax Optimization',
        description: 'Track transactions and performance with structured data designed to support clearer reporting and smarter tax planning.',
        icon: PaperIcon,
    },
    {
        title: 'Autopilot mode',
        description: 'Let AI-driven strategies operate automatically based on predefined rules and market signals — no constant monitoring required.',
        icon: UserCheckIcon,
    },
    {
        title: 'Maximum security',
        description: 'Enterprise-grade security with non-custodial architecture and encrypted API connections — your assets remain under your control.',
        icon: ShildIcon,
    },
]

</script>

<template>
    <section class="max-w-7xl mx-auto px-6 pt-10 xl:pt-20">
        <div>
            <SectionHeading title="Powerful features built for crypto confidence"
                description="Streamline your experience with intelligent tools designed to keep you secure, informed, and in control — every step of the way."
                align="center" titleWidth="lg:w-[18ch]" descriptionWidth="xl:w-[65ch]" />
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 xl:mt-12.5">
            <div v-for="feature in features" :key="feature.title" class="border border-[#222222] rounded-xl p-6">
                <div
                    class="w-11 h-11 bg-linear-to-b to-[#1A9975] from-[#2BFFC3] rounded-xl flex items-center justify-center">
                    <component :is="feature.icon" />
                </div>
                <div class="mt-8">
                    <h2 class="text-xl font-semibold">{{ feature.title }}</h2>
                    <p class="text-sm text-[#CCC] leading-[160%]">{{ feature.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>