<script setup lang="ts">
/**
 * 内部ページ共通の見出し。パンくず（現在地）+ h1 + 説明文。
 * breadcrumb：false でパンくずを出さない（サイトのトップページ。UKARU ONLINE など）。
 * parents を渡すと「トップ ＞ parents… ＞ title」の順に並ぶ（上の階層から順に渡す）。
 * description スロットに入れたものは説明文の位置に出る（ボタンや2か国語の文など）。
 * illust を渡すと右にイラストを置く（飾りなので alt なし）。
 * illust スロットの中身はイラストに重ねて置く（イラストの大きさに対する absolute で位置を決める）。
 * title に { ne, ja } を渡すと、ネパール語の下に日本語を小さく添える（UKARU ONLINE）。パンくずにはネパール語を出す。
 * homeLabel：パンくずの最初（トップ）の文字。
 */
import type { Bilingual } from '~/types/bilingual'

interface Crumb {
  to: string
  label: string
}

interface Props {
  title: string | Bilingual
  homeLabel?: string
  description?: string
  parents?: Crumb[]
  illust?: string
  breadcrumb?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  breadcrumb: true,
  homeLabel: 'トップ',
})

const crumbLabel = computed(() => typeof props.title === 'string' ? props.title : props.title.ne)
</script>

<template>
  <section class="bg-primary-bg border-b border-rule overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-8" :class="breadcrumb ? 'pt-6' : 'pt-14 md:pt-20'">
      <div class="md:col-span-8 pb-10 md:pb-14">
        <nav v-if="breadcrumb" v-reveal aria-label="現在地" class="mb-8 md:mb-10">
          <ol class="flex flex-wrap items-center gap-x-2 text-sm text-muted">
            <li><NuxtLink to="/" class="hover:text-primary-deep hover:underline">{{ homeLabel }}</NuxtLink></li>
            <template v-for="crumb in parents" :key="crumb.to">
              <li aria-hidden="true">＞</li>
              <li><NuxtLink :to="crumb.to" class="hover:text-primary-deep hover:underline">{{ crumb.label }}</NuxtLink></li>
            </template>
            <li aria-hidden="true">＞</li>
            <li aria-current="page" class="text-text">{{ crumbLabel }}</li>
          </ol>
        </nav>
        <BilingualText v-reveal="150" tag="h1" :text="title" class="text-3xl md:text-4xl font-black leading-snug tracking-tight text-text" />
        <p v-if="description" v-reveal="300" class="text-text text-base md:text-lg leading-relaxed max-w-2xl mt-4">
          {{ description }}
        </p>
        <div v-if="$slots.description" v-reveal="300" class="max-w-2xl mt-4">
          <slot name="description" />
        </div>
      </div>
      <div v-if="illust" class="hidden md:flex md:col-span-4 relative items-end justify-center pt-6">
        <span class="absolute bottom-0 w-56 h-56 lg:w-64 lg:h-64 rounded-t-full bg-white" aria-hidden="true" />
        <div v-reveal="450" class="relative">
          <IllustImage :src="illust" eager class="h-48 lg:h-56 w-auto" />
          <slot name="illust" />
        </div>
      </div>
    </div>
  </section>
</template>
