<script setup lang="ts">
/**
 * ページ下部の関連ページ誘導（CTA の手前に置く）。
 */
interface Link {
  to: string
  label: string
}

interface Props {
  lead: string
  links: Link[]
}

defineProps<Props>()
</script>

<template>
  <section class="py-12 md:py-16 bg-white border-t border-rule">
    <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
      <p class="text-muted text-sm mb-4">{{ lead }}</p>
      <div class="flex flex-col sm:flex-row sm:flex-wrap items-start gap-3">
        <AppButton
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          variant="secondary"
        >
          {{ link.label }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
