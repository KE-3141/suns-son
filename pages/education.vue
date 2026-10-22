<script setup lang="ts">
useHead({ title: "教育 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の教育事業。TikTok配信・ネパールでの日本語学校運営・オンラインクラスの3つの柱と、ダブル教育体制による高品質な人材育成をご紹介します。",
})

const rajanUrl = usePublicUrl('/images/rajan.svg')
const classImageUrl = usePublicUrl('/images/class.png')
const placementImageUrl = usePublicUrl('/images/placement.png')

const languageTeacherUrl = usePublicUrl('/images/language_teacher.svg')
const expertTeacherUrl = usePublicUrl('/images/expert_teacher.svg')

const { company, siteUrls, educationActivities } = useSiteContent()
</script>

<template>
  <main>
    <!-- ===== 1. ヒーロー ===== -->
    <PageHero
      illust="/images/illust/teacher.svg"
      :parents="[{ to: '/business/', label: '事業内容' }]"
      title="教育"
      description="UKARU Academyが培ったネパール人への教育力が、質の高い人材輩出を支えています。"
    />

    <!-- ===== 2. このページの内容（ページ内リンク） ===== -->
    <section class="pt-16 md:pt-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <p class="text-text text-base md:text-lg leading-relaxed max-w-3xl mb-8">
          TikTok・日本語学校・オンラインクラスの3つの場で、日本就労を目指すネパール人を育てています。
        </p>
        <ul class="border-t border-rule">
          <li
            v-for="activity in educationActivities"
            :key="activity.key"
            class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-1 py-4 border-b border-rule"
          >
            <SlideLink :to="`#${activity.key}`" class="text-primary-deep font-bold w-fit">
              {{ activity.title }}
            </SlideLink>
            <p class="md:col-span-2 text-sm leading-relaxed text-muted">{{ activity.shortDescription }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- ===== 3. TikTok ===== -->
    <section id="tiktok" class="py-16 md:py-24 bg-white scroll-mt-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="TikTokでの日本語学習コンテンツ配信" class="mb-10" />

        <!-- 左右分割：左=rajan+TikTokロゴ、右=説明 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-14">

          <!-- 左：rajan.svg -->
          <div class="flex flex-col items-center gap-6">
            <img
              :src="rajanUrl"
              :alt="`代表 ${company.ceo}`"
              class="h-52 md:h-64 w-auto"
              loading="lazy"
            />
            <AppButton
              to="https://www.tiktok.com/@_rajan_bhandari_"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              aria-label="TikTok @_rajan_bhandari_ を開く"
            >
              @_rajan_bhandari_の投稿を見てみる
            </AppButton>
          </div>

          <!-- 右：説明テキスト -->
          <div>
            <p class="text-text text-base leading-relaxed mb-6">
              代表バンダーリ ラジャンが運営するTikTokアカウントでは、日本での就労・留学を目指すネパール人に向けたコンテンツをネパール語で発信しています。
            </p>
            <CheckList :items="[
              '分かりにくい日本語単語の解説',
              '日本の文化・マナー紹介',
              '自然災害時の情報発信（台風など）',
              '日本企業での面接のコツ',
            ]" />
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
    <section id="school" class="py-16 md:py-24 bg-white scroll-mt-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="ネパールでの日本語学校運営" class="mb-10" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- 左：説明＋数字 -->
          <div>
            <p class="text-text text-base leading-relaxed mb-6">
              ネパールの教育法人「UKARU Academy」では、日本での留学・就労を目指すネパール人向けに日本語教育を提供しています。JLPT（日本語能力試験）対策をメインに、会話力強化など実践的な日本語能力の向上を目標としています。
            </p>
            <CheckList class="mb-8" :items="[
              'JLPT対策（N5〜N3）をメインカリキュラムに採用',
              '会話力・実践的コミュニケーション力の強化',
              '受講生の多くが日本での留学・就労を希望',
            ]" />
            <StatRow
              :stats="[
                { value: 'N5〜N3', label: '対応JLPTレベル' },
                { value: '50', unit: '名', label: '現在の受講者数' },
              ]"
            />
          </div>

          <!-- 右：画像 -->
          <div class="border border-rule overflow-hidden">
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

    <!-- ===== 5. オンラインクラス UKARU ONLINE（左：画像、右：説明＋くわしいページへ） ===== -->
    <section id="online" class="py-16 md:py-24 bg-white scroll-mt-20">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="オンラインクラス「UKARU ONLINE」" class="mb-10" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- 左：画像 -->
          <div class="border border-rule overflow-hidden order-2 md:order-1">
            <img
              :src="placementImageUrl"
              alt="オンラインクラスの様子"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- 右：説明＋くわしいページへ -->
          <div class="order-1 md:order-2">
            <p class="text-text text-base leading-relaxed mb-6">
              日本に住むネパール人向けのオンラインクラスです。仕事のあとの夜の時間に、家から受講できます。教科書・単語集・模擬問題はすべて自分たちで作ったオリジナル教材で、ネパール語で説明しながら授業を進めます。
            </p>
            <CheckList class="mb-8" :items="[
              '日本語（JLPT N5〜N1）・ビジネス日本語（BJT）',
              '介護福祉士 国家試験対策',
              '特定技能 宿泊・建設（土木）の試験対策',
            ]" />
            <StatRow
              class="mb-8"
              :stats="[
                { value: '2000+', unit: '名', label: '累計受講者数' },
              ]"
            />
            <AppButton :to="`${siteUrls.online}/`" variant="secondary">
              UKARU ONLINE のクラスと教材を見る
            </AppButton>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 6. ダブル教育体制 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="ダブル教育体制" class="mb-10" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <BusinessCard
            title="ネパール人日本語講師"
            image-fit="contain"
            description="全員が10歳前後以前から日本で生活しており、ネイティブレベルの日本語力と日本文化への深い理解を持っています。ネパール語も流暢なため、講義は生徒の母語で実施。難しい内容や細かなニュアンスも正確に伝えられ、「意味を誤解した」「説明が分からなかった」が起こりません。"
            :image-src="languageTeacherUrl"
            image-alt="ネパール人日本語講師"
            :items="[
              '日本語はネイティブレベル。高度な内容・細かいニュアンスも指導可能',
              'ネパール語で講義を実施。母語での説明で正確な理解を保証',
              '日本での就労経験をもとに社会マナー・労働倫理も指導',
              '日本の職場水準をクリアした人材のみをご紹介',
            ]"
          />
          <BusinessCard
            title="日本人専門講師"
            image-fit="contain"
            description="特定技能分野の専門知識を持つ日本人講師が、各分野の実務に直結したカリキュラムで指導します。専門用語や技術的な内容については、ネパール人講師がネパール語による補足解説を行うため、専門知識をしっかりと理解させることができます。"
            :image-src="expertTeacherUrl"
            image-alt="日本人専門講師"
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
