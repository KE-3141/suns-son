<script setup lang="ts">
useHead({ title: 'पाठ्यसामग्री | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE のオリジナル教材。介護福祉士の教科書・単語集・模擬問題、特定技能（宿泊・建設）の教科書を、ネパール人の学習者にわかりやすく作っています。',
})

const { ukaruOnline } = useSiteContent()
</script>

<template>
  <main>
    <PageHero
      :title="{ ne: 'हाम्रो आफ्नै पाठ्यसामग्री', ja: 'オリジナル教材' }"
      home-label="UKARU ONLINE"
      illust="/images/illust/books.svg"
    >
      <template #description>
        <BilingualText :text="ukaruOnline.materialsLead" class="text-base md:text-lg leading-relaxed text-text" />
      </template>
    </PageHero>

    <!-- ===== 教材の一覧（左）と見本（右） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          <div class="lg:col-span-7">
            <SectionHeading :title="{ ne: 'पाठ्यसामग्रीहरू', ja: '教材の種類' }" class="mb-10" />
            <PointList :items="ukaruOnline.materials" />
          </div>

          <!-- 教材の見本：教材データの文をそのまま、ふりがなつきで見せる -->
          <aside class="lg:col-span-5 border border-rule p-6 md:p-8">
            <SubHeading class="mb-6">
              <BilingualText tag="span" :text="{ ne: 'पाठ्यसामग्रीको नमूना', ja: '教材の見本' }" />
            </SubHeading>

            <p class="text-sm font-bold text-muted mb-3">教科書の会話（介護）</p>
            <dl class="space-y-4 mb-8">
              <div v-for="line in ukaruOnline.sample.conversation" :key="line.speaker">
                <dt class="text-sm font-bold text-primary-deep">{{ line.speaker }}</dt>
                <dd class="text-base leading-loose mt-1">
                  <RubyText :text="line.text" />
                </dd>
              </div>
            </dl>

            <p class="text-sm font-bold text-muted mb-3">単語集</p>
            <ul class="border-t border-rule">
              <li
                v-for="word in ukaruOnline.sample.words"
                :key="word.word"
                class="py-4 border-b border-rule"
              >
                <div class="flex items-center gap-3 mb-1">
                  <span class="text-2xl font-bold leading-loose"><RubyText :text="word.word" /></span>
                  <TagBadge variant="soft">{{ word.subject }}</TagBadge>
                </div>
                <p lang="ne" class="font-bold text-text">{{ word.meaning }}</p>
                <p class="text-sm leading-loose text-text mt-1"><RubyText :text="word.example" /></p>
                <p v-if="word.exampleNe" lang="ne" class="text-sm text-muted">{{ word.exampleNe }}</p>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  </main>
</template>
