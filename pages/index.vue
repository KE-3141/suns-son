<script setup lang="ts">
const worldMapUrl = usePublicUrl('/images/world_map.svg')
const rajanUrl = usePublicUrl('/images/rajan.svg')
const simpleLogoUrl = usePublicUrl('/images/simple_logo.svg')

useHead({ title: "Sun's Son株式会社 | 外国人留学生ご紹介サービス" })
useSeoMeta({
  description:
    "Sun's Son株式会社は「教育」×「紹介」×「サポート」で、日本語・特定技能教育から生活サポートまで一貫して提供する外国人人材紹介会社です。",
})

const { company, pillars, referralFlows } = useSiteContent()

const companyRows = [
  { label: '会社名', value: company.name },
  { label: '住所', value: `〒${company.postalCode} ${company.address}` },
  {
    label: 'TEL',
    value: `<a href="tel:${company.telRaw}" class="text-primary-400 hover:text-primary-500 font-medium transition-colors duration-150">${company.tel}</a>`,
  },
  { label: '受付時間', value: `${company.hours}（${company.holidays}定休）` },
]
</script>

<template>
  <main>
    <!-- ===== 1. ヒーロー ===== -->
    <section
      class="relative bg-white overflow-hidden flex items-center min-h-[calc(100vh-4rem)]"
    >
      <!-- 背景：世界地図 -->
      <div class="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <img
          :src="worldMapUrl"
          alt=""
          class="w-full h-full object-contain scale-75 md:scale-100"
          aria-hidden="true"
          fetchpriority="high"
          loading="eager"
        />
      </div>

      <!-- 可読性オーバーレイ -->
      <div class="absolute inset-0 z-[1] pointer-events-none bg-white/40" />

      <!-- コンテンツ：縦並び中央揃え -->
      <div class="relative z-10 w-full max-w-3xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <!-- メインキャッチコピー -->
        <div class="mb-6">
          <h1 class="text-3xl md:text-4xl lg:text-[2.5rem] font-black leading-tight text-neutral-800">
            「<span class="text-primary-400">教育</span>」×「<span class="text-primary-400">紹介</span>」×「<span class="text-primary-400">サポート</span>」で
          </h1>
          <p class="text-3xl md:text-4xl lg:text-[2.5rem] font-black leading-tight text-neutral-800 mt-2">
            <span class="text-primary-400">日本</span>をもっと<span class="text-primary-400">元気</span>に。
          </p>
        </div>

        <p class="text-neutral-600 text-base md:text-lg leading-relaxed max-w-xl mb-8">
          {{ company.description }}
        </p>

        <!-- CTAボタン -->
        <div class="flex flex-col sm:flex-row gap-4">
          <AppButton to="/contact/" size="lg">
            お問い合わせはこちら
            <IconArrow />
          </AppButton>
          <AppButton to="/business/" size="lg" variant="secondary">
            事業内容を見る
          </AppButton>
        </div>

        <!-- イラスト -->
        <div
          class="relative isolate flex shrink-0 flex-col items-center mt-10"
        >
          <img
            :src="rajanUrl"
            alt="代表者イラスト"
            class="relative z-10 h-56 md:h-72 lg:h-80 w-auto object-contain"
            fetchpriority="high"
            loading="eager"
          />
        </div>
      </div>

      <!-- スクロールインジケーター -->
      <div
        class="absolute bottom-8 left-1/2 z-10 -translate-x-1/2
               flex flex-col items-center gap-2 text-neutral-400 text-xs tracking-widest"
      >
        <span>SCROLL</span>
        <div class="w-px h-8 bg-gradient-to-b from-secondary-400 to-transparent" />
      </div>
    </section>

    <!-- ===== 2. 会社について ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <SectionHeading label="About Us" class="mb-6">
          外国人材採用に、もっと安心を。
        </SectionHeading>
        <p class="text-neutral-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {{ company.description }}
          日本語教育・特定技能研修から就労後の生活サポートまで、企業と留学生の双方に寄り添ったワンストップサービスを提供します。
        </p>

        <!-- 3つの柱 -->
        <dl class="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          <div class="text-center">
            <dd class="text-3xl md:text-4xl font-black text-primary-400">教育</dd>
            <dt class="text-xs text-neutral-400 mt-2 leading-relaxed">日本語・特定技能<br>研修サポート</dt>
          </div>
          <div class="text-center">
            <dd class="text-3xl md:text-4xl font-black text-primary-400">紹介</dd>
            <dt class="text-xs text-neutral-400 mt-2 leading-relaxed">外国人留学生<br>人材紹介</dt>
          </div>
          <div class="text-center">
            <dd class="text-3xl md:text-4xl font-black text-primary-400">サポート</dd>
            <dt class="text-xs text-neutral-400 mt-2 leading-relaxed">就労後の生活・<br>アフターケア</dt>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===== 3. 3つの特長 ===== -->
    <SplitListSection
      label="Our Features"
      title="Sun's Son の特長"
      description="教育・紹介・サポートを一貫して提供するワンストップサービスで、企業様の外国人材採用を全力でバックアップします。"
      link-to="/business/"
      link-text="事業内容をくわしく見る"
      theme="light"
      :items="pillars"
    />

    <!-- ===== 4. サービス内容 ===== -->
    <ServicesSection />

    <!-- ===== 5. 人材紹介までの流れ ===== -->
    <StepsSection
      label="Deal Flow"
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 6. 会社概要スニペット ===== -->
    <section class="py-20 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading label="Company" title="会社概要" align="left" class="mb-8" />
            <dl class="space-y-0 text-sm">
              <div
                v-for="row in companyRows"
                :key="row.label"
                class="grid grid-cols-[7rem_1fr] gap-3 py-3 border-b border-neutral-100 last:border-0"
              >
                <dt class="text-neutral-500 font-medium">{{ row.label }}</dt>
                <dd class="text-neutral-800" v-html="row.value" />
              </div>
            </dl>
            <SlideLink
              to="/company/"
              class="inline-flex items-center mt-8 text-primary-400 font-semibold
                     hover:text-primary-800 transition-colors"
            >
              会社概要をくわしく見る
            </SlideLink>
          </div>

          <!-- 地図プレースホルダー -->
          <div
            class="bg-neutral-100 rounded-2xl h-72 md:h-full min-h-64 flex items-center
                   justify-center text-neutral-400 text-sm border border-neutral-200"
          >
            <div class="text-center">
              <svg
                class="w-10 h-10 mx-auto mb-3 text-neutral-300"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p>Google Maps</p>
              <p class="text-xs mt-1 text-neutral-300">{{ company.addressFull }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 7. お問い合わせ促進バナー ===== -->
    <section class="py-16 md:py-20 bg-primary-400 text-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="md:flex items-center justify-between gap-8">
          <div class="mb-8 md:mb-0">
            <p class="text-secondary-200 text-sm font-medium tracking-[0.2em] uppercase mb-2">
              Contact Us
            </p>
            <h2 class="text-2xl md:text-3xl font-black mb-3">
              外国人材の採用をご検討の方へ
            </h2>
            <p class="text-white/80 text-sm md:text-base leading-relaxed max-w-xl">
              求人条件のヒアリングからアフターケアまで、まずはお気軽にご相談ください。
              専任スタッフが丁寧に対応いたします。
            </p>
          </div>
          <div class="flex-shrink-0">
            <AppButton to="/contact/" size="lg" variant="secondary">
              お問い合わせはこちら
              <IconArrow />
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 8. お問い合わせ CTA ===== -->
    <CtaSection />
  </main>
</template>
