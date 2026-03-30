<script setup lang="ts">
/**
 * サービス内容セクション（2カラムグリッド）。
 * index.vue と business.vue で共用。
 */
const { services } = useSiteContent()
</script>

<template>
  <section class="py-16 md:py-24 bg-[#eaf6fd]">
    <div class="max-w-6xl mx-auto px-6">
      <div class="mb-12 text-center">
        <SectionHeading title="事業内容" label="Our Services" />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <BusinessCard
          v-for="service in services"
          :key="service.key"
          :label="service.label"
          :title="service.title"
          :description="service.description"
          :image-src="service.imageSrc"
          :image-alt="service.imageAlt"
          :to="service.to ?? ''"
          :link-text="service.linkText ?? ''"
        />
      </div>
    </div>
  </section>
</template>
