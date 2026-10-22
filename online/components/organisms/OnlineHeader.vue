<script setup lang="ts">
/**
 * UKARU ONLINE のサイトのヘッダー。ロゴ・ナビ・受講の申し込み（Facebook のメッセージ）。
 * ナビの文字はネパール語、下に日本語を小さく添える。
 */
const logoUrl = usePublicUrl('/images/ukaru/ukaru_logo_inline.svg')
const { ukaruOnline } = useSiteContent()

const isMenuOpen = ref(false)

const navLinkClass = 'flex flex-col justify-center px-3 h-16 text-sm font-bold leading-tight text-text whitespace-nowrap border-b-2 border-transparent transition-colors duration-150 hover:text-primary-deep [&.router-link-active]:text-primary-deep [&.router-link-active]:border-primary'
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-b border-rule">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center h-16 gap-4">
        <NuxtLink to="/" class="flex-shrink-0" @click="isMenuOpen = false">
          <img :src="logoUrl" alt="UKARU ONLINE" class="h-8 w-auto" />
        </NuxtLink>

        <!-- デスクトップナビ -->
        <nav class="hidden lg:flex items-center ml-6 flex-1" aria-label="メニュー">
          <NuxtLink v-for="item in ukaruOnline.nav" :key="item.to" :to="item.to" :class="navLinkClass">
            <span lang="ne">{{ item.label.ne }}</span>
            <span lang="ja" class="text-xs font-normal text-muted mt-0.5">{{ item.label.ja }}</span>
          </NuxtLink>
        </nav>

        <div class="hidden sm:block ml-auto lg:ml-0">
          <AppButton
            :href="ukaruOnline.facebookUrl"
            target="_blank"
            rel="noopener noreferrer"
            size="sm"
          >
            <span lang="ne">{{ ukaruOnline.apply.ne }}</span>
          </AppButton>
        </div>

        <button
          class="ml-auto sm:ml-0 p-2 text-text hover:text-primary-deep transition-colors lg:hidden"
          :aria-expanded="isMenuOpen"
          :aria-label="isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'"
          @click="isMenuOpen = !isMenuOpen"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- モバイルメニュー -->
    <nav v-show="isMenuOpen" class="lg:hidden border-t border-rule bg-white" aria-label="メニュー">
      <div class="max-w-6xl mx-auto px-6 py-2">
        <NuxtLink
          v-for="item in ukaruOnline.nav"
          :key="item.to"
          :to="item.to"
          class="block py-3.5 text-sm font-bold text-text border-b border-rule hover:text-primary-deep"
          @click="isMenuOpen = false"
        >
          <span lang="ne">{{ item.label.ne }}</span>
          <span lang="ja" class="block text-xs font-normal text-muted mt-0.5">{{ item.label.ja }}</span>
        </NuxtLink>
        <OnlineApplyButton class="py-4" />
      </div>
    </nav>
  </header>
</template>
