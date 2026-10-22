<script setup lang="ts">
/**
 * 代表が右から歩いてきて立ち止まるイラスト（public/images/rajan_walk.svg。scripts/build_rajan_walk.py で作る）。
 * 動きは SVG の中にあり、読み込んだときに1回だけ動く。なので画面に入ってから img を出す
 * （ヒーローなら表示が始まってすぐ、下のセクションならスクロールで見えたとき）。
 * 高さは外から class で決める（例：h-64 md:h-80）。
 */
interface Props {
  alt: string
}

defineProps<Props>()

const url = usePublicUrl('/images/rajan_walk.svg')
const root = ref<HTMLElement>()
const isVisible = ref(false)

onMounted(() => {
  if (!root.value || !('IntersectionObserver' in window)) {
    isVisible.value = true
    return
  }
  const observer = new IntersectionObserver((entries) => {
    if (entries.some(entry => entry.isIntersecting)) {
      isVisible.value = true
      observer.disconnect()
    }
  }, { threshold: 0.3 })
  observer.observe(root.value)
})
</script>

<template>
  <div ref="root">
    <img v-if="isVisible" :src="url" :alt="alt" class="h-full w-auto" loading="eager" />
  </div>
</template>
