<script setup lang="ts">
const { company, footerNavItems } = useSiteContent()
</script>

<template>
  <footer class="bg-primary-deep text-white">
    <div class="max-w-6xl mx-auto px-6 py-12 md:py-14">
      <!-- メイン行 -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <!-- 会社情報 -->
        <div>
          <NuxtLink to="/" class="block mb-4 text-base font-bold text-white">
            {{ company.name }}
          </NuxtLink>
          <address class="not-italic text-sm text-white leading-relaxed">
            〒{{ company.postalCode }}<br>
            {{ company.address }}
          </address>
          <a
            :href="`tel:${company.telRaw}`"
            class="inline-block mt-4 font-num text-xl font-bold text-white hover:underline"
          >
            {{ company.tel }}
          </a>
          <p class="text-xs text-white mt-1">
            {{ company.hoursLabel }}
          </p>
        </div>

        <!-- ナビリンク -->
        <nav class="md:col-span-2" aria-label="フッターナビゲーション">
          <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-1">
            <li v-for="item in footerNavItems" :key="item.to">
              <NuxtLink :to="item.to" class="block text-sm text-white hover:underline py-1.5">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <!-- ボトム行 -->
      <div class="border-t border-primary-light pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <NuxtLink to="/privacy/" class="text-xs text-white hover:underline">
          プライバシーポリシー
        </NuxtLink>
        <p class="font-num text-xs text-white">
          © {{ new Date().getFullYear() }} {{ company.name }}
        </p>
      </div>
    </div>
  </footer>
</template>
