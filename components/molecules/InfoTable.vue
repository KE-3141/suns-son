<script setup lang="ts">
/**
 * 項目と内容の表（会社概要・許可番号など）。線だけの表で、行を罫線で区切る。
 * href を渡した行は内容をリンクにする。
 */
interface Row {
  label: string
  value: string
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
      v-for="row in rows"
      :key="row.label"
      class="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-1 py-4 border-b border-rule"
    >
      <dt class="font-bold text-text">{{ row.label }}</dt>
      <dd class="sm:col-span-2 text-text leading-relaxed">
        <a
          v-if="row.href"
          :href="row.href"
          class="font-num font-bold text-primary-deep hover:text-primary-dark transition-colors duration-150"
        >
          {{ row.value }}
        </a>
        <template v-else>{{ row.value }}</template>
      </dd>
    </div>
  </dl>
</template>
