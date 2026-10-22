<script setup lang="ts">
/**
 * 横棒のグラフ（合格率・割合など、1つの系列だけ）。
 * 棒は primary の1色で細く、先だけ丸める。値は棒の右に文字色で書く（凡例はなし。title が系列の名前）。
 * 表（table）で組むので、読み上げでは「項目・値」の表として読まれる。行にマウスを置くと title で値が出る。
 * max は棒の長さの 100% にあたる値（割合なら 100）。note には出典と時点を書く。
 * label・title は { ne, ja } も受け取る（BilingualText）。
 */
import type { Bilingual } from '~/types/bilingual'

interface Bar {
  label: string | Bilingual
  value: number
  /** 値の表示（省くと value + unit） */
  display?: string
}

interface Props {
  title?: string | Bilingual
  bars: Bar[]
  unit?: string
  max?: number
  note?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: undefined,
  unit: '%',
  max: 100,
  note: undefined,
})

const labelText = (label: string | Bilingual) => (typeof label === 'string' ? label : label.ja)
/** 小数の値が1つでもあれば、全部を小数1けたでそろえる（33.0 を 33 にしない） */
const digits = computed(() => (props.bars.some(bar => !Number.isInteger(bar.value)) ? 1 : 0))
const valueText = (bar: Bar) => bar.display ?? `${bar.value.toFixed(digits.value)}${props.unit}`
</script>

<template>
  <figure>
    <figcaption v-if="title" class="mb-4">
      <BilingualText :text="title" class="text-base font-bold leading-snug text-text" />
    </figcaption>
    <table class="w-full border-collapse">
      <tbody>
        <tr
          v-for="bar in bars"
          :key="labelText(bar.label)"
          :title="`${labelText(bar.label)}：${valueText(bar)}`"
          class="border-b border-rule last:border-b-0"
        >
          <th scope="row" class="w-28 md:w-40 py-2 pr-4 text-left text-sm font-bold leading-snug text-text align-middle">
            <BilingualText tag="span" :text="bar.label" />
          </th>
          <td class="py-2 align-middle">
            <div class="flex items-center gap-3">
              <span class="flex-1 min-w-0 h-3" aria-hidden="true">
                <span class="block h-full bg-primary rounded-r" :style="`width: ${Math.min(bar.value / max, 1) * 100}%`" />
              </span>
              <span class="w-16 flex-shrink-0 font-num text-base font-bold text-text whitespace-nowrap">{{ valueText(bar) }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="note" class="text-xs text-muted mt-3">
      {{ note }}
    </p>
  </figure>
</template>
