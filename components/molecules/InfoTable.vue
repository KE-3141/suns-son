<script setup lang="ts">
/**
 * 項目と内容の表（会社概要・許可番号など）。線だけの表で、行を罫線で区切る。
 * href を渡した行は内容をリンクにする。
 * label・value に { ne, ja } を渡すと、ネパール語の下に日本語を小さく添える（BilingualText）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Row {
  label: string | Bilingual
  value: string | Bilingual
  href?: string
}

interface Props {
  rows: Row[]
}

defineProps<Props>()
</script>

<template>
  <dl class="border-t-2 border-primary text-base">
    <div
      v-for="(row, index) in rows"
      :key="index"
      class="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-rule"
    >
      <BilingualText tag="dt" :text="row.label" class="font-bold text-text" />
      <dd class="sm:col-span-2 text-text leading-relaxed">
        <a
          v-if="row.href"
          :href="row.href"
          class="font-num font-bold text-primary-deep hover:text-primary-dark transition-colors duration-150"
        >
          {{ row.value }}
        </a>
        <BilingualText v-else tag="span" :text="row.value" />
      </dd>
    </div>
  </dl>
</template>
