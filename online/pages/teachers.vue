<script setup lang="ts">
useHead({ title: 'शिक्षकबारे | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE の先生について。日本で育ったネパール人の先生と日本人の先生のチームで、ネパール語で説明しながら教えます。',
})

const { ukaruOnline } = useSiteContent()
const { teachers, about } = ukaruOnline
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'शिक्षकबारे', ja: '教師について' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/rajan_uniform.png"
    >
      <template #description>
        <BilingualText :text="teachers.lead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
    </PageHero>

    <!-- ===== 1. 先生のチーム ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'शिक्षकको टिम', ja: '先生のチーム' }" class="mb-10" />
        <PointList :items="teachers.team" />
      </div>
    </section>

    <!-- ===== 2. 教え方 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="{ ne: 'पढाउने तरिका', ja: '教え方' }" class="mb-10" />
        <PointList :items="teachers.teaching" />
      </div>
    </section>

    <!-- ===== 3. 代表 ===== -->
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
          <AppButton to="/about/" variant="secondary" class="mt-8">
            <span lang="ne">UKARU बारे</span>
          </AppButton>
        </div>
        <!-- 代表が歩いてきて立ち止まる（コーポレートのトップと同じ動き。見えたときに1回） -->
        <div class="md:col-span-4 mt-10 md:mt-0 flex justify-center">
          <RajanWalk :alt="`UKARU 代表 ${about.leader.name.ja}`" class="h-64 md:h-80" />
        </div>
      </div>
    </section>
  </main>
</template>
