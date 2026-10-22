<script setup lang="ts">
/**
 * 順序のない要点の一覧。左に要点の見出し（イラストがあれば添える）、右に説明。
 * 手順（順番に意味があるもの）には FlowSteps を使い、こちらは使わない。
 */
interface Point {
  title: string
  description: string
  illust?: string
  to?: string
  linkText?: string
}

interface Props {
  items: Point[]
}

defineProps<Props>()
</script>

<template>
  <dl class="border-t border-rule">
    <div
      v-for="item in items"
      :key="item.title"
      class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 py-6 border-b border-rule"
    >
      <dt class="flex items-center gap-4 text-lg font-bold leading-snug text-text">
        <span
          v-if="item.illust"
          class="flex-shrink-0 w-20 h-20 rounded-full bg-primary-bg flex items-center justify-center overflow-hidden"
        >
          <IllustImage :src="item.illust" class="w-16 h-16" />
        </span>
        {{ item.title }}
      </dt>
      <dd class="md:col-span-2 md:self-center text-base leading-relaxed text-text">
        {{ item.description }}
        <span v-if="item.to && item.linkText" class="block mt-4">
          <AppButton :to="item.to" variant="secondary" size="sm">
            {{ item.linkText }}
          </AppButton>
        </span>
      </dd>
    </div>
  </dl>
</template>
