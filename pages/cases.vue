<script setup lang="ts">
useHead({ title: "実績紹介 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社が教育から就労・サポートまで一貫して関わった人材のリアルなストーリーをご紹介します。宿泊業・農業など、現場で活躍するネパール人人材の事例。",
})

const { caseStudies, workers } = useSiteContent()

const involvementItems = [
  '入学時の面接・学習状況・性格の把握',
  '就職先企業との求人条件のすり合わせ',
  '採用決定後の手続き・入国サポート',
  '就労後の定期面談・生活相談窓口の提供',
  'ビザ更新・在留資格変更の手続き代行',
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      label="Cases"
      title="実績紹介"
      description="採用して終わりにしない。教育から就労・サポートまで一貫して関わった人材の、リアルなストーリーをご紹介します。"
    />

    <!-- ===== 2. メッセージ ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our Promise" class="mb-10">
          数より、深さを。
        </SectionHeading>
        <p class="text-neutral-600 text-base leading-relaxed mb-6">
          私たちは採用支援会社として、紹介した人数を誇るよりも、<strong class="text-neutral-800">ひとりひとりの就労後の姿を語れること</strong>を誇りにしています。
        </p>
        <p class="text-neutral-600 text-base leading-relaxed">
          教育から就労・サポートまで一貫して関わったすべての人材が、今も現場に立っています。彼らの学習状況・得意なこと・職場での様子——Sun's Sonでは、紹介した人材について担当者が全て把握しています。それが、私たちが「定着率に自信がある」と言える理由です。
        </p>
      </div>
    </section>

    <!-- ===== 3. 企業事例 ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Client Stories" class="mb-14">
          受入企業の事例
        </SectionHeading>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="study in caseStudies"
            :key="study.key"
            class="bg-white rounded-2xl p-8 md:p-10 flex flex-col gap-6"
          >
            <!-- 業種バッジ -->
            <div class="flex items-center gap-3">
              <span class="text-xs font-semibold tracking-[0.15em] uppercase text-primary-400">
                {{ study.industryEn }}
              </span>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary-400/10 text-primary-400">
                {{ study.industry }}
              </span>
            </div>

            <!-- 課題 → 解決 → 現在 -->
            <dl class="space-y-4">
              <div>
                <dt class="text-xs font-semibold text-neutral-400 mb-1">課題</dt>
                <dd class="text-neutral-700 text-sm leading-relaxed">{{ study.challenge }}</dd>
              </div>
              <div class="w-full h-px bg-neutral-100" />
              <div>
                <dt class="text-xs font-semibold text-neutral-400 mb-1">解決</dt>
                <dd class="text-neutral-700 text-sm leading-relaxed">{{ study.solution }}</dd>
              </div>
              <div class="w-full h-px bg-neutral-100" />
              <div>
                <dt class="text-xs font-semibold text-neutral-400 mb-1">現在</dt>
                <dd class="text-neutral-800 text-sm font-semibold">{{ study.result }}</dd>
              </div>
            </dl>

            <!-- 担当者コメント -->
            <div class="mt-auto pt-2">
              <template v-if="study.comment">
                <blockquote class="border-l-2 border-primary-400 pl-4 text-neutral-600 text-sm leading-relaxed italic">
                  「{{ study.comment }}」
                </blockquote>
                <p class="text-neutral-400 text-xs mt-2">— {{ study.commentAuthor }}</p>
              </template>
              <template v-else>
                <p class="text-neutral-300 text-xs italic">（担当者のコメントは準備中です）</p>
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 4. 就労者プロフィール ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our People" class="mb-6">
          現場で働く人たちのストーリー
        </SectionHeading>
        <p class="text-neutral-600 text-base leading-relaxed mb-14">
          彼らはUKARU Academyで学び、独自の会話面接を経て、今の職場に就きました。
        </p>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div
            v-for="worker in workers"
            :key="worker.key"
            class="bg-[#eaf6fd] rounded-2xl p-6 flex flex-col items-center text-center gap-4"
          >
            <!-- 顔写真 or プレースホルダー -->
            <div class="w-20 h-20 rounded-full overflow-hidden bg-secondary-200 flex items-center justify-center flex-shrink-0">
              <img
                v-if="worker.imageSrc"
                :src="worker.imageSrc"
                :alt="worker.name"
                class="w-full h-full object-cover"
                loading="lazy"
              />
              <svg
                v-else
                class="w-10 h-10 text-secondary-400"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </div>

            <div class="flex flex-col gap-1">
              <p class="font-black text-neutral-800 text-base">{{ worker.name }}</p>
              <p class="text-neutral-500 text-xs">{{ worker.role }}・{{ worker.industry }}</p>
              <p class="text-neutral-400 text-xs">{{ worker.startedAt }}〜</p>
            </div>

            <!-- 就労中バッジ -->
            <span class="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">
              就労中
            </span>

            <!-- コメント -->
            <template v-if="worker.comment">
              <p class="text-neutral-600 text-xs leading-relaxed italic">「{{ worker.comment }}」</p>
            </template>
            <template v-else>
              <p class="text-neutral-300 text-xs italic">（コメント準備中）</p>
            </template>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 5. 差別化メッセージ ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our Difference" class="mb-10">
          紹介した後も、一人ひとりの顔が見えています
        </SectionHeading>
        <p class="text-neutral-600 text-base leading-relaxed mb-10">
          他の紹介会社との大きな違いは、Sun's Sonが<strong class="text-neutral-800">教育から就労・サポートまで一貫して同じチームが関わっている</strong>点です。紹介した後に別の機関へ引き継がれるのではなく、ずっと「知っている人」がそばにいる。それが定着率の高さに直結しています。
        </p>
        <CheckList :items="involvementItems" />
      </div>
    </section>

    <!-- ===== 6. 関連ページへの誘導 ===== -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-neutral-500 text-sm mb-6">この品質を支える仕組みについて</p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <SlideLink
            to="/education/"
            class="inline-flex items-center text-primary-400 font-semibold hover:text-primary-600 transition-colors"
          >
            教育の取り組みをくわしく見る
          </SlideLink>
          <SlideLink
            to="/placement/"
            class="inline-flex items-center text-primary-400 font-semibold hover:text-primary-600 transition-colors"
          >
            人材紹介サービスを見る
          </SlideLink>
        </div>
      </div>
    </section>

    <!-- ===== 7. CTA ===== -->
    <CtaSection />
  </main>
</template>
