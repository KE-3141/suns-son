<script setup lang="ts">
useHead({ title: "会社概要 | Sun's Son株式会社" })
useSeoMeta({
  description: "Sun's Son株式会社の会社概要。所在地・代表者など基本情報をご紹介します。",
})

const { company } = useSiteContent()

const companyRows = [
  { label: '会社名', value: company.name },
  { label: '代表取締役', value: `${company.ceo}（${company.ceoEn}）` },
  { label: '住所（本店）', value: `〒${company.postalCode} ${company.address}` },
  { label: '住所（支店）', value: company.branchAddress },
  { label: 'TEL', value: company.tel, href: `tel:${company.telRaw}` },
  { label: '受付時間', value: `${company.hours}（${company.holidays}定休）` },
  { label: '有料職業紹介事業許可番号', value: company.license },
  { label: '登録支援機関番号', value: company.licenseSupportOrg },
]
</script>

<template>
  <main>
    <!-- ===== 1. ページヒーロー ===== -->
    <PageHero illust="/images/illust/office_documents.svg" title="会社概要" />

    <!-- ===== 2. 会社情報テーブル ===== -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <InfoTable :rows="companyRows" />
      </div>
    </section>

    <!-- ===== 3. CTA ===== -->
    <CtaSection />
  </main>
</template>
