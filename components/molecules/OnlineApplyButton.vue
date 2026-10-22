<script setup lang="ts">
/**
 * UKARU ONLINE の受講申し込みボタン（Facebook のメッセージを開く）。
 * ボタンの文字はネパール語、下に日本語を小さく添える。
 * note：下の日本語の案内。すぐ上の文で同じことを言っているときは false にする。
 */
interface Props {
  size?: 'md' | 'lg'
  note?: boolean
}

withDefaults(defineProps<Props>(), {
  size: 'md',
  note: true,
})

const { ukaruOnline } = useSiteContent()
</script>

<template>
  <div>
    <AppButton
      :href="ukaruOnline.facebookUrl"
      target="_blank"
      rel="noopener noreferrer"
      :size="size"
    >
      <span lang="ne">{{ ukaruOnline.apply.ne }}</span>
    </AppButton>
    <p v-if="note" lang="ja" class="text-sm text-muted mt-2">{{ ukaruOnline.apply.ja }}</p>
  </div>
</template>
