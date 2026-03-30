<script setup lang="ts">
interface Props {
  label: string
  title: string
  description: string
  to?: string
  linkText?: string
  items?: string[]
  imageSrc?: string
  imageAlt?: string
  variant?: 'primary' | 'neutral'
  imageFit?: 'cover' | 'contain'
}
withDefaults(defineProps<Props>(), {
  variant: 'primary',
  imageFit: 'cover',
})
</script>

<template>
  <div
    class="relative bg-white text-neutral-900 rounded-sm overflow-hidden flex flex-col"
  >
    <!-- 画像（オプション） -->
    <div
      v-if="imageSrc"
      :class="['relative h-72 overflow-hidden flex-shrink-0', imageFit === 'contain' ? 'pt-6' : '']"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt ?? ''"
        :class="['w-full h-full', imageFit === 'contain' ? 'object-contain' : 'object-cover']"
        loading="lazy"
      />
    </div>
    <!-- コンテンツ -->
    <div class="relative p-10 md:p-12 flex flex-col flex-1">
      <p class="text-primary-400 text-xs font-medium tracking-[0.2em] uppercase mb-3">
        {{ label }}
      </p>
      <h3 class="text-2xl font-black mb-4">{{ title }}</h3>
      <p class="text-neutral-900 text-base leading-relaxed">
        {{ description }}
      </p>
      <!-- 箇条書きモード -->
      <CheckList
        v-if="items?.length"
        :items="items"
        variant="muted"
        class="mt-auto pt-8"
      />
      <!-- テキストリンクモード -->
      <SlideLink
        v-else-if="to && linkText"
        :to="to"
        class="inline-flex items-center text-primary-400 font-semibold text-base mt-auto pt-8"
      >
        {{ linkText }}
      </SlideLink>
    </div>
  </div>
</template>
