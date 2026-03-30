<script setup lang="ts">
useHead({ title: "アフターケア・サポート | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社は登録支援機関として、特定技能ビザの取得から就労後の生活相談・継続学習まで一貫してサポート。外国人採用に必要な手続きを全て代行します。",
})

const { supportItems } = useSiteContent()
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero
      label="Aftercare & Support"
      title="アフターケアとサポート"
      description="採用して終わりにしない。ビザ取得から生活相談・継続学習まで、企業様と就労者の双方に寄り添い続けます。"
    />

    <!-- ===== 2. 登録支援機関とは ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Registered Support Organization" class="mb-10">
          「外国人を雇いたいが、手続きが複雑で…」<br class="hidden md:inline" />その悩みを丸ごと引き受けます
        </SectionHeading>

        <p class="text-neutral-600 text-base leading-relaxed mb-6">
          特定技能外国人を受け入れる企業には、法律上さまざまな支援義務が課されています。ビザの手続き、住居の確保、生活相談窓口の設置、定期面談の実施——これらを自社だけで対応しようとすると、担当者への負担は相当なものになります。
        </p>
        <p class="text-neutral-600 text-base leading-relaxed mb-10">
          <strong class="text-neutral-800">登録支援機関</strong>とは、これらの支援業務を企業に代わって行うことが国に認められた機関です。Sun's Sonは登録支援機関として、特定技能生の受け入れに必要な対応を全て代行します。企業様は本来の業務に集中しながら、外国人材の採用・定着を実現できます。
        </p>

        <!-- 登録番号 -->
        <div class="bg-[#eaf6fd] rounded-2xl px-8 py-6 inline-flex items-center gap-4">
          <svg class="w-6 h-6 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          <div>
            <p class="text-xs text-neutral-500 mb-0.5">有料職業紹介事業許可番号</p>
            <p class="font-bold text-neutral-800">13-ユ-317607</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 3. サポート内容一覧 ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Support Contents" class="mb-14">
          就労前から就労後まで、全てお任せください
        </SectionHeading>

        <div class="space-y-6">
          <div
            v-for="phase in supportItems"
            :key="phase.phase"
            class="bg-white rounded-2xl p-8 md:p-10"
          >
            <div class="flex items-center gap-3 mb-6">
              <span class="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase">
                {{ phase.label }}
              </span>
              <div class="h-px flex-1 bg-neutral-100" />
              <h3 class="font-black text-neutral-800 text-lg">{{ phase.phase }}</h3>
            </div>
            <CheckList :items="phase.items" />
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 4. Sun's Son ならではの強み ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our Difference" class="mb-10">
          「ずっと知っている人」がサポートする安心感
        </SectionHeading>
        <p class="text-neutral-600 text-base leading-relaxed mb-8">
          他の登録支援機関との大きな違いは、Sun's Sonが<strong class="text-neutral-800">教育・紹介・サポートを一貫して担っている</strong>点です。
        </p>
        <p class="text-neutral-600 text-base leading-relaxed mb-10">
          就労者にとっては、学校で教わった講師、就職を仲介してくれた担当者、そして就労後に相談できる窓口が全て同じ会社です。見知らぬ機関に突然サポートを引き継がれるのではなく、<strong class="text-neutral-800">最初からの信頼関係の上でサポートを受けられる</strong>。これが定着率の向上につながります。
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-[#eaf6fd] rounded-2xl p-6 text-center">
            <p class="text-primary-400 font-black text-base mb-2">教育</p>
            <p class="text-neutral-500 text-xs leading-relaxed">UKARU Academyで<br>日本語・特定技能を学ぶ</p>
          </div>
          <div class="flex items-center justify-center text-neutral-300 text-2xl font-light hidden md:flex">→</div>
          <div class="bg-[#eaf6fd] rounded-2xl p-6 text-center md:hidden">
            <div class="text-neutral-300 text-xl mb-2">↓</div>
          </div>
          <div class="bg-[#eaf6fd] rounded-2xl p-6 text-center">
            <p class="text-primary-400 font-black text-base mb-2">紹介</p>
            <p class="text-neutral-500 text-xs leading-relaxed">同じ会社が<br>就職先を仲介する</p>
          </div>
          <div class="flex items-center justify-center text-neutral-300 text-2xl font-light hidden md:flex">→</div>
          <div class="bg-[#eaf6fd] rounded-2xl p-6 text-center md:hidden">
            <div class="text-neutral-300 text-xl mb-2">↓</div>
          </div>
          <div class="bg-primary-400 rounded-2xl p-6 text-center">
            <p class="text-white font-black text-base mb-2">サポート</p>
            <p class="text-white/80 text-xs leading-relaxed">就労後も同じ会社が<br>寄り添い続ける</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 5. 対応ビザ ===== -->
    <section class="py-16 md:py-20 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Visa Support" class="mb-10">
          対応ビザ
        </SectionHeading>
        <div class="bg-white rounded-2xl p-8 md:p-10">
          <div class="flex items-start gap-4 mb-6">
            <div class="w-10 h-10 rounded-full bg-primary-400/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
              </svg>
            </div>
            <div>
              <h3 class="font-black text-neutral-800 text-lg mb-2">特定技能ビザ（メイン対応）</h3>
              <p class="text-neutral-600 text-sm leading-relaxed">
                特定技能1号・2号の取得手続きを全て代行します。申請書類の準備から出入国在留管理局への申請、更新手続きまで対応。企業様・就労者様双方の負担を最小限に抑えます。
              </p>
            </div>
          </div>
          <p class="text-neutral-500 text-sm">
            その他のビザについてはお問い合わせください。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== 6. 関連ページへの誘導 ===== -->
    <section class="py-16 md:py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <p class="text-neutral-500 text-sm mb-6">サポートする人材の背景について</p>
        <div class="flex flex-col sm:flex-row gap-6 justify-center">
          <SlideLink
            to="/education/"
            class="inline-flex items-center text-primary-400 font-semibold hover:text-primary-600 transition-colors"
          >
            どんな教育を受けた人材か見る
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
