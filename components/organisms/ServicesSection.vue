<script setup lang="ts">
/**
 * 事業内容セクション。教育・紹介・サポートの3事業を1行ずつ並べる。
 * 左にイラストの丸い板、右に事業名・説明・POINT（その事業の強み）・リンク。
 * index.vue と business.vue で共用。
 */
interface Props {
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: '事業内容',
})

const { services } = useSiteContent()
</script>

<template>
  <section class="py-16 md:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading :title="title" class="mb-6" />

      <div
        v-for="service in services"
        :key="service.key"
        class="grid grid-cols-1 md:grid-cols-12 gap-x-10 gap-y-5 py-8 border-b border-rule md:items-center"
      >
        <div class="md:col-span-4 h-48 rounded-3xl bg-primary-bg flex items-center justify-center px-6 py-4">
          <IllustImage :src="service.illust" class="h-full w-auto" />
        </div>
        <div class="md:col-span-8">
          <h3 class="text-lg md:text-xl font-bold leading-snug text-text mb-2">{{ service.title }}</h3>
          <p class="text-base leading-relaxed text-text mb-5">{{ service.description }}</p>
          <div class="border-l-2 border-primary pl-4 mb-5">
            <p class="font-display text-sm font-bold text-primary-deep mb-1">POINT</p>
            <p class="font-bold leading-snug text-text mb-1">{{ service.point.title }}</p>
            <p class="text-sm leading-relaxed text-muted">{{ service.point.description }}</p>
          </div>
          <AppButton :to="service.to" variant="secondary">
            {{ service.linkText }}
          </AppButton>
        </div>
      </div>
    </div>
  </section>
</template>
