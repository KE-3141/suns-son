<script setup lang="ts">
useHead({ title: 'कक्षा र समय तालिका | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE のクラスと時間割。JLPT N5〜N1・BJT・介護福祉士・特定技能（宿泊・建設）のクラスを、仕事のあとの夜を中心に行っています。',
})

const { ukaruOnline } = useSiteContent()
const { schedule } = ukaruOnline
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'कक्षा र समय तालिका', ja: 'クラスと時間割' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/classroom.svg"
    >
      <template #description>
        <BilingualText :text="ukaruOnline.coursesLead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
    </PageHero>

    <!-- ===== 1. クラス（教科） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'कक्षाहरू', ja: 'クラス' }" class="mb-10" />
        <PointList :items="ukaruOnline.courses" />
      </div>
    </section>

    <!-- ===== 2. 時間割 ===== -->
    <section id="schedule" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: `समय तालिका (${schedule.month.ne})`, ja: `時間割（${schedule.month.ja}）` }" class="mb-6" />
        <BilingualText :text="schedule.closed" class="text-base leading-relaxed max-w-3xl mb-12" />

        <div class="space-y-12">
          <div v-for="group in schedule.groups" :key="group.title.ja">
            <SubHeading class="mb-4">
              <BilingualText tag="span" :text="group.title" />
            </SubHeading>
            <ScheduleTable :classes="group.classes" />
          </div>
        </div>

        <BilingualText :text="schedule.changes" class="text-sm leading-relaxed max-w-3xl mt-10" />
      </div>
    </section>

    <!-- ===== 3. 授業のしくみ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'कक्षा कसरी हुन्छ', ja: '授業のしくみ' }" class="mb-10" />
        <PointList :items="ukaruOnline.classStyle" />
      </div>
    </section>
  </main>
</template>
