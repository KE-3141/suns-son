<script setup lang="ts">
/**
 * 資料（PDF）を読むためのダイアログ。ページごとの画像を縦に並べて、中でスクロールして読む。
 * PDF をそのまま埋め込むとスマホ（iPhone は1ページ目だけ・Android は表示できない）で読めないので、画像にして見せる。
 * open（v-model:open）で開け閉めする。Esc・背景のクリック・✕ で閉じる。開いている間は後ろのページをスクロールさせない。
 * title は { ne, ja } も受け取る（BilingualText）。label は題の上の小さな文字（例：N5 第1課）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Props {
  title: string | Bilingual
  label?: string
  pages: string[]
}

const props = withDefaults(defineProps<Props>(), {
  label: undefined,
})

const isOpen = defineModel<boolean>('open', { default: false })
const dialog = ref<HTMLDialogElement>()

const pageAlt = (index: number) => {
  const title = typeof props.title === 'string' ? props.title : props.title.ja
  return `${title} ${index + 1}ページ目`
}

watch(isOpen, (open) => {
  if (!dialog.value) return
  if (open && !dialog.value.open) dialog.value.showModal()
  if (!open && dialog.value.open) dialog.value.close()
  document.documentElement.classList.toggle('overflow-hidden', open)
})

/** 背景（ダイアログの外側）を押したら閉じる */
const onClick = (event: MouseEvent) => {
  if (event.target === dialog.value) isOpen.value = false
}

onBeforeUnmount(() => document.documentElement.classList.remove('overflow-hidden'))
</script>

<template>
  <dialog
    ref="dialog"
    class="m-auto p-0 border-0 bg-white w-full h-full max-w-none max-h-none md:w-11/12 md:h-5/6 lg:max-w-4xl backdrop:bg-text/60"
    @close="isOpen = false"
    @click="onClick"
  >
    <div class="flex flex-col h-full">
      <div class="flex items-center gap-4 px-4 md:px-6 py-3 border-b border-rule">
        <div class="flex-1 min-w-0">
          <p v-if="label" class="text-xs font-bold text-primary-deep mb-1">{{ label }}</p>
          <BilingualText :text="title" class="text-base md:text-lg font-bold leading-snug text-text" />
        </div>
        <span class="flex-shrink-0 font-num text-sm text-muted">{{ pages.length }} p</span>
        <button
          type="button"
          class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center text-primary cursor-pointer transition-colors duration-150 hover:bg-primary-bg"
          aria-label="閉じる"
          @click="isOpen = false"
        >
          <svg class="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
            <path d="M3 3l10 10M13 3L3 13" />
          </svg>
        </button>
      </div>
      <div class="flex-1 overflow-y-auto bg-soft px-3 py-4 md:px-8 md:py-6">
        <ol class="space-y-4 md:space-y-6">
          <li v-for="(page, index) in pages" :key="page">
            <img :src="usePublicUrl(page)" :alt="pageAlt(index)" class="w-full h-auto border border-rule bg-white" loading="lazy" />
          </li>
        </ol>
      </div>
    </div>
  </dialog>
</template>
