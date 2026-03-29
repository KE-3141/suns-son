<script setup lang="ts">
useHead({ title: "事業内容 | Sun's Son株式会社" })
useSeoMeta({
  description:
    "Sun's Son株式会社の事業内容。人材紹介からアフターケア・生活サポートまで、外国人留学生の採用を一貫してサポートします。",
})

const { referralFlows } = useSiteContent()
</script>

<template>
  <main>
    <!-- ===== 1. サービス内容 ===== -->
    <ServicesSection />

    <!-- ===== 2. 人材紹介までの流れ ===== -->
    <StepsSection
      label="Deal Flow"
      title="人材紹介までの流れ"
      :steps="referralFlows"
    />

    <!-- ===== 3. CTA ===== -->
    <CtaSection />
  </main>
</template>
