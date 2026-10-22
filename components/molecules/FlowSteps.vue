<script setup lang="ts">
/**
 * 流れ図（UKARU の c.flow）。
 * 角の丸い箱を → でつなぐ。モバイルは縦（↓）、lg 以上は横（→）。
 * illust があれば箱の上にイラストを置く。
 * goalLast：最後の箱を primary で塗る（ゴール・いちばん伝えたい所）。
 */
interface Step {
  step?: string | number
  title: string
  description?: string
  illust?: string
}

interface Props {
  steps: Step[]
  goalLast?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  goalLast: false,
})

const isGoal = (index: number) => props.goalLast && index === props.steps.length - 1
</script>

<template>
  <ol class="flex flex-col lg:flex-row lg:items-stretch">
    <template v-for="(step, index) in steps" :key="step.title">
      <li
        class="flex-1 min-w-0 border-2 border-primary rounded-2xl px-5 py-4"
        :class="isGoal(index) ? 'bg-primary-deep text-white' : 'bg-white text-text'"
      >
        <div
          v-if="step.illust"
          class="h-24 mb-3 rounded-xl flex items-center justify-center"
          :class="isGoal(index) ? 'bg-white' : 'bg-primary-bg'"
        >
          <IllustImage :src="step.illust" class="h-20 w-auto" />
        </div>
        <p
          v-if="step.step"
          class="inline-flex items-center justify-center w-8 h-8 rounded-full font-num text-sm font-bold mb-3"
          :class="isGoal(index) ? 'bg-white text-primary-deep' : 'bg-primary-deep text-white'"
        >
          {{ step.step }}
        </p>
        <p
          class="font-bold text-base leading-snug"
          :class="isGoal(index) ? 'text-white' : 'text-primary-deep'"
        >
          {{ step.title }}
        </p>
        <p
          v-if="step.description"
          class="text-sm leading-relaxed mt-2"
          :class="isGoal(index) ? 'text-white' : 'text-text'"
        >
          {{ step.description }}
        </p>
      </li>
      <li
        v-if="index < steps.length - 1"
        class="flex items-center justify-center py-1 lg:py-0 lg:w-8 flex-shrink-0 font-num font-bold text-xl text-primary"
        aria-hidden="true"
      >
        <span class="lg:hidden">↓</span>
        <span class="hidden lg:inline">→</span>
      </li>
    </template>
  </ol>
</template>
