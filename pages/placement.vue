<script setup lang="ts">
useHead({ title: "人材紹介 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の人材紹介サービス。介護・農業など特定技能分野に対応。独自の会話面接で日本語実力を確認済みのネパール人人材を、完全成功報酬でご紹介します。",
})

const placementImageUrl = usePublicUrl('/images/placement.png')

const { referralFlows } = useSiteContent()

const placementFeatures = [
  '求人条件（資格・日本語力・職種など）の詳細ヒアリング',
  '条件に合致し、御社に興味のある候補者を厳選してご提示',
  'JLPTに加え独自の会話面接で日本語実力を確認済みの人材のみ紹介',
  '選考テスト（日本語力など）の代行（要相談）',
  '採用決定から就労開始までの手続きサポート',
  '採用が決まるまで費用は一切かかりません（完全成功報酬）',
]

const qualityPoints = [
  {
    title: 'JLPTだけに頼らない独自選考',
    description:
      'JLPTは読む・聞く力の試験であり、書く・話す力は問われません。弊社では筆記資格に加え、担当者との会話面接を実施。実際の職場で通用するコミュニケーション能力を確認した上でご紹介します。',
  },
  {
    title: '教育から紹介まで一貫管理',
    description:
      'UKARU Academyでの日本語・特定技能教育を経た人材をご紹介します。入校から紹介まで弊社が一貫して関わるため、候補者の学習状況・性格・意欲を深く把握した上でマッチングできます。',
  },
  {
    title: '社会マナー・労働倫理まで指導済み',
    description:
      '日本での就労経験を持つ講師が、言語だけでなく職場マナーや労働倫理も指導しています。「挨拶ができない」「遅刻が多い」といった定着トラブルを未然に防ぎます。',
  },
]

const industries = [
  {
    key: 'care',
    label: '介護',
    status: 'strong',
    statusLabel: '専門教育あり',
    description:
      '介護福祉士の専門講師が特定技能「介護」分野の授業を担当。実務に直結したカリキュラムで、即戦力となる介護人材を育成・輩出しています。',
  },
  {
    key: 'agriculture',
    label: '農業',
    status: 'track',
    statusLabel: '紹介実績あり',
    description:
      'ネパールは農業従事者の割合が高く、土や自然に慣れ親しんだ人材が豊富です。農業分野への就労を希望する候補者も多く、農業系企業様への紹介実績があります。',
  },
  {
    key: 'construction',
    label: '建築',
    status: 'growing',
    statusLabel: '希望者増加中',
    description:
      '建築分野を希望する生徒が増えています。ご興味のある企業様はぜひお気軽にご相談ください。',
  },
]

const statusStyles: Record<string, string> = {
  strong: 'bg-primary-400 text-white',
  track: 'bg-secondary-300 text-neutral-700',
  growing: 'bg-neutral-100 text-neutral-500',
}
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      label="Placement"
      title="人材紹介"
      description="「話せる」と証明された人材だけをご紹介します。求人条件のヒアリングから就労後サポートまで一貫対応。"
    />

    <!-- ===== 2. サービス概要 ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <SectionHeading label="Our Service" align="left" class="mb-8">
              求める人材を、確かな品質でご紹介
            </SectionHeading>
            <p class="text-neutral-600 text-base leading-relaxed mb-8">
              Sun's Sonの人材紹介は、教育から一貫して関わってきた候補者だけをご紹介します。JLPT等級だけでなく独自の会話面接で日本語実力を確認し、社会マナー・労働倫理の指導まで済んだ状態でお届けします。
            </p>
            <CheckList :items="placementFeatures" />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-[0_4px_8px_rgba(41,171,226,0.12)]">
            <img
              :src="placementImageUrl"
              alt="人材紹介サービスのイメージ"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. 品質を支える3つのポイント ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Quality" class="mb-14">
          「人の役に立てる人材」を輩出する3つの取り組み
        </SectionHeading>
        <dl class="space-y-8">
          <div
            v-for="(point, index) in qualityPoints"
            :key="point.title"
            class="bg-white rounded-2xl p-8 md:p-10 flex gap-6 items-start"
          >
            <div class="w-10 h-10 rounded-full bg-primary-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span class="text-primary-400 font-black text-sm">{{ String(index + 1).padStart(2, '0') }}</span>
            </div>
            <div>
              <dt class="font-black text-neutral-800 text-lg mb-3">{{ point.title }}</dt>
              <dd class="text-neutral-600 text-sm leading-relaxed">{{ point.description }}</dd>
            </div>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===== 4. 対応職種 ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Industries" class="mb-14">
          対応職種・分野
        </SectionHeading>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="industry in industries"
            :key="industry.key"
            class="bg-[#eaf6fd] rounded-2xl p-8 flex flex-col gap-4"
          >
            <div class="flex items-center justify-between gap-3">
              <h3 class="font-black text-neutral-800 text-xl">{{ industry.label }}</h3>
              <span
                class="text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap"
                :class="statusStyles[industry.status]"
              >
                {{ industry.statusLabel }}
              </span>
            </div>
            <p class="text-neutral-600 text-sm leading-relaxed">{{ industry.description }}</p>
          </div>
        </div>
        <p class="text-neutral-400 text-xs mt-6 text-center">
          上記以外の分野についてもお気軽にご相談ください。
        </p>
      </div>
    </section>

    <!-- ===== 5. 完全成功報酬 ===== -->
    <section class="py-16 md:py-20 bg-primary-400 text-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Fee Structure</p>
        <h2 class="text-2xl md:text-3xl font-black mb-4">
          採用が決まるまで、費用は一切かかりません
        </h2>
        <p class="text-white/80 text-base leading-relaxed max-w-xl mx-auto">
          弊社の人材紹介は完全成功報酬制です。求人条件のヒアリングから候補者のご提示・選考サポートまで、採用決定前の費用はいただきません。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>

    <!-- ===== 6. 紹介までの流れ ===== -->
    <StepsSection
      label="Deal Flow"
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 8. 教育ページへの誘導 ===== -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-neutral-500 text-sm mb-2">紹介する人材の教育背景について</p>
        <h2 class="text-xl md:text-2xl font-black text-neutral-800 mb-6">
          どんな教育を受けた人材なのか、詳しく見る
        </h2>
        <SlideLink
          to="/education/"
          class="inline-flex items-center text-primary-400 font-semibold hover:text-primary-600 transition-colors"
        >
          教育の取り組みをくわしく見る
        </SlideLink>
      </div>
    </section>

    <!-- ===== 9. CTA ===== -->
    <CtaSection />
  </main>
</template>
