<script setup lang="ts">
/**
 * 内部ページ共通の見出し。パンくず（現在地）+ h1 + 説明文。
 * parent を渡すと「トップ ＞ parent ＞ title」の順に並ぶ。
 * illust を渡すと右にイラストを置く（飾りなので alt なし）。
 */
interface Crumb {
  to: string
  label: string
}

interface Props {
  title: string
  description?: string
  parent?: Crumb
  illust?: string
}
defineProps<Props>()
</script>

<template>
  <section class="bg-primary-bg border-b border-rule overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 pt-6 md:grid md:grid-cols-12 md:gap-8">
      <div class="md:col-span-8 pb-10 md:pb-14">
        <nav v-reveal aria-label="現在地" class="mb-8 md:mb-10">
          <ol class="flex flex-wrap items-center gap-x-2 text-sm text-muted">
            <li><NuxtLink to="/" class="hover:text-primary-deep hover:underline">トップ</NuxtLink></li>
            <template v-if="parent">
              <li aria-hidden="true">＞</li>
              <li><NuxtLink :to="parent.to" class="hover:text-primary-deep hover:underline">{{ parent.label }}</NuxtLink></li>
            </template>
            <li aria-hidden="true">＞</li>
            <li aria-current="page" class="text-text">{{ title }}</li>
          </ol>
        </nav>
        <h1 v-reveal="150" class="text-3xl md:text-4xl font-black leading-snug tracking-tight text-text">{{ title }}</h1>
        <p v-if="description" v-reveal="300" class="text-text text-base md:text-lg leading-relaxed max-w-2xl mt-4">
          {{ description }}
        </p>
      </div>
      <div v-if="illust" class="hidden md:flex md:col-span-4 relative items-end justify-center pt-6">
        <span class="absolute bottom-0 w-56 h-56 lg:w-64 lg:h-64 rounded-t-full bg-white" aria-hidden="true" />
        <IllustImage v-reveal="450" :src="illust" eager class="relative h-48 lg:h-56 w-auto" />
      </div>
    </div>
  </section>
</template>
