<script setup lang="ts">
/**
 * コンテンツ内の別ページ誘導テキストリンク。
 * 下線つきの文字リンク。矢印や動きは付けない（リンクであることは下線で示す）。
 */
interface Props {
  to: string
}
defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="to"
    class="underline underline-offset-4 decoration-1 hover:decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-deep"
  >
    <slot />
  </NuxtLink>
</template>
