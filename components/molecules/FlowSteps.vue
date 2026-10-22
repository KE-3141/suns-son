<script setup lang="ts">
/**
 * 流れ図（UKARU の c.flow）。
 * 角の丸い箱を矢印でつなぐ。
 * 3つまで：lg 以上は横に並べる（→）。モバイルは縦（↓）。
 * 4つ以上：横に並べると箱が小さくなるので、常に縦に1行ずつ並べる（md 以上は左にイラスト・右に文章）。
 * illust があれば箱にイラストを置く。bust：人のイラストを上半身だけ見えるように大きくする（下は箱で切る）。
 * goalLast：最後の箱を塗る（ゴール・いちばん伝えたい所）。
 */
interface Step {
  step?: string | number
  title: string
  description?: string
  illust?: string
  bust?: boolean
}

interface Props {
  steps: Step[]
  goalLast?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  goalLast: false,
})

const isRows = computed(() => props.steps.length > 3)
const isGoal = (index: number) => props.goalLast && index === props.steps.length - 1
</script>

<template>
  <ol class="flex flex-col" :class="isRows ? 'max-w-4xl' : 'lg:flex-row lg:items-stretch'">
    <template v-for="(step, index) in steps" :key="step.title">
      <li
        class="flex-1 min-w-0 border-2 border-primary rounded-2xl"
        :class="[
          isGoal(index) ? 'bg-primary-deep text-white' : 'bg-white text-text',
          isRows ? 'p-5 md:p-6 md:grid md:grid-cols-12 md:gap-8 md:items-center' : 'px-5 py-4',
        ]"
      >
        <div
          v-if="step.illust"
          class="rounded-xl flex justify-center"
          :class="[
            isGoal(index) ? 'bg-white' : 'bg-primary-bg',
            isRows ? 'h-36 mb-4 md:mb-0 md:col-span-4' : 'h-24 mb-3',
            step.bust ? 'items-start overflow-hidden' : 'items-center',
          ]"
        >
          <IllustImage
            :src="step.illust"
            :class="[
              'w-auto max-w-none',
              step.bust ? (isRows ? 'h-72 mt-3' : 'h-48 mt-2') : (isRows ? 'h-32' : 'h-20'),
            ]"
          />
        </div>
        <div :class="isRows && step.illust ? 'md:col-span-8' : 'md:col-span-12'">
          <p
            class="flex gap-3 font-bold leading-snug"
            :class="[
              isGoal(index) ? 'text-white' : 'text-primary-deep',
              isRows ? 'items-center text-lg md:text-xl' : 'flex-col items-start text-base',
            ]"
          >
            <span
              v-if="step.step"
              class="inline-flex flex-shrink-0 items-center justify-center w-8 h-8 rounded-full font-num text-sm font-bold"
              :class="isGoal(index) ? 'bg-white text-primary-deep' : 'bg-primary-deep text-white'"
            >
              {{ step.step }}
            </span>
            {{ step.title }}
          </p>
          <p
            v-if="step.description"
            class="leading-relaxed"
            :class="[
              isGoal(index) ? 'text-white' : 'text-text',
              isRows ? 'text-base mt-3' : 'text-sm mt-2',
            ]"
          >
            {{ step.description }}
          </p>
        </div>
      </li>
      <li
        v-if="index < steps.length - 1"
        class="flex items-center justify-center py-1 flex-shrink-0 font-num font-bold text-xl text-primary"
        :class="isRows ? 'md:grid md:grid-cols-12 md:gap-8 md:px-6' : 'lg:py-0 lg:w-8'"
        aria-hidden="true"
      >
        <span :class="isRows ? 'md:col-span-4 md:text-center' : 'lg:hidden'">↓</span>
        <span v-if="!isRows" class="hidden lg:inline">→</span>
      </li>
    </template>
  </ol>
</template>
