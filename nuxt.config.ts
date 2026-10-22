// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'

// online/（UKARU ONLINE のサイト）はこの設定を土台（layer）として読み込む。
// そのとき `~` は online/ を指すので、共通のファイルはこのファイルからの位置で書く。
const here = (path: string) => fileURLToPath(new URL(path, import.meta.url))

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: [here('./assets/css/app.css')],

  // UKARU ONLINE のサイトは別にビルドする
  ignore: ['online/**'],

  app: {
    head: {
      htmlAttrs: { lang: 'ja' },
      // JavaScript が動かないときは、フェードで隠した要素をそのまま見せる
      noscript: [{ innerHTML: '<style>[data-reveal]{opacity:1!important;transform:none!important}</style>' }],
      meta: [
        {
          name: 'description',
          content:
            "Sun's Son株式会社",
        },
      ],
    },
  },

  // アトミックデザイン用: サブディレクトリのプレフィックスなしでコンポーネントを参照する
  components: [
    {
      path: here('./components'),
      pathPrefix: false,
    },
  ],

  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  fonts: {
    families: [
      // 日本語：見出しも本文も Zen Kaku Gothic New（スマートさ）
      {
        name: 'Zen Kaku Gothic New',
        provider: 'google',
        weights: [400, 700, 900],
      },
      // 数字・英字：少し丸みのある Outfit（ポップさ）
      {
        name: 'Outfit',
        provider: 'google',
        weights: [600, 700],
      },
      // ネパール語（デーヴァナーガリー）：UKARU ONLINE ページ。上の2つに字がないので、ここで出す
      {
        name: 'Noto Sans Devanagari',
        provider: 'google',
        weights: [400, 700],
      },
    ],
  },

  image: {
    quality: 85,
    format: ['webp', 'jpg'],
    screens: {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },

  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
})
