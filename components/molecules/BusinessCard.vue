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
      <p class="text-neutral-900 text-sm leading-relaxed">
        {{ description }}
      </p>
      <!-- 箇条書きモード -->
      <ul v-if="items?.length" class="mt-auto pt-8 space-y-3">
        <li
          v-for="item in items"
          :key="item"
          class="flex items-start gap-3 text-sm text-neutral-500"
        >
          <span
            class="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent-500/20
                   flex items-center justify-center text-primary-400"
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
      <!-- テキストリンクモード -->
      <SlideLink
        v-else-if="to && linkText"
        :to="to"
        class="inline-flex items-center text-white font-semibold text-sm mt-auto pt-8"
      >
        {{ linkText }}
      </SlideLink>
    </div>
  </div>
</template>
