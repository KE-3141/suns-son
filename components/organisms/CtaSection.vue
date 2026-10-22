<script setup lang="ts">
/**
 * ページ末尾共通 CTA セクション。
 * 全内部ページの最下部に配置する。右にラジャンのイラストを添える。
 */
const { company } = useSiteContent()
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg border-t border-rule">
    <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-center">
      <div class="md:col-span-9">
        <h2 class="text-2xl md:text-3xl font-bold leading-snug text-text mb-4">
          外国人材の採用をご検討の方へ
        </h2>
        <p class="text-base leading-relaxed text-text max-w-2xl mb-10">
          求人条件のヒアリングからアフターケアまで、まずはお気軽にご相談ください。
          専任スタッフが丁寧に対応いたします。
        </p>

        <div class="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
          <div>
            <p class="text-sm text-muted mb-1">お電話でのご相談（{{ company.hoursLabel }}）</p>
            <a
              :href="`tel:${company.telRaw}`"
              class="inline-flex items-center gap-3 font-num text-4xl md:text-5xl font-bold text-primary hover:underline"
            >
              <IconPhone class="w-8 h-8" aria-hidden="true" />
              {{ company.tel }}
            </a>
          </div>
          <AppButton to="/contact/" size="lg">
            お問い合わせフォームへ
          </AppButton>
        </div>
      </div>
      <div class="hidden md:flex md:col-span-3 justify-center">
        <IllustImage src="/images/illust/rajan_thumbs_up.png" class="h-64 w-auto" />
      </div>
    </div>
  </section>
</template>
