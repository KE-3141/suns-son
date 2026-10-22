<script setup lang="ts">
useHead({ title: 'UKARU ONLINE | जापानमा बस्ने नेपालीहरूका लागि अनलाइन कक्षा' })
useSeoMeta({
  description:
    '日本在住ネパール人向けオンラインクラス「UKARU ONLINE」。JLPT・BJT・介護福祉士・特定技能（宿泊・建設）のクラスを、オリジナル教材とネパール語の説明で行っています。',
})

const { ukaruOnline } = useSiteContent()
const { kaigo } = ukaruOnline
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

    <!-- ===== 4. クラス（教科の名前だけ。くわしくはクラスのページ） ===== -->
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

    <!-- ===== 5. 介護福祉士（次の試験の日。くわしくはクラスのページの介護福祉士を開いて見せる） ===== -->
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

    <!-- ===== 6. オリジナル教材 ===== -->
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
