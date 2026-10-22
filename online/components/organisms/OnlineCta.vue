<script setup lang="ts">
/**
 * UKARU ONLINE のページ末尾の申し込み欄。全ページの最下部に置く。
 * 申し込み・質問は Facebook のメッセージで受け付ける。右に代表（ラジャン）のイラスト。
 */
const { ukaruOnline } = useSiteContent()
</script>

<template>
  <section class="py-16 md:py-20 bg-primary-bg border-t border-rule">
    <div class="max-w-6xl mx-auto px-6 md:grid md:grid-cols-12 md:gap-10 md:items-center">
      <div class="md:col-span-9">
        <h2 class="text-2xl md:text-3xl font-bold leading-snug text-text mb-4">
          <BilingualText tag="span" :text="ukaruOnline.applyHeading" class="block" />
        </h2>
        <BilingualText :text="ukaruOnline.applyText" class="text-base md:text-lg leading-relaxed text-text max-w-2xl mb-8" />
        <OnlineApplyButton size="lg" :note="false" />
      </div>
      <div class="hidden md:flex md:col-span-3 justify-center">
        <IllustImage src="/images/illust/rajan_thumbs_up.png" class="h-64 w-auto" />
      </div>
    </div>
  </section>
</template>
