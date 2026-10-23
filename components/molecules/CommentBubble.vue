<script setup lang="ts">
/**
 * 一言そえる吹き出し（UKARU の c.comment）。丸い顔 + 名前 + 吹き出し。
 * faceSrc は illustkit のキャラクターの顔（左向き。左に置くときは反転して吹き出しの方を向かせる）。
 * side：顔を置く側（学習者は右、それ以外は左）。tone：line は白地 + 罫線、primary は淡い青。
 * #meta スロット：名前の横に置く小さな情報（受講生の声の勉強中の内容・星など）。
 */
interface Props {
  name: string
  faceSrc: string
  side?: 'left' | 'right'
  tone?: 'line' | 'primary'
}

const props = withDefaults(defineProps<Props>(), {
  side: 'left',
  tone: 'line',
})

const faceUrl = computed(() => usePublicUrl(props.faceSrc))
</script>

<template>
  <figure :class="['flex items-start gap-3', side === 'right' && 'flex-row-reverse']">
    <div class="flex-none w-13 h-13 rounded-full bg-white border border-rule flex items-center justify-center overflow-hidden">
      <img :src="faceUrl" alt="" :class="['h-4/5 w-auto', side === 'left' && '-scale-x-100']" loading="lazy" />
    </div>
    <div :class="['flex-1 min-w-0 flex flex-col', side === 'right' ? 'items-end' : 'items-start']">
      <figcaption :class="['flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted leading-relaxed mx-1.5 mb-0.5', side === 'right' && 'justify-end']">
        <span>{{ name }}</span>
        <slot name="meta" />
      </figcaption>
      <blockquote
        :class="[
          'max-w-full rounded-2xl px-5 py-2.5 text-base leading-relaxed text-text',
          side === 'right' ? 'rounded-tr-sm' : 'rounded-tl-sm',
          tone === 'line' && 'bg-white border border-rule',
          tone === 'primary' && 'bg-primary-bg',
        ]"
      >
        <slot />
      </blockquote>
    </div>
  </figure>
</template>
