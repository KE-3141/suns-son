<script setup lang="ts">
/**
 * セクション見出し（h2）。下に青と水色の短い線を並べる。
 * inverse：primary で塗った背景の上で使うとき（文字を白にする）。
 */
interface Props {
  title?: string
  inverse?: boolean
}

withDefaults(defineProps<Props>(), {
  inverse: false,
})
</script>

<template>
  <h2
    class="text-2xl md:text-3xl font-bold leading-snug tracking-tight"
    :class="inverse ? 'text-white' : 'text-text'"
  >
    <slot>{{ title }}</slot>
    <span class="flex gap-1.5 mt-4" aria-hidden="true">
      <span class="block w-8 h-1.5 rounded-full" :class="inverse ? 'bg-white' : 'bg-primary'" />
      <span class="block w-3 h-1.5 rounded-full" :class="inverse ? 'bg-primary-light' : 'bg-sub'" />
    </span>
  </h2>
</template>
