// UKARU ONLINE のサイト（online.suns-son.jp）。
// 親のコーポレートサイトを土台（layer）にして、部品・色・フォント・データを共有する。
// ページは online/pages のものだけを使う（コーポレートのページは外す）。
// ビルド：リポジトリのルートで `npm run generate:online`
export default defineNuxtConfig({
  extends: ['..'],

  // 親と同じく、サブディレクトリ名なしで参照する（<OnlineHeader />）
  components: [{ path: './components', pathPrefix: false }],

  app: {
    head: {
      htmlAttrs: { lang: 'ne' },
      meta: [{ name: 'description', content: 'UKARU ONLINE' }],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/images/ukaru/ukaru_logo.svg' }],
    },
  },

  hooks: {
    'pages:extend'(pages) {
      const own = pages.filter(page => page.file?.includes('/online/pages/'))
      pages.splice(0, pages.length, ...own)
    },
  },
})
