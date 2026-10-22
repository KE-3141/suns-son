// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  css: ['~/assets/css/app.css'],

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
      path: '~/components',
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
