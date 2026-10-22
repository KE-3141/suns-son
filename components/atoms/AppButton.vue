<script setup lang="ts">
/**
 * サイト共通ボタン。
 * - to   → NuxtLink としてレンダリング
 * - href → <a> としてレンダリング
 * - それ以外 → <button> としてレンダリング
 */
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})

const sizeClass: Record<NonNullable<Props['size']>, string> = {
  sm: 'text-xs px-4 py-2',
  md: 'text-sm px-5 py-2.5',
  lg: 'text-base px-8 py-4',
}

const variantClass: Record<NonNullable<Props['variant']>, string> = {
  primary: 'bg-primary hover:bg-primary-deep text-white border border-primary hover:border-primary-deep',
  secondary: 'bg-white hover:bg-primary-bg text-primary border border-primary',
}

const buttonClass = computed(() => [
  'inline-flex items-center justify-center gap-2 font-bold rounded-full',
  'transition-colors duration-150 whitespace-nowrap cursor-pointer',
  sizeClass[props.size],
  variantClass[props.variant],
])
</script>

<template>
  <NuxtLink v-if="props.to" :to="props.to" :class="buttonClass">
    <slot />
  </NuxtLink>
  <a v-else-if="props.href" :href="props.href" :class="buttonClass">
    <slot />
  </a>
  <button v-else type="button" :class="buttonClass">
    <slot />
  </button>
</template>
