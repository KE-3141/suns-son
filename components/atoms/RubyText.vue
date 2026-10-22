<script setup lang="ts">
/**
 * 「漢字[よみ]」の書き方の文を、ふりがな（ruby）つきで表示する。
 * UKARU ONLINE の教材データと同じ書き方。かっこの前に続く漢字にふりがなを付ける。
 */
interface Props {
  text: string
}

const props = defineProps<Props>()

interface Part {
  base: string
  rt?: string
}

const parts = computed<Part[]>(() => {
  const result: Part[] = []
  const pattern = /([一-鿿々〆ヶ]+)\[([^\]]+)\]/g
  let last = 0
  for (const match of props.text.matchAll(pattern)) {
    const index = match.index ?? 0
    if (index > last) result.push({ base: props.text.slice(last, index) })
    result.push({ base: match[1] ?? '', rt: match[2] })
    last = index + match[0].length
  }
  if (last < props.text.length) result.push({ base: props.text.slice(last) })
  return result
})
</script>

<template>
  <span lang="ja">
    <template v-for="(part, index) in parts" :key="index">
      <ruby v-if="part.rt">{{ part.base }}<rt>{{ part.rt }}</rt></ruby>
      <template v-else>{{ part.base }}</template>
    </template>
  </span>
</template>
