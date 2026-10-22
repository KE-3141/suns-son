<script setup lang="ts">
/**
 * ネパール語の文の下に、日本語を小さく薄く添える（UKARU ONLINE ページ用）。
 * tag で外側の要素を決める（p・h3・dd・span など）。文字の大きさ・太さ・色は class で外から指定する。
 * text が文字列のときは、日本語だけのふつうの文として出す。
 */
import type { Bilingual } from '~/types/bilingual'

interface Props {
  text: string | Bilingual
  tag?: string
}

withDefaults(defineProps<Props>(), {
  tag: 'p',
})
</script>

<template>
  <component :is="tag">
    <template v-if="typeof text === 'string'">{{ text }}</template>
    <template v-else>
      <span lang="ne">{{ text.ne }}</span>
      <span lang="ja" class="block mt-1 font-sans text-sm font-normal leading-relaxed tracking-normal text-muted">{{ text.ja }}</span>
    </template>
  </component>
</template>
