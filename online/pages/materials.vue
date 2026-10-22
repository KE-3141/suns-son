<script setup lang="ts">
useHead({ title: 'पाठ्यसामग्री | UKARU ONLINE' })
useSeoMeta({
  description:
    'UKARU ONLINE のオリジナル教材。JLPT の主教材（文法など）・漢字教材・単語教材は課ごとにまとまり、ネパール語で書かれています。教材の特長を図で紹介し、N5 第1課の中身を見られます。',
})

const { ukaruOnline } = useSiteContent()
const { jlptMaterials, materialFeatures } = ukaruOnline

/** 中を見ている教材の key（閉じているときは空） */
const openKey = ref('')
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

    <!-- ===== 教材の特長（左に文・右に図） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="materialFeatures.title" class="mb-6" />
        <BilingualText :text="materialFeatures.lead" class="text-base md:text-lg leading-relaxed max-w-3xl mb-12" />

        <div class="border-t border-rule">
          <article
            v-for="feature in materialFeatures.items"
            :key="feature.key"
            class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-10 md:py-14 border-b border-rule"
          >
            <div :class="feature.key === 'improve' ? 'md:col-span-12 max-w-3xl' : 'md:col-span-5 md:sticky md:top-28 md:self-start'">
              <TagBadge v-if="feature.key === 'nepali'" variant="primary" class="mb-4">
                <span lang="ne">{{ materialFeatures.mainLabel.ne }}</span>
              </TagBadge>
              <BilingualText tag="h3" :text="feature.title" class="text-xl md:text-2xl font-bold leading-snug text-text mb-4" />
              <BilingualText :text="feature.description" class="text-base leading-relaxed" />
            </div>

            <!-- 図：単語教材の1語（どこがネパール語か） -->
            <figure v-if="feature.key === 'nepali' && feature.sample && feature.labels" class="md:col-span-7 border border-rule">
              <div class="flex items-end gap-4 px-6 py-5 border-b border-rule">
                <span class="text-5xl font-bold leading-loose text-text"><RubyText :text="`${feature.sample.word}[${feature.sample.reading}]`" /></span>
                <TagBadge variant="outline" class="mb-3">{{ feature.sample.part }}</TagBadge>
              </div>
              <dl class="divide-y divide-rule">
                <div class="grid grid-cols-12 gap-4 px-6 py-4">
                  <dt class="col-span-5"><BilingualText :text="feature.labels.ne" class="text-sm font-bold text-primary-deep" /></dt>
                  <dd lang="ne" class="col-span-7 text-2xl font-bold text-text">{{ feature.sample.ne }}</dd>
                </div>
                <div class="grid grid-cols-12 gap-4 px-6 py-4">
                  <dt class="col-span-5"><BilingualText :text="feature.labels.en" class="text-sm font-bold text-primary-deep" /></dt>
                  <dd class="col-span-7 text-base text-text">{{ feature.sample.en }}</dd>
                </div>
                <div class="grid grid-cols-12 gap-4 px-6 py-4">
                  <dt class="col-span-5"><BilingualText :text="feature.labels.example" class="text-sm font-bold text-primary-deep" /></dt>
                  <dd class="col-span-7 text-base leading-loose text-text"><RubyText :text="feature.sample.example" /></dd>
                </div>
                <div class="grid grid-cols-12 gap-4 px-6 py-4 bg-primary-bg">
                  <dt class="col-span-5"><BilingualText :text="feature.labels.note" class="text-sm font-bold text-primary-deep" /></dt>
                  <dd lang="ne" class="col-span-7 text-base text-text">{{ feature.sample.note }}</dd>
                </div>
              </dl>
              <figcaption class="px-6 py-3 border-t border-rule text-xs text-muted">शब्द पाठ्यसामग्री N5 पाठ १ / 単語教材 N5 第1課より</figcaption>
            </figure>

            <!-- 図：第1課にそろう3つの教材 -->
            <figure v-if="feature.key === 'lesson' && feature.parts && feature.lessonTitle" class="md:col-span-7">
              <BilingualText :text="feature.lessonTitle" class="text-lg font-bold text-text mb-4" />
              <ExamParts :parts="feature.parts" />
            </figure>

            <!-- 図：主教材の1つの課の進み方 -->
            <figure v-if="feature.key === 'flow' && feature.steps" class="md:col-span-7">
              <FlowSteps :steps="feature.steps" />
            </figure>

            <!-- 図：その課の漢字（青・ふりがなあり）→ 学んだ漢字（水色・ふりがななし） -->
            <figure v-if="feature.key === 'furigana' && feature.examples" class="md:col-span-7 flex flex-col sm:flex-row items-stretch gap-3">
              <template v-for="(example, index) in feature.examples" :key="index">
                <div v-if="index > 0" class="flex items-center justify-center text-2xl font-bold text-primary" aria-hidden="true">
                  <span class="hidden sm:inline">→</span><span class="sm:hidden">↓</span>
                </div>
                <div class="flex-1 border-2 border-primary rounded-2xl px-6 py-6 text-center">
                  <p :class="['text-5xl font-bold leading-loose', example.learned ? 'text-primary' : 'text-primary-deep']">
                    <RubyText v-if="!example.learned" :text="`${example.word}[${example.reading}]`" />
                    <template v-else>{{ example.word }}</template>
                  </p>
                  <BilingualText :text="example.label" class="text-sm font-bold text-text mt-3" />
                </div>
              </template>
            </figure>
          </article>
        </div>
      </div>
    </section>

    <!-- ===== JLPT の教材（N5 第1課の中を見せる） ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading :title="jlptMaterials.title" class="mb-6" />
        <BilingualText :text="jlptMaterials.lead" class="text-base md:text-lg leading-relaxed max-w-3xl mb-8" />
        <CommentBubble :name="jlptMaterials.previewName" face-src="/images/illust/face_rajan.svg" tone="primary" class="max-w-3xl mb-10">
          <BilingualText :text="jlptMaterials.previewComment" class="font-bold" />
        </CommentBubble>
        <ul class="border-t border-rule">
          <li
            v-for="item in jlptMaterials.items"
            :key="item.key"
            class="flex flex-col md:flex-row gap-6 md:gap-10 py-8 border-b border-rule"
          >
            <button
              type="button"
              class="flex-shrink-0 w-40 md:w-48 border border-rule bg-white cursor-pointer transition-colors duration-150 hover:border-primary"
              :aria-label="`${item.title.ja}の中を見る`"
              @click="openKey = item.key"
            >
              <img :src="usePublicUrl(item.pages[item.cover])" alt="" class="w-full h-auto" loading="lazy" />
            </button>
            <div class="flex-1 min-w-0">
              <TagBadge variant="soft" class="mb-3"><span lang="ne">{{ jlptMaterials.sampleLabel.ne }}</span></TagBadge>
              <BilingualText tag="h3" :text="item.title" class="text-xl md:text-2xl font-bold leading-snug text-text mb-3" />
              <BilingualText :text="item.description" class="text-base leading-relaxed max-w-3xl mb-6" />
              <AppButton variant="secondary" size="sm" @click="openKey = item.key">
                <span lang="ne">{{ jlptMaterials.openLabel.ne }}</span>
              </AppButton>
            </div>
            <DocumentViewer
              :open="openKey === item.key"
              @update:open="openKey = $event ? item.key : ''"
              :title="item.title"
              :label="`${jlptMaterials.sampleLabel.ne} / ${jlptMaterials.sampleLabel.ja}`"
              :pages="item.pages"
            />
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
