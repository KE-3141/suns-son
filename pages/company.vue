<script setup lang="ts">
useHead({ title: "会社概要 | Sun's Son株式会社" })
useSeoMeta({
  description: "Sun's Son株式会社の会社概要。所在地・代表者など基本情報をご紹介します。",
})

const { company } = useSiteContent()

const companyRows = [
  { label: '会社名', value: company.name },
  { label: '代表取締役', value: 'Bhandari Rajan' },
  {
    label: '住所（本店）',
    value: `〒${company.postalCode} ${company.address}`,
  },
  {
    label: '住所（支店）',
    value: '東京都港区赤坂2-21-4 天翔赤坂ANNEXビル 4F 407-G号室',
  },
  {
    label: 'TEL',
    value: `<a href="tel:${company.telRaw}" class="text-primary-600 hover:text-primary-500 font-medium transition-colors duration-150">${company.tel}</a>`,
  },
  { label: '受付時間', value: `${company.hours}（${company.holidays}定休）` },
  { label: '有料職業紹介事業許可番号', value: company.license },
  { label: '登録支援機関番号', value: company.licenseSupportOrg },
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <section class="bg-[#eaf6fd] py-20 md:py-28">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <SectionHeading title="会社情報" class="mb-0" />
      </div>
    </section>

    <!-- ===== 2. 会社情報テーブル ===== -->
    <section class="py-16 md:py-24 bg-[#eaf6fd]">
      <div class="max-w-3xl mx-auto px-6">
        <!-- カード -->
        <div class="bg-white rounded-2xl shadow-[0_4px_8px_rgba(0,113,188,0.12)] p-8 md:p-12">
          <table class="w-full border-collapse">
            <tbody>
              <tr
                v-for="row in companyRows"
                :key="row.label"
                class="border-b-2 border-secondary-200 last:border-b-0"
              >
                <th
                  class="text-left py-4 pr-6 text-sm font-semibold text-neutral-700 align-top
                         w-44"
                >
                  {{ row.label }}
                </th>
                <td
                  class="py-4 text-sm text-neutral-700 leading-relaxed"
                  v-html="row.value"
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ===== 3. CTA ===== -->
    <CtaSection />
  </main>
</template>
