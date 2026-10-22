<script setup lang="ts">
/**
 * クラスの時間割。1行に1クラス、授業のある曜日に ● を付ける。
 * 曜日の見出しはネパール語、下に日本語を小さく添える。days は 0 = 日曜 〜 6 = 土曜。
 */
interface ClassRow {
  name: string
  time: string
  days: number[]
}

interface Props {
  classes: ClassRow[]
}

defineProps<Props>()

const weekdays = [
  { ne: 'आइत', ja: '日' },
  { ne: 'सोम', ja: '月' },
  { ne: 'मंगल', ja: '火' },
  { ne: 'बुध', ja: '水' },
  { ne: 'बिही', ja: '木' },
  { ne: 'शुक्र', ja: '金' },
  { ne: 'शनि', ja: '土' },
]
</script>

<template>
  <div class="overflow-x-auto">
    <table class="w-full min-w-xl border-t-2 border-primary text-sm">
      <thead>
        <tr class="border-b border-rule text-left">
          <th scope="col" class="py-3 pr-4 font-bold">
            <span lang="ne">कक्षा</span><span lang="ja" class="block text-xs font-normal text-muted">クラス</span>
          </th>
          <th scope="col" class="py-3 pr-4 font-bold">
            <span lang="ne">समय</span><span lang="ja" class="block text-xs font-normal text-muted">時間（日本時間）</span>
          </th>
          <th v-for="day in weekdays" :key="day.ja" scope="col" class="py-3 w-12 text-center font-bold">
            <span lang="ne">{{ day.ne }}</span><span lang="ja" class="block text-xs font-normal text-muted">{{ day.ja }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in classes" :key="row.name" class="border-b border-rule">
          <th scope="row" class="py-3 pr-4 text-left font-num font-bold text-text whitespace-nowrap">{{ row.name }}</th>
          <td class="py-3 pr-4 font-num whitespace-nowrap">{{ row.time }}</td>
          <td v-for="(day, index) in weekdays" :key="day.ja" class="py-3 text-center">
            <span v-if="row.days.includes(index)" class="inline-block w-3 h-3 rounded-full bg-primary" :aria-label="`${day.ja}曜日あり`" role="img" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
