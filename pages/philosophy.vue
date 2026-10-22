<script setup lang="ts">
useHead({ title: "企業理念 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "ネパール出身・日本育ちの代表が、日本語だけでなく倫理観・社会通念まで教え「人の役に立てる人材」を輩出する。Sun's Son株式会社の企業理念と創業の想いをご紹介します。",
})

const { company, promises } = useSiteContent()
const rajanUrl = usePublicUrl('/images/rajan.svg')
const rajanFaceUrl = usePublicUrl('/images/rajan-face.svg')
const logoUrl = usePublicUrl('/images/simple_logo.svg')

const profileRows = [
  { label: '出身・育ち', value: 'ネパール出身・日本育ち（10歳前後以前から日本在住）' },
  { label: '日本語力', value: '完全ネイティブレベル' },
  { label: 'TikTok', value: '@_rajan_bhandari_（フォロワー6.8万人・在日ネパール人の約32%）' },
  { label: '運営', value: 'UKARU Academy（日本語・特定技能教育）代表' },
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero illust="/images/illust/rajan_offering.png" title="企業理念">
      <!-- 差し出した両手の上に、ロゴの耳を浮かべる -->
      <template #illust>
        <img :src="logoUrl" alt="" class="absolute left-1/12 bottom-2/3 h-10 lg:h-12 w-auto" fetchpriority="high" loading="eager" />
      </template>
    </PageHero>

    <!-- ===== 2. 理念 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading class="mb-8">
          「教育」×「紹介」×「サポート」で<br class="hidden md:inline" />日本をもっと元気に。
        </SectionHeading>
        <p class="text-text text-base md:text-lg leading-relaxed">
          {{ company.philosophy }}
        </p>
      </div>
    </section>

    <!-- ===== 3. 企業様への3つの約束 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="企業様への3つの約束" class="mb-8" />
        <PointList :items="promises" />
      </div>
    </section>

    <!-- ===== 4. 社名・ロゴの由来 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="社名とロゴに込めた意味" class="mb-10" />

        <!-- 父のレストラン → スーリヤ -->
        <div class="mb-14">
          <SubHeading class="mb-4">父のレストラン「スーリヤ」から始まった</SubHeading>
          <p class="text-text text-base leading-relaxed mb-4">
            代表ラジャンの父は、インド料理レストラン「Surya（スーリヤ）」の経営者です。スーリヤとはヒンドゥー神話に登場する太陽神の名前。闇を払い、知識と生命を地上にもたらす存在として、古くからインド・ネパールの文化に根ざした神格です。
          </p>
          <p class="text-text text-base leading-relaxed">
            Sun's Sonという社名は、そのまま「太陽神の息子」を意味します。ラジャン自身が父への敬意と、「光を受け継ぎ、次の世代へ届ける」という想いを込めて名付けました。
          </p>
        </div>

        <!-- カルナの神話 + ロゴ -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start mb-14">
          <div class="flex items-center justify-center md:self-stretch">
            <img
              :src="logoUrl"
              :alt="`${company.name} ロゴ`"
              class="w-40 h-auto"
              loading="lazy"
            />
          </div>
          <div class="md:col-span-2">
            <SubHeading class="mb-4">ロゴが「耳」である理由：インド神話の英雄カルナ</SubHeading>
            <p class="text-text text-base leading-relaxed mb-4">
              ヒンドゥー叙事詩『マハーバーラタ』に、カルナ（Karna）という英雄が登場します。彼はまさに太陽神スーリヤの息子。そして、その名前「karṇa」はサンスクリット語で「耳」を意味します。
            </p>
            <p class="text-text text-base leading-relaxed mb-4">
              カルナは生まれながらに、父スーリヤから二つの神的な贈り物を授かっていました。ひとつは不死身の鎧、そしてもうひとつが黄金の耳輪（クンダラ）です。この耳輪こそが「スーリヤの息子」であることの証であり、彼が「耳輪の者」「耳の人」と呼ばれた所以です。
            </p>
            <p class="text-text text-base leading-relaxed">
              太陽神の息子がその名に「耳」を宿し、生まれながらの耳輪で神性を示す。Sun's Sonのロゴはこのカルナの象徴に着想を得ており、「太陽の子として受け継いだ光を、確かに届ける」という意志を耳の形に込めています。
            </p>
          </div>
        </div>

        <!-- カルナのエピソード -->
        <div>
          <SubHeading as="h4" class="mb-4">名声は命より大切だ：カルナが教える施しの精神</SubHeading>
          <p class="text-text text-base leading-relaxed mb-4">
            カルナには有名な逸話があります。神々の王インドラが老人に変装し、カルナの不死の源である耳輪と鎧を「施し」として求めました。父スーリヤは夢の中で「奪われるぞ」と息子に警告しました。それでもカルナは答えます。
          </p>
          <blockquote class="border-l-2 border-primary pl-5 my-6 text-text text-lg md:text-xl font-bold leading-relaxed">
            「名声は命より大切だ。施しを拒むくらいなら、不死を手放す方を選ぶ。」
          </blockquote>
          <p class="text-text text-base leading-relaxed">
            カルナは自ら耳輪と鎧を切り取り、血に染まったまま差し出しました。神の子でありながら、人間的な誠実さと寛大さを命より優先した。Sun's Sonが「人の役に立てる人材を輩出する」という理念を掲げる背景には、こうした精神が脈々と流れています。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== 5. 代表者紹介 ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="代表者紹介" class="mb-10" />
        <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          <!-- イラスト -->
          <div class="flex justify-center">
            <img
              :src="rajanUrl"
              :alt="`代表取締役 ${company.ceo}`"
              class="h-72 md:h-80 w-auto"
              loading="lazy"
            />
          </div>

          <!-- テキスト -->
          <div class="md:col-span-2">
            <p class="text-2xl md:text-3xl font-bold text-text">{{ company.ceo }}</p>
            <p class="font-num text-muted text-base mb-6">{{ company.ceoEn }}</p>

            <InfoTable :rows="profileRows" class="mb-10" />

            <SpeechBubble :face-src="rajanFaceUrl" :name="company.ceo">
              カレーより先に納豆が好きになりました。ネパール人でもあり、日本人でもある。その両方の視点があるからこそ、企業と人材の橋渡しができると信じています。
            </SpeechBubble>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 6. CTA ===== -->
    <CtaSection />
  </main>
</template>
