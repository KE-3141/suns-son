<script setup lang="ts">
const { strengths, stats, workTypes } = useSiteContent()
const placeholderImageUrl = usePublicUrl('/images/hero_1.png')
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      title="Sun's Sonの強み"
      description="創業50年超の実績が培った技術力・現場対応力・品質安全管理。平山工業が現場で大切にする3つの強みをご紹介します。"
    />

    <!-- ===== 2. 3つのこだわり（詳細） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="space-y-20 md:space-y-28">
          <div
            v-for="(strength, index) in strengths"
            :key="strength.key"
            :id="strength.key"
            class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center scroll-mt-20"
            :class="{ 'md:[&>*:first-child]:order-last': index % 2 === 1 }"
          >
            <!-- 画像 -->
            <div class="relative border border-rule overflow-hidden aspect-[4/3]">
              <img
                :src="placeholderImageUrl"
                :alt="strength.title"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <!-- テキスト -->
            <div>
              <h2 class="text-2xl md:text-3xl font-bold text-text mb-5">
                {{ strength.title }}
              </h2>
              <p class="text-text leading-relaxed mb-8">
                {{ strength.detail }}
              </p>
              <CheckList :items="strength.highlights" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. 実績数値 ===== -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="数字で見る" class="mb-8" />
        <StatRow :stats="stats" />
      </div>
    </section>

    <!-- ===== 4. 主要取引先 ===== -->
    <ClientsSection />

    <!-- ===== 5. 対応工種 ===== -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="対応工種・施工実績" class="mb-10" />
        <div class="flex flex-wrap gap-2">
          <TagBadge
            v-for="work in workTypes"
            :key="work"
            variant="line"
          >
            {{ work }}
          </TagBadge>
        </div>
        <div class="mt-12">
          <AppButton to="/business/" size="lg" variant="secondary">
            事業紹介を見る
          </AppButton>
        </div>
      </div>
    </section>

    <!-- ===== 6. CTA ===== -->
    <CtaSection />
  </main>
</template>
