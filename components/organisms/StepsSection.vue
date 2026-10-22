<script setup lang="ts">
/**
 * 手順のセクション。見出しの下に流れ図（FlowSteps）を置く。
 */
interface Step {
  step: string | number
  title: string
  description: string
  illust?: string
}

interface Props {
  title: string
  steps: Step[]
  goalLast?: boolean
}

withDefaults(defineProps<Props>(), {
  goalLast: false,
})
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading :title="title" class="mb-10" />
      <FlowSteps :steps="steps" :goal-last="goalLast" />
    </div>
  </section>
</template>
