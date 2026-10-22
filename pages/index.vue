<script setup lang="ts">
const worldMapUrl = usePublicUrl('/images/world_map.svg')
const rajanWalkUrl = usePublicUrl('/images/rajan_walk.svg')

// 歩くイラストは SVG の読み込みと同時に動き出すので、ヒーローの文字と同じくブラウザで表示が始まってから読み込む
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

useHead({ title: "Sun's Son株式会社 | 外国人留学生ご紹介サービス" })
useSeoMeta({
  description:
    "Sun's Son株式会社は「教育」×「紹介」×「サポート」で、日本語・特定技能教育から生活サポートまで一貫して提供する外国人人材紹介会社です。",
})

const { company, pillars, referralFlows } = useSiteContent()

const companyRows = [
  { label: '会社名', value: company.name },
  { label: '住所', value: `〒${company.postalCode} ${company.address}` },
  { label: 'TEL', value: company.tel, href: `tel:${company.telRaw}` },
  { label: '受付時間', value: `${company.hours}（${company.holidays}定休）` },
]

const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(company.addressFull)}&output=embed`
</script>

<template>
  <main>
    <!-- ===== 1. ヒーロー ===== -->
    <!-- 世界地図を背景に、コピー・ボタン・代表のイラストを中央にそろえる -->
    <section class="relative bg-white overflow-hidden flex items-center min-h-[calc(100svh-4rem)]">
      <img
        v-reveal
        :src="worldMapUrl"
        alt=""
        class="absolute inset-0 w-full h-full object-contain scale-75 md:scale-100 pointer-events-none opacity-60"
        fetchpriority="high"
        loading="eager"
      />

      <div class="relative w-full max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center">
        <h1 v-reveal="200" class="text-2xl sm:text-3xl md:text-4xl font-black leading-snug tracking-tight text-text mb-6">
          「<span class="text-primary">教育</span>」×「<span class="text-primary">紹介</span>」×「<span class="text-primary">サポート</span>」で<br>
          <span class="text-primary">日本</span>をもっと<span class="text-primary">元気</span>に。
        </h1>

        <p v-reveal="450" class="text-text text-base md:text-lg leading-relaxed max-w-xl mb-8">
          {{ company.description }}
        </p>

        <div v-reveal="650" class="flex flex-col sm:flex-row gap-4">
          <AppButton to="/contact/" size="lg">
            お問い合わせはこちら
            <IconArrow />
          </AppButton>
          <AppButton to="/business/" size="lg" variant="secondary">
            事業内容を見る
          </AppButton>
        </div>

        <!-- 代表が右上から歩いてきて立ち止まる（動きは SVG の中。scripts/build_rajan_walk.py で作る） -->
        <div class="h-64 md:h-80 lg:h-96 mt-10">
          <img
            v-if="isMounted"
            :src="rajanWalkUrl"
            :alt="`代表 ${company.ceo}`"
            class="h-full w-auto"
            loading="eager"
          />
        </div>
      </div>
    </section>

    <!-- ===== 2. 会社について + 選ばれる理由 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading class="mb-8">
          外国人材採用に、もっと安心を。
        </SectionHeading>
        <p class="text-text text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          私たちは、ネパール人材に特化した人材紹介会社です。<br>
          日本語・特定技能教育から、人材のご紹介、就労後のアフターケアまで、一貫して丁寧にサポートしております。
          初めて外国人材採用をされる企業様にも、初めて日本で働く人材にも、安心していただけるサポートをお約束いたします。
        </p>

        <PointList :items="pillars" />
      </div>
    </section>

    <!-- ===== 3. 事業内容 ===== -->
    <ServicesSection />

    <!-- ===== 4. 人材紹介までの流れ ===== -->
    <StepsSection
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 5. 会社概要スニペット ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="会社概要" class="mb-8" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <InfoTable :rows="companyRows" />
            <AppButton to="/company/" variant="secondary" class="mt-6">
              会社概要をくわしく見る
            </AppButton>
          </div>

          <iframe
            :src="mapUrl"
            :title="`${company.name}の所在地（${company.addressFull}）`"
            class="w-full h-72 md:h-80 border border-rule"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>

    <!-- ===== 7. お問い合わせ CTA ===== -->
    <CtaSection />
  </main>
</template>
