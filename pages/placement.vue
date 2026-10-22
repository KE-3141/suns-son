<script setup lang="ts">
useHead({ title: "人材紹介 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の人材紹介サービス。介護・農業など特定技能分野に対応。独自の会話面接で日本語実力を確認済みのネパール人人材を、完全成功報酬でご紹介します。",
})

const placementImageUrl = usePublicUrl('/images/placement.png')

const { referralFlows, company } = useSiteContent()

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
    illust: '/images/illust/care_wheelchair.svg',
    status: 'strong',
    statusLabel: '専門教育あり',
    description:
      '介護福祉士の専門講師が特定技能「介護」分野の授業を担当。実務に直結したカリキュラムで、即戦力となる介護人材を育成・輩出しています。',
  },
  {
    key: 'food-service',
    label: '外食業',
    illust: '/images/illust/chef.svg',
    status: 'strong',
    statusLabel: '希望者多数',
    description:
      '外食分野への就労を希望する生徒が多数在籍しています。人手不足が深刻な飲食業界に、意欲の高いネパール人人材をご紹介します。',
  },
  {
    key: 'accommodation',
    label: '宿泊',
    illust: '/images/illust/bellboy.svg',
    status: 'track',
    statusLabel: '英語対応可',
    description:
      'ネパールでは義務教育から英語で学ぶカリキュラムが主流です。英語を問題なく使える人材が多く、外国人ゲストの対応が求められる宿泊業に強みを発揮します。',
  },
  {
    key: 'agriculture',
    label: '農業',
    illust: '/images/illust/farm_stall.svg',
    status: 'track',
    statusLabel: '紹介実績あり',
    description:
      'ネパールは農業従事者の割合が高く、土や自然に慣れ親しんだ人材が豊富です。農業系企業様への紹介実績があります。',
  },
  {
    key: 'logistics',
    label: '物流・倉庫',
    illust: '/images/illust/delivery.svg',
    status: 'preparing',
    statusLabel: '2027年対応準備中',
    description:
      '倉庫・物流は2027年から特定技能の対象業種に追加される予定です。いち早く対応できるよう人材の育成・確保を進めています。制度開始に合わせてご紹介が可能になります。',
  },
  {
    key: 'construction',
    label: '建設',
    illust: '/images/illust/construction_worker.svg',
    status: 'growing',
    statusLabel: '希望者増加中',
    description:
      '体力と規律に自信を持つネパール人退役軍人の生徒が複数在籍しており、建設分野への就労を強く希望しています。厳しい訓練で培った体力・精神力・チームワークは、現場での即戦力として期待できます。',
  },
]

type BadgeVariant = 'primary' | 'soft' | 'outline' | 'line'

const statusVariants: Record<string, BadgeVariant> = {
  strong: 'primary',
  track: 'outline',
  growing: 'line',
  preparing: 'soft',
}

const licenseRows = [
  { label: '有料職業紹介事業許可番号', value: company.license },
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      illust="/images/illust/traveler.svg"
      :parent="{ to: '/business/', label: '事業内容' }"
      title="人材紹介"
      description="「話せる」と証明された人材だけをご紹介します。求人条件のヒアリングから就労後サポートまで一貫対応。"
    />

    <!-- ===== 2. サービス概要 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="求める人材を、確かな品質でご紹介" class="mb-10" />
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <p class="text-text text-base leading-relaxed mb-8">
              Sun's Sonの人材紹介は、教育から一貫して関わってきた候補者だけをご紹介します。JLPT等級だけでなく独自の会話面接で日本語実力を確認し、社会マナー・労働倫理の指導まで済んだ状態でお届けします。
            </p>
            <CheckList :items="placementFeatures" />
          </div>
          <div class="border border-rule">
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
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="「人の役に立てる人材」を輩出する3つの取り組み" class="mb-8" />
        <PointList :items="qualityPoints" />
      </div>
    </section>

    <!-- ===== 4. 対応職種 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="対応職種・分野" class="mb-10" />
        <table class="w-full text-left border-t-2 border-primary">
          <caption class="sr-only">対応職種と現在の状況</caption>
          <thead class="hidden md:table-header-group">
            <tr class="border-b border-rule text-sm text-muted">
              <th scope="col" class="py-3 pr-6 font-normal w-56">分野</th>
              <th scope="col" class="py-3 pr-6 font-normal w-48">現在の状況</th>
              <th scope="col" class="py-3 font-normal">内容</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="industry in industries"
              :key="industry.key"
              class="flex flex-col gap-2 py-5 border-b border-rule md:table-row"
            >
              <th scope="row" class="text-lg font-bold text-text md:py-5 md:pr-6 md:align-top">
                <span class="flex items-center gap-3">
                  <span class="flex-shrink-0 w-20 h-20 rounded-full bg-primary-bg flex items-center justify-center">
                    <IllustImage :src="industry.illust" class="h-16 w-16" />
                  </span>
                  {{ industry.label }}
                </span>
              </th>
              <td class="md:py-5 md:pr-6 md:align-top">
                <TagBadge :variant="statusVariants[industry.status]">
                  {{ industry.statusLabel }}
                </TagBadge>
              </td>
              <td class="text-base leading-relaxed text-text md:py-5 md:align-top">
                {{ industry.description }}
              </td>
            </tr>
          </tbody>
        </table>
        <p class="text-muted text-sm mt-6">
          上記以外の分野についてもお気軽にご相談ください。
        </p>
      </div>
    </section>

    <!-- ===== 5. 完全成功報酬 ===== -->
    <section class="py-16 md:py-20 bg-primary">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="採用が決まるまで、費用は一切かかりません" inverse class="mb-6" />
        <p class="text-white text-base leading-relaxed">
          弊社の人材紹介は完全成功報酬制です。求人条件のヒアリングから候補者のご提示・選考サポートまで、採用決定前の費用はいただきません。まずはお気軽にご相談ください。
        </p>
      </div>
    </section>

    <!-- ===== 6. 許可番号 ===== -->
    <section class="py-10 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <InfoTable :rows="licenseRows" />
      </div>
    </section>

    <!-- ===== 7. 紹介までの流れ ===== -->
    <StepsSection
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 8. 教育ページへの誘導 ===== -->
    <RelatedLinks
      lead="紹介する人材の教育背景について"
      :links="[{ to: '/education/', label: 'どんな教育を受けた人材なのか、くわしく見る' }]"
    />

    <!-- ===== 9. CTA ===== -->
    <CtaSection />
  </main>
</template>
