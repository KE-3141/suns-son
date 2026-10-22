<script setup lang="ts">
/**
 * 順序のない要点の一覧。左に要点の見出し（イラストがあれば添える）、右に説明。
 * 手順（順番に意味があるもの）には FlowSteps を使い、こちらは使わない。
 * title・description に { ne, ja } を渡すと、ネパール語の下に日本語を小さく添える（BilingualText）。
 * link を渡すと、説明の下に別ページへのボタン（AppButton secondary）を出す。
 *   to はサイト内、href はほかのサイト（新しいタブで開く）。label が { ne, ja } ならネパール語だけを出す。
 */
import type { Bilingual } from '~/types/bilingual'

interface Point {
  title: string | Bilingual
  description: string | Bilingual
  illust?: string
  link?: {
    to?: string
    href?: string
    label: string | Bilingual
  }
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
      <dd class="md:col-span-2 md:self-center">
        <BilingualText :text="item.description" class="text-base leading-relaxed text-text" />
        <AppButton
          v-if="item.link"
          :to="item.link.to"
          :href="item.link.href"
          :target="item.link.href ? '_blank' : undefined"
          :rel="item.link.href ? 'noopener noreferrer' : undefined"
          variant="secondary"
          size="sm"
          class="mt-4"
        >
          <span v-if="typeof item.link.label === 'string'">{{ item.link.label }}</span>
          <span v-else lang="ne">{{ item.link.label.ne }}</span>
        </AppButton>
      </dd>
    </div>
  </dl>
</template>
