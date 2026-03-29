<script setup lang="ts">
const simpleLogoUrl = usePublicUrl('/images/simple_logo.svg')
const { company, navItems } = useSiteContent()

const { y } = useWindowScroll()
const isScrolled = computed(() => y.value > 20)
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
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 transition-all duration-200',
      'bg-white/80 backdrop-blur-md',
      isScrolled
        ? 'shadow-[0_4px_16px_rgba(0,113,188,0.12)]'
        : 'border-b border-white/20',
    ]"
  >
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex items-center h-16 gap-4">
        <!-- ロゴ + 社名 -->
        <NuxtLink to="/" class="flex items-center gap-2 flex-shrink-0" @click="closeMenu">
          <img
            :src="simpleLogoUrl"
            :alt="company.name"
            class="h-8 w-auto flex-shrink-0"
          />
          <span class="text-sm font-semibold text-neutral-700 hidden sm:block whitespace-nowrap">
            {{ company.name }}
          </span>
        </NuxtLink>

        <!-- デスクトップナビ -->
        <nav class="hidden lg:flex items-center gap-1 ml-6 flex-1">
          <template v-for="item in navItems" :key="item.to">
            <!-- サブメニューあり -->
            <div v-if="item.children?.length" class="relative group">
              <NuxtLink
                :to="item.to"
                class="flex items-center gap-1 px-4 py-1.5 text-sm font-medium text-neutral-700 rounded-full whitespace-nowrap
                       transition-all duration-150
                       hover:bg-secondary-50 hover:text-primary-400
                       [&.router-link-active]:bg-secondary-50 [&.router-link-active]:text-primary-400"
              >
                {{ item.label }}
                <!-- 下向き三角 -->
                <svg class="w-3.5 h-3.5 opacity-50 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </NuxtLink>

              <!-- ドロップダウン -->
              <div
                class="absolute top-full left-0 mt-1 min-w-36 opacity-0 invisible
                       translate-y-1 transition-all duration-150
                       group-hover:opacity-100 group-hover:visible group-hover:translate-y-0"
              >
                <div class="bg-white rounded-xl shadow-[0_8px_24px_rgba(41,171,226,0.15)] border border-primary-50 py-1.5 overflow-hidden">
                  <NuxtLink
                    v-for="child in item.children"
                    :key="child.to"
                    :to="child.to"
                    class="flex items-center px-4 py-2.5 text-sm text-neutral-700 whitespace-nowrap
                           hover:bg-primary-50 hover:text-primary-400 transition-colors duration-100"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </div>
              </div>
            </div>

            <!-- サブメニューなし -->
            <NuxtLink
              v-else
              :to="item.to"
              class="px-4 py-1.5 text-sm font-medium text-neutral-700 rounded-full whitespace-nowrap
                     transition-all duration-150
                     hover:bg-secondary-50 hover:text-primary-400
                     [&.router-link-active]:bg-secondary-50 [&.router-link-active]:text-primary-400"
            >
              {{ item.label }}
            </NuxtLink>
          </template>
        </nav>

        <!-- デスクトップ右：電話 + CTA -->
        <div class="hidden lg:flex items-center gap-5 ml-auto flex-shrink-0">
          <a
            :href="`tel:${company.telRaw}`"
            class="flex items-center gap-1.5 text-neutral-700 hover:text-primary-400
                   transition-colors duration-150"
          >
            <IconPhone class="w-4 h-4 text-primary-400" />
            <span class="text-sm font-bold tracking-wide">{{ company.tel }}</span>
          </a>
          <AppButton to="/contact/" size="md">
            お問い合わせ
          </AppButton>
        </div>

        <!-- モバイル：電話アイコン + ハンバーガー -->
        <div class="flex items-center gap-2 ml-auto lg:hidden">
          <a
            :href="`tel:${company.telRaw}`"
            class="p-2 text-primary-400 hover:text-primary-400 transition-colors"
            :aria-label="`電話する ${company.tel}`"
          >
            <IconPhone class="w-5 h-5" />
          </a>
          <button
            class="p-2 text-neutral-700 hover:text-primary-400 transition-colors"
            :aria-expanded="isMenuOpen"
            aria-label="メニューを開く"
            @click="isMenuOpen = !isMenuOpen"
          >
            <svg
              v-if="!isMenuOpen"
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              v-else
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- モバイルメニュー -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <nav
        v-show="isMenuOpen"
        class="lg:hidden border-t border-neutral-100 bg-white/90 backdrop-blur-md shadow-lg"
      >
        <div class="max-w-6xl mx-auto px-6 py-2">
          <template v-for="item in navItems" :key="item.to">
            <!-- サブメニューあり -->
            <div v-if="item.children?.length">
              <button
                class="flex items-center justify-between w-full py-3.5 text-sm font-medium text-neutral-700
                       border-b border-neutral-50
                       hover:text-primary-400 transition-colors duration-150"
                @click="toggleMobileChild(item.to)"
              >
                {{ item.label }}
                <svg
                  class="w-4 h-4 opacity-40 transition-transform duration-200"
                  :class="openMobileChild === item.to ? 'rotate-180' : ''"
                  fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24" aria-hidden="true"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              <!-- サブアイテム -->
              <div v-show="openMobileChild === item.to" class="pl-4 border-b border-neutral-50">
                <NuxtLink
                  :to="item.to"
                  class="flex items-center py-3 text-sm text-neutral-500 hover:text-primary-400 transition-colors"
                  @click="closeMenu"
                >
                  {{ item.label }}（一覧）
                </NuxtLink>
                <NuxtLink
                  v-for="child in item.children"
                  :key="child.to"
                  :to="child.to"
                  class="flex items-center py-3 text-sm text-neutral-700 hover:text-primary-400 transition-colors border-t border-neutral-50"
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
              class="flex items-center py-3.5 text-sm font-medium text-neutral-700
                     border-b border-neutral-50 last:border-0
                     hover:text-primary-400 transition-colors duration-150"
              @click="closeMenu"
            >
              {{ item.label }}
            </NuxtLink>
          </template>

          <div class="py-4">
            <AppButton
              to="/contact/"
              size="md"
              class="w-full py-3.5"
              @click="closeMenu"
            >
              お問い合わせ
            </AppButton>
          </div>
        </div>
      </nav>
    </Transition>
  </header>
</template>
