<script setup lang="ts">
useHead({ title: 'कइगो फुकुशिशी | UKARU ONLINE' })
useSeoMeta({
  description:
    '介護福祉士国家試験（第39回・2027年1月31日）の受験資格・試験の形式・外国人の合格率と、UKARU ONLINE の介護福祉士クラスについて、ネパール語と日本語で説明します。',
})

const { ukaruOnline } = useSiteContent()
const { kaigo } = ukaruOnline

const timelineRows = kaigo.timeline.map(row => ({ label: row.when, value: row.what }))
const kaigoClasses = ukaruOnline.schedule.groups.find(group => group.title.ja === '介護福祉士')?.classes ?? []
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'कइगो फुकुशिशी', ja: '介護福祉士' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/care_worker.svg"
    >
      <template #description>
        <BilingualText :text="kaigo.lead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
    </PageHero>

    <!-- ===== 1. 介護福祉士になると ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'कइगो फुकुशिशी बन्दाका फाइदा', ja: '介護福祉士になると' }" class="mb-10" />
        <PointList :items="kaigo.merits" />
      </div>
    </section>

    <!-- ===== 2. 受験資格と試験の日程 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'परीक्षा दिन पाउने योग्यता र तालिका', ja: '受験資格と日程' }" class="mb-6" />
        <BilingualText :text="kaigo.route" class="text-base md:text-lg leading-relaxed max-w-3xl mb-12" />

        <SubHeading class="mb-4">
          <BilingualText tag="span" :text="kaigo.nextExam.label" />
        </SubHeading>
        <InfoTable :rows="timelineRows" class="max-w-4xl" />
      </div>
    </section>

    <!-- ===== 3. 試験の形式 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'परीक्षाको ढाँचा', ja: '試験の形式' }" class="mb-10" />

        <div class="overflow-x-auto mb-12">
          <table class="w-full min-w-xl border-t-2 border-primary text-sm md:text-base">
            <thead>
              <tr class="border-b border-rule text-left">
                <th scope="col" class="py-3 pr-4 font-bold">
                  <span lang="ne">भाग</span><span lang="ja" class="block text-xs font-normal text-muted">パート</span>
                </th>
                <th scope="col" class="py-3 pr-4 font-bold">
                  <span lang="ne">समय</span><span lang="ja" class="block text-xs font-normal text-muted">時間（通常）</span>
                </th>
                <th scope="col" class="py-3 pr-4 font-bold">
                  <span lang="ne">प्रश्न</span><span lang="ja" class="block text-xs font-normal text-muted">問題数</span>
                </th>
                <th scope="col" class="py-3 font-bold">
                  <span lang="ne">विषय</span><span lang="ja" class="block text-xs font-normal text-muted">科目</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="part in kaigo.parts" :key="part.part" class="border-b border-rule align-top">
                <th scope="row" class="py-4 pr-4 text-left font-num text-2xl font-bold text-primary">{{ part.part }}</th>
                <td class="py-4 pr-4 whitespace-nowrap"><BilingualText tag="span" :text="part.time" /></td>
                <td class="py-4 pr-4 font-num font-bold whitespace-nowrap">{{ part.questions }}</td>
                <td class="py-4 leading-relaxed">{{ part.subjects }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <PointList :items="kaigo.examPoints" />
      </div>
    </section>

    <!-- ===== 4. 外国人の合格率 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'विदेशीको पास दर', ja: '外国人の合格率' }" class="mb-10" />
        <StatRow :stats="kaigo.passRate.stats" :note="kaigo.passRate.note" class="max-w-3xl mb-10" />
        <BilingualText :text="kaigo.passRate.text" class="text-base md:text-lg leading-relaxed max-w-3xl" />
      </div>
    </section>

    <!-- ===== 5. UKARU の介護福祉士クラス ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'UKARU को कइगो फुकुशिशी कक्षा', ja: 'UKARU の介護福祉士クラス' }" class="mb-10" />
        <PointList :items="kaigo.ukaru" class="mb-12" />

        <SubHeading class="mb-4">
          <BilingualText tag="span" :text="{ ne: `समय तालिका (${ukaruOnline.schedule.month.ne})`, ja: `時間割（${ukaruOnline.schedule.month.ja}）` }" />
        </SubHeading>
        <ScheduleTable :classes="kaigoClasses" />
        <AppButton to="/materials/" variant="secondary" class="mt-8">
          <span lang="ne">पाठ्यसामग्रीको नमूना</span>
        </AppButton>
      </div>
    </section>

    <!-- ===== 出典 ===== -->
    <section class="pb-16 md:pb-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-3xl border-t border-rule pt-6 text-xs text-muted leading-relaxed">
          <p class="font-bold mb-2">स्रोत / 出典（2026年10月13日 調べ）</p>
          <ul class="space-y-1">
            <li v-for="source in kaigo.sources" :key="source.href">
              <a :href="source.href" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary-deep">{{ source.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
