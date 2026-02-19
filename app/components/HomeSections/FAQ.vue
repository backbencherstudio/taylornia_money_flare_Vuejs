<script setup lang="ts">
import { ref } from 'vue'
import CircleIcon from '../Icons/CircleIcon.vue'
import CloseIcon from '../Icons/CloseIcon.vue'
import SectionHeading from '../Reusable/SectionHeading.vue'

const activeIndex = ref<number | null>(null)

const toggleAccordion = (index: number) => {
    activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
    {
        question: "Lorem ipsum dolor sit amet consectetur?",
        answer:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laboriosam accusamus architecto expedita blanditiis alias repudiandae ut labore magnam maxime!"
    },
    {
        question: "How does automation improve workflow?",
        answer:
            "Automation reduces repetitive tasks, improves efficiency, and enables teams to focus on higher-value work."
    },
    {
        question: "Is this fully responsive?",
        answer:
            "Yes. The accordion adapts beautifully across mobile, tablet, and desktop devices."
    },
    {
        question: "Is this fully responsive?",
        answer:
            "Yes. The accordion adapts beautifully across mobile, tablet, and desktop devices."
    },
    {
        question: "Is this fully responsive?",
        answer:
            "Yes. The accordion adapts beautifully across mobile, tablet, and desktop devices."
    },
    {
        question: "Is this fully responsive?",
        answer:
            "Yes. The accordion adapts beautifully across mobile, tablet, and desktop devices."
    },
]
</script>

<template>
    <section class="py-10 xl:py-20">
        <div class="px-6">
            <SectionHeading title="Frequently Asked Questions"
                description="Leverage smart automation and data-driven insights to make informed decisions."
                align="center" titleWidth="lg:w-[18ch]" descriptionWidth="xl:w-[65ch]" />
        </div>

        <div class="max-w-230 mx-auto px-4 sm:px-6 lg:px-8 mt-10 space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
                class="border border-[#222222] rounded-2xl overflow-hidden transition-all duration-300">
                <!-- Button -->
                <button @click="toggleAccordion(index)"
                    class="w-full flex justify-between items-center gap-4 p-5 sm:p-6 text-left">
                    <h3 class="text-base sm:text-lg md:text-xl font-medium">
                        {{ faq.question }}
                    </h3>

                    <div class="transition-transform duration-300" :class="{ '': activeIndex === index }">
                        <CloseIcon v-if="activeIndex === index" class="text-red-500" />
                        <CircleIcon v-else class="text-primary" />
                    </div>
                </button>

                <transition enter-active-class="transition-all duration-300 ease-out"
                    leave-active-class="transition-all duration-200 ease-in" enter-from-class="max-h-0 opacity-0"
                    enter-to-class="max-h-[500px] opacity-100" leave-from-class="max-h-[500px] opacity-100"
                    leave-to-class="max-h-0 opacity-0">
                    <div v-show="activeIndex === index"
                        class="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-gray-400">
                        {{ faq.answer }}
                    </div>
                </transition>
            </div>
        </div>
    </section>
</template>
