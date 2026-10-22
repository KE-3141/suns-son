<script setup lang="ts">
/**
 * 順序のない要点の一覧。左に要点の見出し（イラストがあれば添える）、右に説明。
 * 手順（順番に意味があるもの）には FlowSteps を使い、こちらは使わない。
 * title・description に { ne, ja } を渡すと、ネパール語の下に日本語を小さく添える（BilingualText）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Point {
  title: string | Bilingual
  description: string | Bilingual
  illust?: string
}

interface Props {
  items: Point[]
}

defineProps<Props>()
</script>

<template>
  <dl class="border-t border-rule">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 py-6 border-b border-rule"
    >
      <dt class="flex items-center gap-4 text-lg font-bold leading-snug text-text">
        <span
          v-if="item.illust"
          class="flex-shrink-0 w-20 h-20 rounded-full bg-primary-bg flex items-center justify-center overflow-hidden"
        >
          <IllustImage :src="item.illust" class="w-16 h-16" />
        </span>
        <BilingualText tag="span" :text="item.title" />
      </dt>
      <BilingualText
        tag="dd"
        :text="item.description"
        class="md:col-span-2 md:self-center text-base leading-relaxed text-text"
      />
    </div>
  </dl>
</template>
