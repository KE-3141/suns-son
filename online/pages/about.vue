<script setup lang="ts">
useHead({ title: 'UKARU बारे | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE について。名前の由来、代表バンダーリ・ラジャンのプロフィール、運営会社をご紹介します。',
})

const { company, siteUrls, ukaruOnline } = useSiteContent()
const { about } = ukaruOnline
const markUrl = usePublicUrl('/images/ukaru/ukaru_mark.svg')

const operatorRows = [
  { label: { ne: 'सञ्चालक', ja: '運営会社' }, value: company.name, href: `${siteUrls.corporate}/` },
  { label: { ne: 'प्रतिनिधि', ja: '代表' }, value: company.ceo },
  { label: { ne: 'ठेगाना', ja: '所在地' }, value: `〒${company.postalCode} ${company.address}` },
]
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'UKARU बारे', ja: 'UKARU について' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/rajan_offering.png"
    >
      <template #description>
        <BilingualText :text="about.lead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
      <!-- 差し出した両手の上に、UKARU のロゴの円を浮かべる（回さない） -->
      <template #illust>
        <img :src="markUrl" alt="" class="absolute left-0 bottom-3/5 h-10 lg:h-12 w-auto" fetchpriority="high" loading="eager" />
      </template>
    </PageHero>

    <!-- ===== 1. 名前の由来 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div class="md:col-span-8">
          <SectionHeading :title="{ ne: 'UKARU नामको अर्थ', ja: '名前の由来' }" class="mb-6" />
          <BilingualText :text="about.nameStory" class="text-base md:text-lg leading-relaxed max-w-3xl" />
        </div>
        <div class="md:col-span-4 mt-10 md:mt-0 flex justify-center">
          <div class="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-primary-bg flex items-end justify-center overflow-hidden">
            <IllustImage src="/images/illust/rajan_party.png" class="h-5/6 w-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 2. 代表 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-center">
        <div class="md:col-span-8">
          <SectionHeading :title="{ ne: 'प्रतिनिधि', ja: '代表' }" class="mb-6" />
          <p class="text-2xl font-bold text-text">
            <span lang="ne">{{ about.leader.name.ne }}</span>
            <span lang="ja" class="text-base font-normal text-muted ml-2">{{ about.leader.name.ja }}</span>
          </p>
          <BilingualText :text="about.leader.role" class="text-sm text-text mt-1 mb-6" />
          <BilingualText :text="about.leader.profile" class="text-base md:text-lg leading-relaxed max-w-3xl" />
        </div>
        <div class="md:col-span-4 mt-10 md:mt-0 flex justify-center">
          <div class="w-56 h-56 lg:w-64 lg:h-64 rounded-full bg-primary-bg flex items-end justify-center overflow-hidden">
            <IllustImage src="/images/illust/rajan_suit.png" class="h-5/6 w-auto" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. 運営会社 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'सञ्चालक', ja: '運営会社' }" class="mb-8" />
        <InfoTable :rows="operatorRows" class="max-w-3xl" />
      </div>
    </section>
  </main>
</template>
