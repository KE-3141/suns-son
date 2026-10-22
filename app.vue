<script setup lang="ts">
// favicon：ロゴ（simple_logo.svg）を正方形に収めたもの
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: usePublicUrl('/favicon.svg') }],
})
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
