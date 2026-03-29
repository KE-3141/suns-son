<script setup lang="ts">
/**
 * 数値ハイライト行。
 * 横一列に stat アイテムを並べる。
 * h-industry の About Us セクションの数字表示パターンを共通化。
 */
interface StatItem {
  value: string
  unit?: string
  label: string
}

interface Props {
  stats: StatItem[]
  note?: string
}

defineProps<Props>()
</script>

<template>
  <dl class="grid gap-6" :style="`grid-template-columns: repeat(${stats.length}, minmax(0, 1fr))`">
    <div
      v-for="stat in stats"
      :key="stat.label"
      class="text-center"
    >
      <dd class="text-3xl md:text-4xl font-black text-primary-400">
        {{ stat.value }}<span v-if="stat.unit" class="text-xl md:text-2xl">{{ stat.unit }}</span>
      </dd>
      <dt class="text-xs text-neutral-400 mt-1">{{ stat.label }}</dt>
    </div>
    <p v-if="note" class="col-span-full text-center text-xs text-neutral-400 mt-2">
      {{ note }}
    </p>
  </dl>
</template>
