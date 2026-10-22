/**
 * スクロールで現れるフェード。見た目は assets/css/app.css の [data-reveal]。
 *
 * 1. v-reveal（明示）：ヒーローなど、順番に出したい要素に付ける。値は遅れ（ms）。
 *      <h1 v-reveal>…</h1>  <p v-reveal="150">…</p>
 *    SSR の時点で data-reveal が付くので、表示前に一瞬見えてしまうことがない。
 *
 * 2. 自動：ページが表示されたら、ヒーローより下のセクションの中身に data-reveal を付ける。
 *    並んだ項目（ol / ul / dl / tbody の子）は少しずつ時間差で出す。
 *    付ける時点ですでに画面に入っている要素には付けない（一度消えてまた出るのを防ぐ）。
 *    自動で付けたくないセクションには data-no-reveal を付ける。
 */
import type { Directive } from 'vue'

const STAGGER_MS = 100
const STAGGER_MAX_MS = 400

const delayStyle = (delay: unknown) =>
  typeof delay === 'number' && delay > 0 ? `--reveal-delay:${delay}ms` : undefined

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  const observe = (el: Element) => {
    if (!import.meta.client) return
    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }
    observer ??= new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-revealed')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
  }

  const reveal: Directive<HTMLElement, number | undefined> = {
    getSSRProps: (binding) => ({
      'data-reveal': '',
      style: delayStyle(binding.value),
    }),
    mounted(el, binding) {
      el.setAttribute('data-reveal', '')
      const style = delayStyle(binding.value)
      if (style) el.style.setProperty('--reveal-delay', `${binding.value}ms`)
      observe(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)

  if (!import.meta.client) return

  const isInView = (el: Element) => el.getBoundingClientRect().top < window.innerHeight

  const tag = (el: Element, delay = 0) => {
    if (el.hasAttribute('data-reveal') || isInView(el)) return
    el.setAttribute('data-reveal', '')
    if (delay > 0) (el as HTMLElement).style.setProperty('--reveal-delay', `${delay}ms`)
    observe(el)
  }

  nuxtApp.hook('page:finish', () => {
    requestAnimationFrame(() => {
      const sections = document.querySelectorAll('main > section:not(:first-child):not([data-no-reveal])')
      for (const section of sections) {
        for (const block of section.querySelectorAll(':scope > div > *')) {
          const items = block.matches('ol, ul, dl, table')
            ? block.querySelectorAll(':scope > li, :scope > div, :scope > tbody > tr')
            : []
          if (items.length === 0) {
            tag(block)
            continue
          }
          items.forEach((item, index) => tag(item, Math.min(index * STAGGER_MS, STAGGER_MAX_MS)))
        }
      }
    })
  })
})
