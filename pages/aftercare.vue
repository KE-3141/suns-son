<script setup lang="ts">
useHead({ title: "アフターケア・サポート | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社は登録支援機関として、特定技能ビザの取得から就労後の生活相談・継続学習まで一貫してサポート。外国人採用に必要な手続きを全て代行します。",
})

const { supportItems, company } = useSiteContent()

const licenseRows = [
  { label: '登録支援機関番号', value: company.licenseSupportOrg },
]

const consistentFlow = [
  { title: '教育', description: 'UKARU Academyで日本語・特定技能を学ぶ' },
  { title: '紹介', description: '同じ会社が就職先を仲介する' },
  { title: 'サポート', description: '就労後も同じ会社が寄り添い続ける' },
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      illust="/images/illust/care_worker.svg"
      :parent="{ to: '/business/', label: '事業内容' }"
      title="アフターケアとサポート"
      description="採用して終わりにしない。ビザ取得から生活相談・継続学習まで、企業様と就労者の双方に寄り添い続けます。"
    />

    <!-- ===== 2. 登録支援機関とは ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading class="mb-8">
          「外国人を雇いたいが、手続きが複雑で…」<br class="hidden md:inline" />その悩みを丸ごと引き受けます
        </SectionHeading>

        <p class="text-text text-base leading-relaxed mb-6">
          特定技能外国人を受け入れる企業には、法律上さまざまな支援義務が課されています。ビザの手続き、住居の確保、生活相談窓口の設置、定期面談の実施。これらを自社だけで対応しようとすると、担当者への負担は相当なものになります。
        </p>
        <p class="text-text text-base leading-relaxed mb-10">
          <strong class="font-bold">登録支援機関</strong>とは、これらの支援業務を企業に代わって行うことが国に認められた機関です。Sun's Sonは登録支援機関として、特定技能生の受け入れに必要な対応を全て代行します。企業様は本来の業務に集中しながら、外国人材の採用・定着を実現できます。
        </p>

        <InfoTable :rows="licenseRows" />
      </div>
    </section>

    <!-- ===== 3. サポート内容一覧 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6">
        <SectionHeading title="就労前から就労後まで、全てお任せください" class="mb-10" />

        <!-- 就労前 → 就労後 → 継続学習 の時間順 -->
        <ol class="grid grid-cols-1 md:grid-cols-3 gap-10">
          <li
            v-for="phase in supportItems"
            :key="phase.phase"
            class="border-2 border-primary rounded-2xl p-6"
          >
            <div class="h-32 mb-5 rounded-xl bg-primary-bg flex items-center justify-center">
              <IllustImage :src="phase.illust" class="h-24 w-auto" />
            </div>
            <h3 class="text-lg md:text-xl font-bold text-primary-deep mb-4">{{ phase.phase }}</h3>
            <CheckList :items="phase.items" />
          </li>
        </ol>
      </div>
    </section>

    <!-- ===== 4. Sun's Son ならではの強み ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="「ずっと知っている人」がサポートする安心感" class="mb-8" />
        <p class="text-text text-base leading-relaxed mb-6">
          他の登録支援機関との大きな違いは、Sun's Sonが<strong class="font-bold">教育・紹介・サポートを一貫して担っている</strong>点です。
        </p>
        <p class="text-text text-base leading-relaxed mb-10">
          就労者にとっては、学校で教わった講師、就職を仲介してくれた担当者、そして就労後に相談できる窓口が全て同じ会社です。見知らぬ機関に突然サポートを引き継がれるのではなく、<strong class="font-bold">最初からの信頼関係の上でサポートを受けられる</strong>。これが定着率の向上につながります。
        </p>

        <FlowSteps :steps="consistentFlow" goal-last />
      </div>
    </section>

    <!-- ===== 5. 対応ビザ ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="対応ビザ" class="mb-10" />
        <dl class="border-t border-rule">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-2 py-6 border-b border-rule">
            <dt class="text-lg font-bold leading-snug text-text">
              特定技能ビザ
              <TagBadge variant="primary" class="ml-2 align-middle">メイン対応</TagBadge>
            </dt>
            <dd class="md:col-span-2 text-text text-base leading-relaxed">
              特定技能1号・2号の取得手続きを全て代行します。Sun's Sonが自ら教育した人材をご紹介するため、試験対策・スキル習得の状況を把握した上で申請に臨めます。書類準備から出入国在留管理局への申請・更新まで一貫対応。
            </dd>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-2 py-6 border-b border-rule">
            <dt class="text-lg font-bold leading-snug text-text">技術・人文知識・国際業務ビザ</dt>
            <dd class="md:col-span-2 text-text text-base leading-relaxed">
              エンジニア・事務・通訳など、専門的な知識や技術を活かして働く方向けのビザです。取得手続きの代行・必要書類の準備をサポートします。
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===== 6. 関連ページへの誘導 ===== -->
    <RelatedLinks
      lead="サポートする人材の背景について"
      :links="[
        { to: '/education/', label: 'どんな教育を受けた人材か見る' },
        { to: '/placement/', label: '人材紹介サービスを見る' },
      ]"
    />

    <!-- ===== 7. CTA ===== -->
    <CtaSection />
  </main>
</template>
