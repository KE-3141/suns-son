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
      illust="/images/illust/rajan_fist_pump.png"
      title="実績紹介"
      description="採用して終わりにしない。教育から就労・サポートまで一貫して関わった人材の、リアルなストーリーをご紹介します。"
    />

    <!-- ===== 2. メッセージ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="数より、深さを。" class="mb-8" />
        <p class="text-text text-base leading-relaxed mb-6">
          私たちは採用支援会社として、紹介した人数を誇るよりも、<strong class="font-bold">ひとりひとりの就労後の姿を語れること</strong>を誇りにしています。
        </p>
        <p class="text-text text-base leading-relaxed">
          教育から就労・サポートまで一貫して関わったすべての人材が、今も現場に立っています。彼らの学習状況・得意なこと・職場での様子まで、Sun's Sonでは紹介した人材について担当者が全て把握しています。それが、私たちが「定着率に自信がある」と言える理由です。
        </p>
      </div>
    </section>

    <!-- ===== 3. 企業事例 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="受入企業の事例" class="mb-10" />

        <article
          v-for="study in caseStudies"
          :key="study.key"
          class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4 py-8 border-b border-rule first:pt-0"
        >
          <SubHeading class="self-start">{{ study.industry }}</SubHeading>

          <div class="md:col-span-2">
            <!-- 課題 → 解決 → 現在 -->
            <dl class="border-t border-rule">
              <div class="grid grid-cols-4 gap-3 py-3 border-b border-rule">
                <dt class="text-sm font-bold text-muted">課題</dt>
                <dd class="col-span-3 text-text text-base leading-relaxed">{{ study.challenge }}</dd>
              </div>
              <div class="grid grid-cols-4 gap-3 py-3 border-b border-rule">
                <dt class="text-sm font-bold text-muted">解決</dt>
                <dd class="col-span-3 text-text text-base leading-relaxed">{{ study.solution }}</dd>
              </div>
              <div class="grid grid-cols-4 gap-3 py-3">
                <dt class="text-sm font-bold text-primary-deep">現在</dt>
                <dd class="col-span-3 text-primary-deep text-base font-bold">{{ study.result }}</dd>
              </div>
            </dl>

            <!-- 担当者コメント -->
            <figure v-if="study.comment" class="mt-4 border-l-2 border-primary-light pl-4">
              <blockquote class="text-text text-base leading-relaxed">
                「{{ study.comment }}」
              </blockquote>
              <figcaption class="text-muted text-sm mt-2">{{ study.commentAuthor }}</figcaption>
            </figure>
          </div>
        </article>
      </div>
    </section>

    <!-- ===== 4. 就労者プロフィール ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="現場で働く人たちのストーリー" class="mb-6" />
        <p class="text-text text-base leading-relaxed mb-10">
          彼らはUKARU Academyで学び、独自の会話面接を経て、今の職場に就きました。
        </p>

        <ul class="border-t border-rule">
          <li
            v-for="worker in workers"
            :key="worker.key"
            class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-3 py-6 border-b border-rule"
          >
            <div class="flex items-start gap-4">
              <img
                v-if="worker.imageSrc"
                :src="worker.imageSrc"
                :alt="worker.name"
                class="w-16 h-16 object-cover flex-shrink-0"
                loading="lazy"
              />
              <div>
                <p class="font-bold text-text text-lg">{{ worker.name }}</p>
                <p class="text-muted text-sm">{{ worker.industry }}・{{ worker.role }}</p>
                <p class="text-muted text-sm"><span class="font-num">{{ worker.startedAt }}</span>から就労中</p>
              </div>
            </div>
            <p v-if="worker.comment" class="md:col-span-2 text-text text-base leading-relaxed">
              「{{ worker.comment }}」
            </p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===== 5. 差別化メッセージ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="紹介した後も、一人ひとりの顔が見えています" class="mb-8" />
        <p class="text-text text-base leading-relaxed mb-8">
          他の紹介会社との大きな違いは、Sun's Sonが<strong class="font-bold">教育から就労・サポートまで一貫して同じチームが関わっている</strong>点です。紹介した後に別の機関へ引き継がれるのではなく、ずっと「知っている人」がそばにいる。それが定着率の高さに直結しています。
        </p>
        <CheckList :items="involvementItems" />
      </div>
    </section>

    <!-- ===== 6. 関連ページへの誘導 ===== -->
    <RelatedLinks
      lead="この品質を支える仕組みについて"
      :links="[
        { to: '/education/', label: '教育の取り組みをくわしく見る' },
        { to: '/placement/', label: '人材紹介サービスを見る' },
      ]"
    />

    <!-- ===== 7. CTA ===== -->
    <CtaSection />
  </main>
</template>
