<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  titleWidth?: string   // Tailwind class like 'max-w-2xl'
  descriptionWidth?: string
}

const props = withDefaults(defineProps<Props>(), {
  align: 'center'
})

const alignmentClass = computed(() => {
  return {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[props.align]
})

const wrapperAlignClass = computed(() => {
  return props.align === 'center' ? 'mx-auto' : ''
})
</script>

<template>
  <div :class="alignmentClass">
    <h1
      class="text-[7.87vw] sm:text-[2.5rem] font-dm leading-[120%] tracking-[-0.08px]"
      :class="[wrapperAlignClass, titleWidth]"
    >
      {{ title }}
    </h1>

    <p
      v-if="description"
      class="text-[3.7vw] sm:text-base text-neutral-400 leading-[160%] mt-3.5 md:mt-5"
      :class="[wrapperAlignClass, descriptionWidth]"
    >
      {{ description }}
    </p>
  </div>
</template>
