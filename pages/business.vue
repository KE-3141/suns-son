<script setup lang="ts">
useHead({ title: "事業内容 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の事業内容。人材紹介からアフターケア・生活サポートまで、ネパール人材の採用を一貫してサポートします。",
})

const { referralFlows } = useSiteContent()
</script>

<template>
  <main>
    <PageHero
      illust="/images/illust/classroom.svg"
      title="事業内容"
      description="教育・紹介・サポートの3つの事業で、ネパール人材の採用を一貫して支えます。"
    />

    <!-- ===== 1. サービス内容 ===== -->
    <ServicesSection title="3つの事業" />

    <!-- ===== 2. 人材紹介までの流れ ===== -->
    <StepsSection
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 3. CTA ===== -->
    <CtaSection />
  </main>
</template>
