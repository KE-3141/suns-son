<script setup lang="ts">
useHead({ title: "お問い合わせ | Sun's Son株式会社" })
useSeoMeta({
  description: "Sun's Son株式会社へのお問い合わせ。外国人材の採用・人材紹介・登録支援についてお気軽にご相談ください。",
})

const { company } = useSiteContent()

const contactRows = [
  { label: 'TEL', value: company.tel, href: `tel:${company.telRaw}` },
  { label: '受付時間', value: `${company.hours}（${company.holidays}定休）` },
  { label: '所在地', value: company.addressFull },
]
</script>

<template>
  <main>
    <PageHero
      illust="/images/illust/office_phone.svg"
      title="お問い合わせ"
      description="外国人材の採用・人材紹介・登録支援について、お気軽にご相談ください。"
    />

    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 [&>p]:max-w-3xl">
        <SectionHeading title="お電話でのお問い合わせ" class="mb-8" />
        <InfoTable :rows="contactRows" />
      </div>
    </section>
  </main>
</template>
