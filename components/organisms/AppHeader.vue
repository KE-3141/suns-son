<script setup lang="ts">
const simpleLogoUrl = usePublicUrl('/images/simple_logo.svg')
const { company, navItems } = useSiteContent()

const isMenuOpen = ref(false)
// モバイル用：展開中の親メニューのキー
const openMobileChild = ref<string | null>(null)

function closeMenu() {
  isMenuOpen.value = false
  openMobileChild.value = null
}

function toggleMobileChild(to: string) {
  openMobileChild.value = openMobileChild.value === to ? null : to
}

const navLinkClass = 'flex items-center gap-1 px-3 h-16 text-sm font-bold text-text whitespace-nowrap border-b-2 border-transparent transition-colors duration-150 hover:text-primary-deep [&.router-link-active]:text-primary-deep [&.router-link-active]:border-primary'
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/70 backdrop-blur-md backdrop-saturate-150 border-b border-rule/70">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center h-16 gap-4">
        <!-- ロゴ + 社名 -->
        <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0" @click="closeMenu">
          <img
            :src="simpleLogoUrl"
            :alt="company.name"
            class="h-8 w-auto flex-shrink-0"
          />
          <span class="text-sm font-bold text-text hidden sm:block whitespace-nowrap">
            {{ company.name }}
          </span>
        </NuxtLink>

        <!-- デスクトップナビ -->
        <nav class="hidden lg:flex items-center ml-6 flex-1">
          <template v-for="item in navItems" :key="item.to">
            <!-- サブメニューあり -->
            <div v-if="item.children?.length" class="relative group">
              <NuxtLink :to="item.to" :class="navLinkClass">
                {{ item.label }}
                <svg class="w-3 h-3 text-muted" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </NuxtLink>

              <!-- ドロップダウン -->
              <div class="absolute top-full left-0 min-w-40 hidden group-hover:block group-focus-within:block">
                <div class="bg-white border border-rule">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.to"
                    :to="child.to"
                    class="block px-4 py-3 text-sm text-text whitespace-nowrap border-b border-rule last:border-b-0
                           hover:bg-primary-bg hover:text-primary-deep transition-colors duration-100"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- サブメニューなし -->
            <NuxtLink v-else :to="item.to" :class="navLinkClass">
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <!-- デスクトップ右：電話 + CTA -->
        <div class="hidden lg:flex items-center gap-5 ml-auto flex-shrink-0">
          <a
            :href="`tel:${company.telRaw}`"
            class="flex items-center gap-1.5 text-text hover:text-primary-deep transition-colors duration-150"
          >
            <IconPhone class="w-4 h-4 text-primary-deep" aria-hidden="true" />
            <span class="font-num text-base font-bold">{{ company.tel }}</span>
          </a>
          <AppButton to="/contact/" size="md">
            お問い合わせ
          </AppButton>
        </div>

        <!-- モバイル：電話アイコン + ハンバーガー -->
        <div class="flex items-center gap-2 ml-auto lg:hidden">
          <a
            :href="`tel:${company.telRaw}`"
            class="p-2 text-primary-deep"
            :aria-label="`電話する ${company.tel}`"
          >
            <IconPhone class="w-5 h-5" aria-hidden="true" />
          </a>
          <button
            class="p-2 text-text hover:text-primary-deep transition-colors"
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
    </div>

    <!-- モバイルメニュー -->
    <nav v-show="isMenuOpen" class="lg:hidden border-t border-rule bg-white">
      <div class="max-w-6xl mx-auto px-6 py-2">
        <template v-for="item in navItems" :key="item.to">
          <!-- サブメニューあり -->
          <div v-if="item.children?.length">
            <button
              class="flex items-center justify-between w-full py-3.5 text-sm font-bold text-text border-b border-rule"
              :aria-expanded="openMobileChild === item.to"
              @click="toggleMobileChild(item.to)"
            >
              {{ item.label }}
              <svg
                class="w-4 h-4 text-muted transition-transform duration-150"
                :class="openMobileChild === item.to ? 'rotate-180' : ''"
                fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div v-show="openMobileChild === item.to" class="pl-4 border-b border-rule">
              <NuxtLink
                :to="item.to"
                class="block py-3 text-sm text-muted hover:text-primary-deep"
                @click="closeMenu"
              >
                {{ item.label }}（一覧）
              </NuxtLink>
              <NuxtLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                class="block py-3 text-sm text-text hover:text-primary-deep border-t border-rule"
                @click="closeMenu"
              >
                {{ child.label }}
              </NuxtLink>
            </div>
          </div>

          <!-- サブメニューなし -->
          <NuxtLink
            v-else
            :to="item.to"
            class="block py-3.5 text-sm font-bold text-text border-b border-rule hover:text-primary-deep"
            @click="closeMenu"
          >
            {{ item.label }}
          </NuxtLink>
        </template>

        <div class="py-4">
          <AppButton to="/contact/" size="md" class="w-full py-3.5" @click="closeMenu">
            お問い合わせ
          </AppButton>
        </div>
      </div>
    </nav>
  </header>
</template>
