<script setup lang="ts">
useHead({ title: "企業理念 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "ネパール出身・日本育ちの代表が、日本語だけでなく倫理観・社会通念まで教え「人の役に立てる人材」を輩出する。Sun's Son株式会社の企業理念と創業の想いをご紹介します。",
})

const { company } = useSiteContent()
const rajanUrl = usePublicUrl('/images/rajan.svg')
const logoUrl = usePublicUrl('/images/simple_logo.svg')
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <section class="bg-[#eaf6fd] py-20 md:py-28">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <p class="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Our Philosophy
        </p>
        <h1 class="text-3xl md:text-4xl font-black text-neutral-800">
          企業理念
        </h1>
      </div>
    </section>

    <!-- ===== 2. 理念 ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-3xl mx-auto px-6">
        <p class="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-center">
          Mission
        </p>
        <h2 class="text-2xl md:text-3xl font-black text-neutral-800 text-center leading-snug mb-10">
          「教育」×「紹介」×「サポート」で<br class="hidden md:inline" />日本をもっと元気に。
        </h2>
        <p class="text-neutral-600 text-base md:text-lg leading-relaxed">
          {{ company.philosophy }}
        </p>
      </div>
    </section>

    <!-- ===== 3. 企業様への3つの約束 ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our Promises" class="mb-14">
          企業様への3つの約束
        </SectionHeading>

        <dl class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center px-4">
            <div
              class="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-5"
            >
              <span class="text-primary-400 font-black text-xl">01</span>
            </div>
            <dt class="font-bold text-neutral-800 mb-3">話せる人材だけをご紹介</dt>
            <dd class="text-neutral-500 text-sm leading-relaxed">
              JLPTの等級だけに頼らず、独自の会話面接で実際のコミュニケーション能力を確認。「聞いていたより話せない」をなくします。
            </dd>
          </div>

          <div class="text-center px-4">
            <div
              class="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-5"
            >
              <span class="text-primary-400 font-black text-xl">02</span>
            </div>
            <dt class="font-bold text-neutral-800 mb-3">受け入れ手続きをまるごと代行</dt>
            <dd class="text-neutral-500 text-sm leading-relaxed">
              登録支援機関として、海外からの呼び寄せに必要な手続きを全て対応。企業様の負担を最小限に抑えます。
            </dd>
          </div>

          <div class="text-center px-4">
            <div
              class="w-14 h-14 rounded-full bg-white flex items-center justify-center mx-auto mb-5"
            >
              <span class="text-primary-400 font-black text-xl">03</span>
            </div>
            <dt class="font-bold text-neutral-800 mb-3">採用後も寄り添い続ける</dt>
            <dd class="text-neutral-500 text-sm leading-relaxed">
              就労後の生活相談・行政手続き・継続学習まで支援。住居はシェアハウスで確保し、定着率を高めます。
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ===== 4. 社名・ロゴの由来 ===== -->
    <section class="py-20 md:py-28 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <SectionHeading label="Our Origin" class="mb-14">
          社名とロゴに込めた意味
        </SectionHeading>

        <!-- 父のレストラン → スーリヤ -->
        <div class="mb-16">
          <h3 class="text-xl font-black text-neutral-800 mb-4">
            父のレストラン「スーリヤ」から始まった
          </h3>
          <p class="text-neutral-600 text-sm leading-relaxed mb-4">
            代表ラジャンの父は、インド料理レストラン「Surya（スーリヤ）」の経営者です。スーリヤとはヒンドゥー神話に登場する太陽神の名前。闇を払い、知識と生命を地上にもたらす存在として、古くからインド・ネパールの文化に根ざした神格です。
          </p>
          <p class="text-neutral-600 text-sm leading-relaxed">
            Sun's Sonという社名は、そのまま「太陽神の息子」を意味します。ラジャン自身が父への敬意と、「光を受け継ぎ、次の世代へ届ける」という想いを込めて名付けました。
          </p>
        </div>

        <!-- カルナの神話 + ロゴ -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start mb-12">
          <div class="rounded-2xl p-8 flex flex-col items-center justify-center">
            <img
              :src="logoUrl"
              alt="Sun's Son株式会社 ロゴ"
              class="w-48 md:w-56 h-auto"
              loading="lazy"
            />
          </div>
          <div>
            <h3 class="text-xl font-black text-neutral-800 mb-4">
              ロゴが「耳」である理由<br class="hidden md:inline" />——インド神話の英雄・カルナ
            </h3>
            <p class="text-neutral-600 text-sm leading-relaxed mb-4">
              ヒンドゥー叙事詩『マハーバーラタ』に、カルナ（Karna）という英雄が登場します。彼はまさに太陽神スーリヤの息子。そして、その名前「karṇa」はサンスクリット語で「耳」を意味します。
            </p>
            <p class="text-neutral-600 text-sm leading-relaxed mb-4">
              カルナは生まれながらに、父スーリヤから二つの神的な贈り物を授かっていました。ひとつは不死身の鎧、そしてもうひとつが黄金の耳輪（クンダラ）です。この耳輪こそが「スーリヤの息子」であることの証であり、彼が「耳輪の者」「耳の人」と呼ばれた所以です。
            </p>
            <p class="text-neutral-600 text-sm leading-relaxed">
              太陽神の息子がその名に「耳」を宿し、生まれながらの耳輪で神性を示す——Sun's Sonのロゴはこのカルナの象徴に着想を得ており、「太陽の子として受け継いだ光を、確かに届ける」という意志を耳の形に込めています。
            </p>
          </div>
        </div>

        <!-- カルナのエピソード -->
        <div class="border-l-4 border-primary-400 pl-6 md:pl-8">
          <h4 class="font-bold text-neutral-800 mb-3">
            名声は命より大切だ——カルナが教える施しの精神
          </h4>
          <p class="text-neutral-600 text-sm leading-relaxed mb-4">
            カルナには有名な逸話があります。神々の王インドラが老人に変装し、カルナの不死の源である耳輪と鎧を「施し」として求めました。父スーリヤは夢の中で「奪われるぞ」と息子に警告しました。それでもカルナは答えます。
          </p>
          <blockquote class="text-neutral-700 text-sm italic leading-relaxed mb-4 pl-4 border-l-2 border-neutral-300">
            「名声は命より大切だ。施しを拒むくらいなら、不死を手放す方を選ぶ。」
          </blockquote>
          <p class="text-neutral-600 text-sm leading-relaxed">
            カルナは自ら耳輪と鎧を切り取り、血に染まったまま差し出しました。神の子でありながら、人間的な誠実さと寛大さを命より優先した。Sun's Sonが「人の役に立てる人材を輩出する」という理念を掲げる背景には、こうした精神が脈々と流れています。
          </p>
        </div>
      </div>
    </section>

    <!-- ===== 5. 代表者紹介 ===== -->
    <section class="py-20 md:py-28 bg-[#eaf6fd]">
      <div class="max-w-5xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <!-- イラスト -->
          <div class="flex justify-center">
            <img
              :src="rajanUrl"
              alt="代表取締役 バンダーリ ラジャン"
              class="h-72 md:h-96 w-auto drop-shadow-lg"
              loading="lazy"
            />
          </div>

          <!-- テキスト -->
          <div>
            <p class="text-primary-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">
              Founder &amp; CEO
            </p>
            <h2 class="text-2xl md:text-3xl font-black text-neutral-800 mb-1">
              バンダーリ ラジャン
            </h2>
            <p class="text-neutral-500 text-sm mb-8">Bhandari Rajan</p>

            <dl class="space-y-4 text-sm">
              <div class="flex gap-3">
                <dt class="text-neutral-400 whitespace-nowrap w-28 shrink-0">出身・育ち</dt>
                <dd class="text-neutral-700">ネパール出身・日本育ち（10歳前後以前から日本在住）</dd>
              </div>
              <div class="flex gap-3">
                <dt class="text-neutral-400 whitespace-nowrap w-28 shrink-0">日本語力</dt>
                <dd class="text-neutral-700">完全ネイティブレベル</dd>
              </div>
              <div class="flex gap-3">
                <dt class="text-neutral-400 whitespace-nowrap w-28 shrink-0">TikTok</dt>
                <dd class="text-neutral-700">
                  @_rajan_bhandari_（フォロワー6.8万人・在日ネパール人の約32%）
                </dd>
              </div>
              <div class="flex gap-3">
                <dt class="text-neutral-400 whitespace-nowrap w-28 shrink-0">運営</dt>
                <dd class="text-neutral-700">UKARU Academy（日本語・特定技能教育）代表</dd>
              </div>
            </dl>

            <blockquote class="mt-10 border-l-4 border-primary-400 pl-5">
              <p class="text-neutral-600 text-sm leading-relaxed italic">
                「カレーより先に納豆が好きになりました。ネパール人でもあり、日本人でもある。その両方の視点があるからこそ、企業と人材の橋渡しができると信じています。」
              </p>
              <footer class="mt-3 text-xs text-neutral-400">— バンダーリ ラジャン</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== 6. CTA ===== -->
    <CtaSection />
  </main>
</template>
