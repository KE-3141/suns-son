<script setup lang="ts">
/**
 * 画像つきの紹介ブロック（画像・見出し・説明・箇条書きまたはリンク）。
 * 外枠は付けない。画像の下に見出しと本文が続くだけの素直な組み方にする。
 */
interface Props {
  title: string
  description: string
  to?: string
  linkText?: string
  items?: string[]
  imageSrc?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain'
}
withDefaults(defineProps<Props>(), {
  imageFit: 'cover',
})
</script>

<template>
  <article class="flex flex-col">
    <div
      v-if="imageSrc"
      :class="['h-56 overflow-hidden flex-shrink-0 mb-6', imageFit === 'contain' ? 'pt-6 bg-primary-bg' : '']"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt ?? ''"
        :class="['w-full h-full', imageFit === 'contain' ? 'object-contain' : 'object-cover']"
        loading="lazy"
      />
    </div>
    <SubHeading class="mb-4">{{ title }}</SubHeading>
    <p class="text-text text-base leading-relaxed">
      {{ description }}
    </p>
    <CheckList
      v-if="items?.length"
      :items="items"
      class="mt-6"
    />
    <AppButton
      v-else-if="to && linkText"
      :to="to"
      variant="secondary"
      class="mt-6"
    >
      {{ linkText }}
    </AppButton>
  </article>
</template>
