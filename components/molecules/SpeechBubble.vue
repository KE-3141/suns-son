<script setup lang="ts">
/**
 * 人物の吹き出し（UKARU の c.say）。読む人に話しかける一言だけに使う。
 * 顔の画像は右（吹き出しのしっぽが顔の画像に入っている）。
 */
interface Props {
  faceSrc: string
  name?: string
}

defineProps<Props>()
</script>

<template>
  <figure class="flex items-end gap-1">
    <div class="flex-1 min-w-0">
      <blockquote class="bg-primary-bg rounded-2xl px-5 py-4 text-base leading-relaxed text-text">
        <slot />
      </blockquote>
      <figcaption v-if="name" class="text-sm text-muted mt-2 px-2">{{ name }}</figcaption>
    </div>
    <img :src="faceSrc" alt="" class="h-16 w-auto flex-shrink-0 mb-8" loading="lazy" />
  </figure>
</template>
