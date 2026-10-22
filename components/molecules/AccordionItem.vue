<script setup lang="ts">
/**
 * 折りたたみ（details / summary）。見出しの行を押すと中身が開く。開閉の動きは付けない。
 * 見出しの行：丸い板のイラスト・見出し（h2）・短い説明・右に + / − の印。
 * 行は罫線で区切る（角は丸めない）。並べるときは外側に border-t border-rule を付ける。
 * id を渡すと、URL の #id で来たときにその項目を開いて見せる。
 * title・description は { ne, ja } も受け取る（BilingualText）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Props {
  title: string | Bilingual
  description?: string | Bilingual
  illust?: string
  id?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: undefined,
  illust: undefined,
  id: undefined,
})

const route = useRoute()
const isOpen = ref(false)

const openFromHash = () => {
  if (props.id && route.hash === `#${props.id}`) isOpen.value = true
}
onMounted(openFromHash)
watch(() => route.hash, openFromHash)

const onToggle = (event: Event) => {
  isOpen.value = (event.target as HTMLDetailsElement).open
}
</script>

<template>
  <details :id="id" :open="isOpen" class="group border-b border-rule scroll-mt-20" @toggle="onToggle">
    <summary class="flex items-center gap-4 md:gap-6 py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
      <span
        v-if="illust"
        class="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-bg flex items-center justify-center overflow-hidden"
      >
        <IllustImage :src="illust" class="w-12 h-12 md:w-16 md:h-16" />
      </span>
      <span class="flex-1 min-w-0">
        <BilingualText
          tag="h2"
          :text="title"
          class="text-xl md:text-2xl font-bold leading-snug text-text transition-colors duration-150 group-hover:text-primary-deep"
        />
        <BilingualText v-if="description" :text="description" class="hidden md:block text-sm leading-relaxed text-text mt-2 max-w-3xl" />
      </span>
      <span
        class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary transition-colors duration-150 group-hover:bg-primary-bg"
        aria-hidden="true"
      >
        <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <path d="M2 8h12" />
          <path d="M8 2v12" class="group-open:hidden" />
        </svg>
      </span>
    </summary>
    <div class="pb-12">
      <slot />
    </div>
  </details>
</template>
