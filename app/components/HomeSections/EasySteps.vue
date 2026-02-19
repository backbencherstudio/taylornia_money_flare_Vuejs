<script setup lang="ts">
import SectionHeading from '~/components/Reusable/SectionHeading.vue';
</script>

<template>
    <section class="xl:max-w-7xl mx-auto px-6 xl:px-10">
        <div class="mb-12.5">
            <SectionHeading title="Your Financial Partner in 3 Easy Steps" description="" align="center" />
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="border border-[#222222] rounded-3xl flex flex-col justify-between">
                <div class="px-12 pt-[37px]">
                    <img src="/images/landing/step1.png" alt="step1" class="w-full h-auto">
                </div>
                <div class="px-5 pb-5 mt-5">
                    <h3 class="text-[1.375rem] leading-[109%] font-medium mb-2.5">Sign Up in Minutes</h3>
                    <p class="text-base leading-[120%] text-[#CCC]">Create your Fintech account anywhere on web or
                        mobile.</p>
                </div>
            </div>
            <div class="border border-[#222222] rounded-3xl flex flex-col justify-between">
                <div class="px-6 pt-[37px]">
                    <img src="/images/landing/step2.png" alt="step2" class="w-full h-auto">
                </div>
                <div class="px-5 pb-5">
                    <h3 class="text-[1.375rem] leading-[109%] font-medium mb-2.5">Set Your Financial Goals</h3>
                    <p class="text-base leading-[120%] text-[#CCC]">Customize your savings, investments,
                        spendings and tracking.</p>
                </div>
            </div>
            <div class="border border-[#222222] rounded-3xl flex flex-col justify-between">
                <div class="pt-[37px]">
                    <img src="/images/landing/step3.png" alt="step3" class="w-full h-auto">
                </div>
                <div class="px-5 pb-5">
                    <h3 class="text-[1.375rem] leading-[109%] font-medium mb-2.5">Grow Your Wealth</h3>
                    <p class="text-base leading-[120%] text-[#CCC]">Monitor your financial growth with AI-powered
                        insights with us.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped></style>