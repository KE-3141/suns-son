<script setup lang="ts">
/**
 * 小さなラベル（UKARU の c.tag）。
 * primary：青の塗りに白い文字。soft：淡い青に青い文字。outline / line：線だけ。
 */
interface Props {
  variant?: 'primary' | 'soft' | 'outline' | 'line'
}
withDefaults(defineProps<Props>(), { variant: 'line' })
</script>

<template>
  <span
    :class="[
      'inline-block text-xs font-bold leading-relaxed px-3 rounded-full whitespace-nowrap border',
      variant === 'primary' && 'bg-primary-deep border-primary-deep text-white',
      variant === 'soft' && 'bg-primary-bg border-primary-bg text-primary-deep',
      variant === 'outline' && 'bg-white border-primary text-primary-deep',
      variant === 'line' && 'bg-white border-rule text-muted',
    ]"
  >
    <slot />
  </span>
</template>
