<script setup lang="ts">
const { clients } = useSiteContent()
</script>

<template>
  <section class="py-16 md:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-6">
      <SectionHeading title="主要取引先" class="mb-8" />
      <ul class="flex flex-wrap gap-2">
        <li v-for="client in clients" :key="client">
          <TagBadge variant="line">{{ client }}</TagBadge>
        </li>
      </ul>
    </div>
  </section>
</template>
