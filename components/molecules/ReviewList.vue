<script setup lang="ts">
/**
 * 受講生のレビューの一覧。1件ずつ、顔のイラスト + 名前 + 吹き出し（CommentBubble）で見せる。
 * 名前の横に勉強中の内容（TagBadge）と星。吹き出しの中は感想を入力のまま。
 * 感想がネパール語のときは、下に日本語訳を小さく薄く添える（ja）。日本語の感想には付けない。
 * md 以上は2段組み（高さのちがう吹き出しをすき間なく詰めるため columns）。
 * face は illustkit のキャラクターの顔（本人の顔ではない）。
 */
interface Review {
  name: string
  face: string
  courses: string[]
  /** 星の数（1〜5） */
  rating: number
  text: string
  lang: 'ne' | 'ja'
  ja?: string
}

interface Props {
  items: Review[]
}

defineProps<Props>()

const stars = [1, 2, 3, 4, 5]
</script>

<template>
  <ul class="md:columns-2 gap-x-10">
    <li v-for="(review, index) in items" :key="index" class="break-inside-avoid pb-6">
      <CommentBubble :name="review.name" :face-src="review.face">
        <template #meta>
          <span class="flex gap-0.5 text-sm leading-none" role="img" :aria-label="`5点中${review.rating}点`">
            <span
              v-for="star in stars"
              :key="star"
              :class="star <= review.rating ? 'text-primary' : 'text-rule'"
              aria-hidden="true"
            >★</span>
          </span>
          <TagBadge v-for="course in review.courses" :key="course" variant="soft">{{ course }}</TagBadge>
        </template>
        <p :lang="review.lang" class="text-sm md:text-base leading-relaxed text-text whitespace-pre-line">{{ review.text }}</p>
        <p v-if="review.ja" lang="ja" class="text-xs leading-relaxed text-muted mt-1.5">{{ review.ja }}</p>
      </CommentBubble>
    </li>
  </ul>
</template>
