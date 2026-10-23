<script setup lang="ts">
useHead({ title: 'UKARU ONLINE | जापानमा बस्ने नेपालीहरूका लागि अनलाइन कक्षा' })
useSeoMeta({
  description:
    '日本在住ネパール人向けオンラインクラス「UKARU ONLINE」。JLPT・BJT・介護福祉士・特定技能（宿泊・建設）のクラスを、オリジナル教材とネパール語の説明で行っています。',
})

const { ukaruOnline } = useSiteContent()
const { kaigo, reviews } = ukaruOnline

/** 受講生の声の数字（星の平均・件数）。出典はレビューのシートと読んだ日 */
const reviewStats = computed(() => {
  const average = reviews.items.reduce((sum, review) => sum + review.rating, 0) / reviews.items.length
  return [
    { value: average.toFixed(1), unit: '/ 5', label: 'औसत तारा / 星の平均' },
    { value: String(reviews.items.length), unit: '件', label: 'समीक्षा / レビュー' },
  ]
})
const reviewNote = `出典：UKARU 受講生レビュー（Google フォーム。${reviews.updated} 時点。掲載に同意した回答）`
const logoMarkUrl = usePublicUrl('/images/ukaru/ukaru_mark.svg')
</script>

<template>
  <main>
    <!-- ===== 1. ヒーロー ===== -->
    <OnlineHero />

    <!-- ===== 2. UKARU とは ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div class="md:col-span-7">
          <SectionHeading :title="{ ne: 'UKARU भनेको के हो?', ja: 'UKARU とは' }" class="mb-8" />
          <BilingualText :text="ukaruOnline.intro" class="text-base md:text-lg leading-relaxed max-w-3xl" />
        </div>
        <div class="md:col-span-5 mt-12 md:mt-0 flex justify-center">
          <!-- ロゴの円だけを、ゆっくり時計回りに回す（飾りなので読み上げない） -->
          <img
            :src="logoMarkUrl"
            alt=""
            loading="lazy"
            class="w-64 h-64 lg:w-80 lg:h-80 motion-safe:animate-spin-slow"
          />
        </div>
      </div>
    </section>

    <!-- ===== 3. なぜ UKARU？ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'किन UKARU?', ja: 'なぜ UKARU がいい？' }" class="mb-8" />
        <BilingualText :text="ukaruOnline.reasonsLead" class="text-base md:text-lg leading-relaxed max-w-3xl mb-10" />
        <PointList :items="ukaruOnline.reasons" />
      </div>
    </section>

    <!-- ===== 4. 受講生の声 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="reviews.title" class="mb-8" />
        <BilingualText :text="reviews.lead" class="text-base md:text-lg leading-relaxed max-w-3xl mb-8" />
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 md:items-center mb-10 md:mb-12">
          <CommentBubble :name="reviews.thanks.name" face-src="/images/illust/face_rajan.svg" tone="primary" class="md:col-span-7">
            <BilingualText :text="reviews.thanks.comment" class="font-bold" />
          </CommentBubble>
          <StatRow :stats="reviewStats" :note="reviewNote" class="md:col-span-5" />
        </div>
        <ReviewList :items="reviews.items" />
      </div>
    </section>

    <!-- ===== 5. クラス（教科の名前だけ。くわしくはクラスのページ） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'कक्षाहरू', ja: 'クラス' }" class="mb-6" />
        <BilingualText :text="ukaruOnline.coursesLead" class="text-base md:text-lg leading-relaxed max-w-3xl mb-10" />

        <ul class="border-t border-rule">
          <li
            v-for="course in ukaruOnline.courses"
            :key="course.title.ja"
            class="flex items-center gap-4 py-4 border-b border-rule"
          >
            <span class="flex-shrink-0 w-14 h-14 rounded-full bg-primary-bg flex items-center justify-center overflow-hidden">
              <IllustImage :src="course.illust" class="w-11 h-11" />
            </span>
            <BilingualText tag="span" :text="course.title" class="text-lg font-bold leading-snug text-text" />
          </li>
        </ul>

        <AppButton to="/classes/" variant="secondary" class="mt-8">
          <span lang="ne">कक्षाको विवरण</span>
        </AppButton>
      </div>
    </section>

    <!-- ===== 6. 介護福祉士（次の試験の日。くわしくはクラスのページの介護福祉士を開いて見せる） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-end">
        <div class="md:col-span-8">
          <SectionHeading :title="{ ne: 'कइगो फुकुशिशी परीक्षा', ja: '介護福祉士の試験' }" class="mb-6" />
          <BilingualText :text="kaigo.lead" class="text-base md:text-lg leading-relaxed max-w-3xl" />
          <AppButton to="/classes/#kaigo" variant="secondary" class="mt-8">
            <span lang="ne">परीक्षा र UKARU को कक्षाबारे</span>
          </AppButton>
        </div>
        <div class="md:col-span-4 mt-10 md:mt-0 border-t-2 border-primary pt-4">
          <BilingualText :text="kaigo.nextExam.label" class="text-sm font-bold text-text" />
          <p class="font-num text-5xl font-bold text-primary leading-tight mt-2">{{ kaigo.nextExam.date }}</p>
          <BilingualText :text="kaigo.nextExam.note" class="text-sm text-text mt-1" />
        </div>
      </div>
    </section>

    <!-- ===== 7. オリジナル教材 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'हाम्रो आफ्नै पाठ्यसामग्री', ja: 'オリジナル教材' }" class="mb-6" />
        <BilingualText :text="ukaruOnline.materialsLead" class="text-base md:text-lg leading-relaxed max-w-3xl" />
        <AppButton to="/materials/" variant="secondary" class="mt-8">
          <span lang="ne">पाठ्यसामग्री र नमूना</span>
        </AppButton>
      </div>
    </section>
  </main>
</template>
