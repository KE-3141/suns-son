<script setup lang="ts">
/**
 * illustkit（UKARU のイラスト素材）から持ってきたイラスト。
 * src は public/ からのパス（例 '/images/illust/house.svg'）。
 * 飾りとして置くときは alt を省く（読み上げない）。
 */
interface Props {
  src: string
  alt?: string
  eager?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  alt: '',
  eager: false,
})

const url = computed(() => usePublicUrl(props.src))
</script>

<template>
  <img
    :src="url"
    :alt="alt"
    class="object-contain"
    :loading="eager ? 'eager' : 'lazy'"
    :fetchpriority="eager ? 'high' : undefined"
  />
</template>
