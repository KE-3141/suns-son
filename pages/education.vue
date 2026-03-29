<script setup lang="ts">
useHead({ title: "教育 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の教育事業。TikTok配信・ネパールでの日本語学校運営・オンラインクラスの3つの柱と、ダブル教育体制による高品質な人材育成をご紹介します。",
})

const rajanUrl = usePublicUrl('/images/rajan.svg')
const classImageUrl = usePublicUrl('/images/class.png')
const placementImageUrl = usePublicUrl('/images/placement.png')

const { educationActivities } = useSiteContent()
</script>

<template>
  <main>
    <!-- ===== 1. ヒーロー ===== -->
    <PageHero
      label="Education"
      title="教育"
      description="UKARU Academyが培ったネパール人への教育力が、質の高い人材輩出を支えています。"
    />

    <!-- ===== 2. 3つの教育活動 一覧（SplitListSection） ===== -->
    <SplitListSection
      label="Our Education"
      title="3つの教育活動"
      description="TikTok・日本語学校・オンラインクラスの3つのチャネルで、日本就労を目指すネパール人を育てています。"
      theme="light"
      :items="educationActivities"
    />

    <!-- ===== 3. TikTok ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading label="TikTok" title="TikTokでの日本語学習コンテンツ配信" class="mb-14" />

        <!-- 左右分割：左=rajan+TikTokロゴ、右=説明 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">

          <!-- 左：rajan.svg -->
          <div class="flex flex-col items-center gap-6">
            <img
              :src="rajanUrl"
              alt="代表者イラスト"
              class="h-52 md:h-64 w-auto drop-shadow-lg"
              loading="lazy"
            />
            <SlideLink
              to="https://www.tiktok.com/@_rajan_bhandari_"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2.5 text-neutral-800 font-bold text-base"
              aria-label="TikTok @_rajan_bhandari_ を開く"
            >
              @_rajan_bhandari_の投稿を見てみる
            </SlideLink>
          </div>

          <!-- 右：説明テキスト -->
          <div>
            <p class="text-neutral-600 text-base leading-relaxed mb-6">
              代表バンダーリ ラジャンが運営するTikTokアカウントでは、日本での就労・留学を目指すネパール人に向けたコンテンツをネパール語で発信しています。
            </p>
            <ul class="space-y-3 text-sm text-neutral-700">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                分かりにくい日本語単語の解説
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                日本の文化・マナー紹介
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                自然災害時の情報発信（台風など）
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                日本企業での面接のコツ
              </li>
            </ul>
          </div>
        </div>

        <!-- 数字：横一列 -->
        <div class="max-w-lg mx-auto">
          <StatRow
            :stats="[
              { value: '6.8', unit: '万', label: 'TikTokフォロワー数' },
              { value: '約32', unit: '%', label: '日本在留ネパール人へのリーチ率' },
            ]"
            note="日本在留ネパール人 206,829人（2024年6月時点）"
          />
        </div>
      </div>
    </section>

    <!-- ===== 4. 日本語学校（右：画像、左：説明＋数字） ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading label="School" title="ネパールでの日本語学校運営" class="mb-14" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- 左：説明＋数字 -->
          <div>
            <p class="text-neutral-600 text-base leading-relaxed mb-6">
              UKARU Academyでは、日本での留学・就労を目指すネパール人向けに日本語教育を提供しています。JLPT（日本語能力試験）対策をメインに、会話力強化など実践的な日本語能力の向上を目標としています。
            </p>
            <ul class="space-y-3 text-sm text-neutral-700 mb-8">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                初級から上級レベルまで幅広く対応
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                JLPT対策（N5〜N1）をメインカリキュラムに採用
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                会話力・実践的コミュニケーション力の強化
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                受講生の多くが日本での留学・就労を希望
              </li>
            </ul>
            <StatRow
              :stats="[
                { value: 'N5〜N1', label: '対応JLPTレベル' },
                { value: '増加', unit: '中', label: '入構希望者数' },
              ]"
            />
          </div>

          <!-- 右：画像 -->
          <div class="rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(41,171,226,0.12)]">
            <img
              :src="classImageUrl"
              alt="UKARU Academyの日本語授業風景"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 5. オンラインクラス（左：画像、右：説明＋数字） ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading label="Online Class" title="日本在住ネパール人向けオンラインクラス" class="mb-14" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- 左：画像 -->
          <div class="rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(41,171,226,0.12)] order-2 md:order-1">
            <img
              :src="placementImageUrl"
              alt="オンラインクラスの様子"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- 右：説明＋数字 -->
          <div class="order-1 md:order-2">
            <p class="text-neutral-600 text-base leading-relaxed mb-6">
              日本に在留しているネパール人向けに、オンラインクラスも開講しています。就労しながらでも学べる環境を整え、日本語力・実践的なコミュニケーション能力の底上げをサポートしています。
            </p>
            <ul class="space-y-3 text-sm text-neutral-700 mb-8">
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                日本在留中に就労しながら受講可能
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                初級から上級まで対応
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                JLPT対策・会話力強化を並行してサポート
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-0.5 w-5 h-5 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
                  <span class="text-white text-xs font-bold">✓</span>
                </span>
                入構希望者は今後も増加が見込まれる
              </li>
            </ul>
            <StatRow
              :stats="[
                { value: '100+', unit: '名', label: '現在の受講者数' },
              ]"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 6. ダブル教育体制 ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading label="Our Teachers" title="ダブル教育体制" class="mb-14" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BusinessCard
            label="Japanese Language Teacher"
            title="ネパール人日本語講師"
            image-fit="contain"
            description="全員が10歳前後以前から日本で生活しており、ネイティブレベルの日本語力と日本文化への深い理解を持っています。ネパール語も流暢なため、講義は生徒の母語で実施。難しい内容や細かなニュアンスも正確に伝えられ、「意味を誤解した」「説明が分からなかった」が起こりません。"
            imageSrc="/images/language_teacher.svg"
            imageAlt="ネパール人日本語講師"
            :items="[
              '日本語はネイティブレベル。高度な内容・細かいニュアンスも指導可能',
              'ネパール語で講義を実施。母語での説明で正確な理解を保証',
              '日本での就労経験をもとに社会マナー・労働倫理も指導',
              '日本の職場水準をクリアした人材のみをご紹介',
            ]"
          />
          <BusinessCard
            label="Japanese Specialist Teacher"
            title="日本人専門講師"
            image-fit="contain"
            description="特定技能分野の専門知識を持つ日本人講師が、各分野の実務に直結したカリキュラムで指導します。専門用語や技術的な内容については、ネパール人講師がネパール語による補足解説を行うため、専門知識をしっかりと理解させることができます。"
            imageSrc="/images/expert_teacher.svg"
            imageAlt="日本人専門講師"
            :items="[
              '特定技能各分野の実務に精通した日本人プロフェッショナル',
              '日本人専門講師と日本語講師が連携して授業を実施',
              '専門用語をネパール語で補足解説し、理解の抜け漏れをゼロに',
              '実技・実践に直結した内容で即戦力を育成',
            ]"
          />
        </div>
      </div>
    </section>

    <!-- ===== 7. CTA ===== -->
    <CtaSection />
  </main>
</template>
