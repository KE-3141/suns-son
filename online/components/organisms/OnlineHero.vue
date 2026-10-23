<script setup lang="ts">
/**
 * UKARU ONLINE のトップのヒーロー。
 * 左：h1（ネパール語 + 日本語）・説明・ボタン。右：代表（ラジャン）のイラスト。
 * 背景：いろいろな職業のイラストの列が、上下の2列でゆっくり流れる。
 *   下の列は右から左（animate-marquee）、上の列は並びを逆にして左から右（animate-marquee-reverse）。
 * 列は2回並べてつなぎ目なく流す。動きを減らす設定の人には止めたまま見せる。
 * 代表のイラストは動かさない（歩く動きはコーポレートのトップだけ）。
 * 要素は v-reveal で上から順に出す。
 */
const { ukaruOnline } = useSiteContent()
const { leader } = ukaruOnline.about

const jobRows = [
  { key: 'top', jobs: [...ukaruOnline.heroJobs].reverse(), position: 'top-4', motion: 'motion-safe:animate-marquee-reverse', size: 'h-20 md:h-24' },
  { key: 'bottom', jobs: ukaruOnline.heroJobs, position: 'bottom-0', motion: 'motion-safe:animate-marquee', size: 'h-32 md:h-36' },
]
</script>

<template>
  <!-- 上の pt・下の pb は職業の列の高さ。文字は2列の間に置き、代表は下の列の前に立たせる（高さは中身に合わせる。ノートPCの画面の高さに収まるように） -->
  <section class="relative bg-white overflow-hidden pb-36 md:pb-40">
    <!-- 背景：職業のイラストの列（飾りなので読み上げない） -->
    <div
      v-for="row in jobRows"
      :key="row.key"
      v-reveal
      :class="['absolute inset-x-0 pointer-events-none', row.position]"
      aria-hidden="true"
    >
      <div :class="['flex w-max opacity-40', row.motion]">
        <template v-for="copy in 2" :key="copy">
          <IllustImage
            v-for="job in row.jobs"
            :key="`${copy}-${job}`"
            :src="job"
            :class="['w-auto pr-10 md:pr-16', row.size]"
          />
        </template>
      </div>
    </div>

    <div class="relative w-full max-w-6xl mx-auto px-6 pt-28 md:grid md:grid-cols-12 md:gap-10 md:items-end">
      <div class="md:col-span-8">
        <h1 v-reveal="200" class="font-black leading-snug tracking-tight text-text mb-6">
          <span lang="ne" class="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-snug">{{ ukaruOnline.hero.title.ne }}</span>
          <span lang="ja" class="block text-lg md:text-xl font-bold text-primary mt-3">{{ ukaruOnline.hero.title.ja }}</span>
        </h1>

        <BilingualText v-reveal="450" :text="ukaruOnline.hero.name" class="text-base md:text-lg leading-relaxed text-text max-w-xl mb-8" />

        <div v-reveal="650" class="flex flex-col sm:flex-row sm:items-start gap-4">
          <OnlineApplyButton size="lg" />
          <AppButton to="/classes/" size="lg" variant="secondary">
            <span lang="ne">कक्षाहरू</span>
          </AppButton>
        </div>
      </div>

      <div class="md:col-span-4 flex justify-center mt-10 md:mt-0">
        <IllustImage
          v-reveal="850"
          src="/images/illust/rajan_fist_pump.png"
          :alt="`UKARU 代表 ${leader.name.ja}`"
          eager
          class="h-56 md:h-88 lg:h-96 w-auto -mb-28 md:-mb-32"
        />
      </div>
    </div>
  </section>
</template>
