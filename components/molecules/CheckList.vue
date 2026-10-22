<script setup lang="ts">
interface Props {
  items: string[]
  variant?: 'default' | 'muted'
}

withDefaults(defineProps<Props>(), {
  variant: 'default',
})
</script>

<template>
  <ul class="space-y-2">
    <li
      v-for="item in items"
      :key="item"
      class="flex items-start gap-3 text-base leading-relaxed"
      :class="variant === 'muted' ? 'text-muted' : 'text-text'"
    >
      <span class="mt-2.5 w-1.5 h-1.5 flex-shrink-0 bg-primary" aria-hidden="true" />
      {{ item }}
    </li>
  </ul>
</template>
