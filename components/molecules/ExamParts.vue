<script setup lang="ts">
/**
 * 試験の構成図。試験のパート（学科・実技、A・B・C など）を角の丸い箱で横に並べる（モバイルは縦）。
 * 箱の中：パートの名前・大きい数字（問題数・点数など）・中身の説明。
 * weight を渡すと、md 以上で箱の幅をその比にする（問題数の多いパートほど広い。せまくなりすぎないよう下限あり）。
 * note には合格の基準などを書く。name・detail・note は { ne, ja } も受け取る（BilingualText）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Part {
  name: string | Bilingual
  /** 大きく出す数字（例：60問・0〜60点） */
  value?: string
  detail?: string | Bilingual
  weight?: number
}

interface Props {
  parts: Part[]
  note?: string | Bilingual
}

defineProps<Props>()
</script>

<template>
  <div>
    <ol class="flex flex-col md:flex-row gap-3">
      <li
        v-for="(part, index) in parts"
        :key="index"
        class="min-w-0 md:min-w-48 border-2 border-primary rounded-2xl px-5 py-4 bg-white"
        :style="`flex: ${part.weight ?? 1} 1 0%`"
      >
        <BilingualText :text="part.name" class="text-base font-bold leading-snug text-primary-deep" />
        <p v-if="part.value" class="font-num text-3xl font-bold text-primary leading-tight mt-2">{{ part.value }}</p>
        <BilingualText v-if="part.detail" :text="part.detail" class="text-sm leading-relaxed text-text mt-2" />
      </li>
    </ol>
    <BilingualText v-if="note" :text="note" class="text-sm leading-relaxed text-text mt-4" />
  </div>
</template>
