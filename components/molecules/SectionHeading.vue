<script setup lang="ts">
/**
 * セクション見出しブロック。
 * タイトル下に secondary カラーのピル形アンダーラインが入る。
 */
interface Props {
  label?: string
  title?: string
  align?: 'left' | 'center' | 'right'
  titleClass?: string
}

withDefaults(defineProps<Props>(), {
  align: 'center',
  titleClass: 'text-neutral-800',
})
</script>

<template>
  <div
    :class="{
      'text-left': align === 'left',
      'text-center': align === 'center',
      'text-right': align === 'right',
    }"
  >
    <p
      v-if="label"
      class="text-primary-400 text-sm font-medium tracking-[0.2em] uppercase mb-3"
    >
      {{ label }}
    </p>
    <h2
      class="inline-block text-3xl md:text-4xl font-black leading-tight relative pb-5"
    >
      <slot>{{ title }}</slot>
    </h2>
  </div>
</template>
