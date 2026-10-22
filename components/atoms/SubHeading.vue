<script setup lang="ts">
/**
 * 小見出し（h3）。UKARU の h3 と同じく、左に水色の線を引く。
 */
interface Props {
  as?: 'h3' | 'h4'
}
withDefaults(defineProps<Props>(), { as: 'h3' })
</script>

<template>
  <component
    :is="as"
    class="border-l-4 border-primary pl-3 text-lg md:text-xl font-bold leading-snug text-text"
  >
    <slot />
  </component>
</template>
