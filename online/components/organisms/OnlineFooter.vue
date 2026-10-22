<script setup lang="ts">
/**
 * UKARU ONLINE のサイトのフッター。ロゴ・ナビ・Facebook と、運営会社の表記。
 */
const logoUrl = usePublicUrl('/images/ukaru/ukaru_logo_inline.svg')
const { company, siteUrls, ukaruOnline } = useSiteContent()
</script>

<template>
  <footer class="border-t border-rule bg-white">
    <div class="max-w-6xl mx-auto px-6 py-12 md:py-14">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <NuxtLink to="/" class="inline-block mb-4">
            <img :src="logoUrl" alt="UKARU ONLINE" class="h-9 w-auto" loading="lazy" />
          </NuxtLink>
          <BilingualText :text="ukaruOnline.hero.name" class="text-sm leading-relaxed text-text" />
        </div>
        <ul class="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
          <li v-for="item in ukaruOnline.nav" :key="item.to">
            <NuxtLink :to="item.to" class="block py-1.5 text-text hover:text-primary-deep hover:underline">
              <span lang="ne" class="font-bold">{{ item.label.ne }}</span>
              <span lang="ja" class="text-xs text-muted ml-2">{{ item.label.ja }}</span>
            </NuxtLink>
          </li>
          <li>
            <a
              :href="ukaruOnline.facebookUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-1.5 font-bold text-text hover:text-primary-deep hover:underline"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
      <div class="border-t border-rule pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted">
        <p>
          <span lang="ne">सञ्चालक</span> / 運営：
          <a :href="`${siteUrls.corporate}/`" class="underline hover:text-primary-deep">{{ company.name }}</a>
          <span class="mx-2" aria-hidden="true">|</span>
          <a :href="`${siteUrls.corporate}/privacy/`" class="hover:text-primary-deep hover:underline">プライバシーポリシー</a>
        </p>
        <p class="font-num">© {{ new Date().getFullYear() }} UKARU ONLINE</p>
      </div>
    </div>
  </footer>
</template>
