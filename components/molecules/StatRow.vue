<script setup lang="ts">
/**
 * 要点の数字の帯（UKARU の c.facts）。
 * 罫線で区切り、数字は Arial で大きく。note には出典と時点を書く。
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
  <div>
    <dl
      class="grid border-y border-rule divide-x divide-rule"
      :style="`grid-template-columns: repeat(${stats.length}, minmax(0, 1fr))`"
    >
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="flex flex-col-reverse justify-end px-3 md:px-4 py-3"
      >
        <dd class="font-num text-2xl sm:text-3xl md:text-4xl font-bold text-primary leading-tight whitespace-nowrap mt-1">
          {{ stat.value }}<span v-if="stat.unit" class="font-sans text-base font-bold text-text ml-1">{{ stat.unit }}</span>
        </dd>
        <dt class="text-xs text-muted">{{ stat.label }}</dt>
      </div>
    </dl>
    <p v-if="note" class="text-xs text-muted mt-2">
      {{ note }}
    </p>
  </div>
</template>
