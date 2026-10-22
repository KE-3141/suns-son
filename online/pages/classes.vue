<script setup lang="ts">
useHead({ title: 'कक्षाहरू | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE のクラス。JLPT N5〜N1・BJT・介護福祉士・特定技能（宿泊・建設）の試験の形・合格率・勉強時間の目安・クラスでやることを、図とネパール語・日本語で説明します。',
})

const { ukaruOnline } = useSiteContent()

/** 折りたたみの中の小見出し */
const headings = {
  exam: { ne: 'कस्तो परीक्षा', ja: 'どんな試験' },
  facts: { ne: 'अंकमा हेर्दा', ja: '数字で見る' },
  route: { ne: 'योग्यतासम्मको बाटो', ja: '資格までの流れ' },
  ukaru: { ne: 'UKARU को कक्षा', ja: 'UKARU のクラス' },
}

/** クラスでやること・学ぶといいことの2行 */
const classPoints = (course: (typeof ukaruOnline.courses)[number]) => [
  { title: { ne: 'कक्षामा के गर्छौं', ja: 'クラスでやること' }, description: course.study },
  { title: { ne: 'पढ्दा के फाइदा', ja: '学ぶといいこと' }, description: course.merit },
]
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'कक्षाहरू', ja: 'クラス' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/classroom.svg"
    >
      <template #description>
        <BilingualText :text="ukaruOnline.coursesLead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
    </PageHero>

    <!-- ===== クラスごとの説明（折りたたみ） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="border-t border-rule">
          <AccordionItem
            v-for="course in ukaruOnline.courses"
            :id="course.key"
            :key="course.key"
            :title="course.title"
            :description="course.description"
            :illust="course.illust"
          >
            <div class="space-y-12 md:pl-26">
              <div>
                <SubHeading class="mb-4"><BilingualText tag="span" :text="headings.exam" /></SubHeading>
                <BilingualText :text="course.exam" class="text-base leading-relaxed max-w-3xl mb-6" />
                <ExamParts v-if="course.parts" :parts="course.parts" :note="course.partsNote" class="max-w-4xl" />
              </div>

              <div>
                <SubHeading class="mb-4"><BilingualText tag="span" :text="headings.facts" /></SubHeading>
                <StatRow :stats="course.facts.stats" :note="course.facts.note" class="max-w-3xl" />
                <BilingualText :text="course.facts.text" class="text-sm leading-relaxed max-w-3xl mt-4" />
                <BarList
                  v-if="course.bars"
                  :title="course.bars.title"
                  :bars="course.bars.bars"
                  :note="course.bars.note"
                  class="max-w-3xl mt-8"
                />
              </div>

              <div v-if="course.route">
                <SubHeading class="mb-4"><BilingualText tag="span" :text="headings.route" /></SubHeading>
                <FlowSteps :steps="course.route" class="max-w-4xl" />
              </div>

              <div>
                <SubHeading class="mb-4"><BilingualText tag="span" :text="headings.ukaru" /></SubHeading>
                <PointList :items="classPoints(course)" />
              </div>
            </div>
          </AccordionItem>
        </div>
      </div>
    </section>

    <!-- ===== 授業のしくみ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'कक्षा कसरी हुन्छ', ja: '授業のしくみ' }" class="mb-10" />
        <PointList :items="ukaruOnline.classStyle" />
      </div>
    </section>

    <!-- ===== 出典 ===== -->
    <section class="pb-16 md:pb-20 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="max-w-3xl border-t border-rule pt-6 text-xs text-muted leading-relaxed">
          <p class="font-bold mb-2">स्रोत / 出典（2026年10月23日 調べ）</p>
          <ul class="space-y-1">
            <li v-for="source in ukaruOnline.courseSources" :key="source.href">
              <a :href="source.href" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary-deep">{{ source.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>
