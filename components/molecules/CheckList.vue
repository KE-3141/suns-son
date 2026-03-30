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
  <ul class="space-y-3">
    <li
      v-for="item in items"
      :key="item"
      class="flex items-start gap-3 text-base"
      :class="variant === 'muted' ? 'text-neutral-500' : 'text-neutral-700'"
    >
      <span
        class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-400/10
               flex items-center justify-center"
      >
        <svg
          class="w-3 h-3 text-primary-400"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </span>
      {{ item }}
    </li>
  </ul>
</template>
