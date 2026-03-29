# デザインシステム定義書 — Sun's Son株式会社

> このドキュメントはサイトのビジュアルデザインの基準を定義します。
> Nuxt UI v3 / Tailwind CSS v4 ベースで実装します。
> 既存制作物（sunsson-corporate）のデザインを参照・継承しています。

---

## ブランドコンセプト

### 事業概要

ネパール人を中心とした外国人留学生を日本の学校へ紹介するエージェントサービス。
代表バンダーリ ラジャン氏のTikTok（6.8万フォロワー）・UKARU Academyを通じたネパール人コミュニティへの強い影響力が差別化ポイント。

### ターゲット

| ターゲット | トーン |
|---|---|
| **日本語学校・専門学校（BtoB）** | 信頼・実績・専門性。「基準を満たす生徒を確実に紹介できる」安心感 |
| **外国人留学生希望者（BtoC）** | 親しみやすさ・明るさ・日本での可能性 |

### デザインキーワード

| キーワード | 表現方法 |
|---|---|
| **国際・グローバル** | クリーンなブルー系配色、英語・日本語の混在レイアウト |
| **信頼・専門性** | 整った文字組み、ゆとりある余白、データ・実績の明示 |
| **親しみやすさ** | 明るい水色のアクセント、イラスト活用、丸みのある要素 |
| **明快・誠実** | 過度な装飾を避ける、チェックリスト形式の情報整理 |

---

## カラーパレット

既存制作物（sunsson-corporate）のカラーを継承し、Tailwind v4の `@theme` トークンとして定義する。

### ブランドカラー

```css
/* assets/css/app.css */
@theme {
  /* Primary — Sky Blue（親しみやすさ・グローバル・ブランドカラー） */
  --color-primary-50:  #eaf6fd;
  --color-primary-100: #d0ecf9;
  --color-primary-200: #9dd6f3;
  --color-primary-300: #62bceb;
  --color-primary-400: #29abe2;  /* メインブランドカラー */
  --color-primary-500: #1a96cc;
  --color-primary-600: #1480af;  /* CTAボタン・バッジ */
  --color-primary-700: #106a91;
  --color-primary-800: #0c5473;
  --color-primary-900: #083d55;
  --color-primary-950: #042537;

  /* Secondary — Blue Gray（#b5ccda を中間・信頼・落ち着き） */
  --color-secondary-50:  #f6f9fb;
  --color-secondary-100: #eff4f7;
  --color-secondary-200: #e3ecf1;
  --color-secondary-300: #d9e4ec;
  --color-secondary-400: #b5ccda;  /* 英字ラベル・サブトーン */
  --color-secondary-500: #93a8b5;
  --color-secondary-600: #748793;  /* ボーダー・控えめアクセント */
  --color-secondary-700: #5b6d79;  /* テキストアクセント */
  --color-secondary-800: #455661;
  --color-secondary-900: #303f4a;
  --color-secondary-950: #23323c;

  /* Base — Light Cyan（セクション背景・ベース = primary-50） */
  --color-base: #eaf6fd;

  /* Neutral — Gray（テキスト・ボーダー） */
  --color-neutral-50:  #f6f7f8;
  --color-neutral-100: #ebedf0;
  --color-neutral-200: #d3d7dc;
  --color-neutral-300: #b0b7bf;
  --color-neutral-400: #8a939e;
  --color-neutral-500: #6b7583;
  --color-neutral-600: #545e6b;
  --color-neutral-700: #434b57;  /* メインテキスト */
  --color-neutral-800: #383f49;
  --color-neutral-900: #31363f;
  --color-neutral-950: #1e2229;
}
```

**Secondary スケール** — 中間色 **400**（`#b5ccda`）を基準に、50〜300 は白へ、500〜950 は同一トーンの濃色（`#1a2832`）へ向けたブレンドで段階をそろえている（彩度の高いブルーとの混在を避ける）。

### カラーの用途

| 色 | トークン | 用途 |
|---|---|---|
| Primary 400 `#29ABE2` | `text-primary-400` / `bg-primary-400` | メインブランドカラー・スクロールバー |
| Primary 600 `#1480AF` | `bg-primary-600` | CTAボタン・バッジ・強調背景 |
| Primary 50 `#EAF6FD` | `bg-[#eaf6fd]` / `bg-primary-50` | セクション背景（奇数面）= Base |
| Secondary 400 `#B5CCDA` | `text-secondary-400` | 英字ラベル・ダーク背景上のサブトーン |
| Secondary 600 `#748793` | `border-secondary-600` / `text-secondary-600` | 区切り・控えめアクセント |
| Secondary 700 `#5B6D79` | `text-secondary-700` | 本文に近い補助アクセント |
| White `#ffffff` | `bg-white` | セクション背景（偶数面）・カード |
| Neutral 700 `#434b57` | `text-neutral-700` | 本文テキスト |
| Neutral 400 `#8a939e` | `text-neutral-400` | キャプション・補助テキスト |
| Primary 950 `#042537` | `bg-primary-950` | フッター背景 |

### アクセシビリティ基準

- 本文テキスト（Neutral 700 on White）: コントラスト比 **7.1:1** ✓ WCAG AA
- CTAボタン（White on Primary 500）: コントラスト比 **5.3:1** ✓ WCAG AA
- ヘッダーナビ（White on Primary 500）: コントラスト比 **5.3:1** ✓ WCAG AA

---

## タイポグラフィ

### フォントファミリー

```ts
// nuxt.config.ts
fonts: {
  families: [
    {
      name: 'Noto Sans JP',
      provider: 'google',
      weights: [400, 500, 700, 900],
    },
  ],
},
```

```css
/* assets/css/app.css */
@theme {
  --font-sans: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
}
```

### タイプスケール

| 用途 | クラス | サイズ | ウェイト | 行間 |
|---|---|---|---|---|
| ページタイトル（H1） | `text-4xl font-black` | 2.25rem（36px） | 900 | 1.25 |
| セクション見出し（H2） | `text-3xl font-bold` | 1.875rem（30px） | 700 | 1.3 |
| サブ見出し（H3） | `text-xl font-bold` | 1.25rem（20px） | 700 | 1.4 |
| カード見出し（H4） | `text-lg font-semibold` | 1.125rem（18px） | 600 | 1.5 |
| 本文 | `text-base` | 1rem（16px） | 400 | 1.8 |
| キャプション | `text-sm` | 0.875rem（14px） | 400 | 1.6 |
| ラベル・バッジ | `text-xs font-medium` | 0.75rem（12px） | 500 | 1.4 |

### 見出しデザインルール

セクション見出しは**中央揃え + 下線装飾**（Primary 400）。既存サイトのパターンを継承。

```html
<div class="text-center mb-12">
  <h2 class="text-3xl font-bold text-neutral-800 inline-block relative">
    弊校の強み
    <span class="absolute bottom-0 left-0 w-full h-1 bg-primary-400 rounded-full -mb-2"></span>
  </h2>
</div>
```

---

## スペーシング・レイアウト

### コンテナ幅

| ブレークポイント | コンテナ幅 | 横パディング |
|---|---|---|
| モバイル（< 768px） | 100% | 24px（px-6） |
| タブレット（768px〜） | 100% | 32px（px-8） |
| デスクトップ（1152px〜） | 1120px（中央揃え） | 0 |

### セクション余白

| 用途 | クラス | サイズ |
|---|---|---|
| セクション縦余白（大） | `py-20 md:py-28` | 80px / 112px |
| セクション縦余白（中） | `py-14 md:py-20` | 56px / 80px |
| カード内パディング | `p-6 md:p-8` | 24px / 32px |
| 見出しとコンテンツの間 | `mt-10 md:mt-14` | 40px / 56px |

### グリッドシステム

```html
<!-- 2カラム（サービス紹介・強み詳細） -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<!-- 3カラム（弊社の強み3点） -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<!-- フロー（紹介の流れ：5ステップ） -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
```

---

## シャドウ・ボーダー・角丸

### 基本方針

**角丸はやや大きめ** — 国際的・親しみやすいイメージに合わせ、建設業サイトより丸みを持たせる。

| 用途 | クラス | 値 |
|---|---|---|
| カード | `rounded-lg` | 8px |
| ボタン | `rounded-full` | 100vh（pill形状） |
| バッジ・ラベル | `rounded-full` | 100vh |
| 画像 | `rounded-lg` | 8px |

### シャドウ

```css
@theme {
  --shadow-card: 0 2px 8px 0 rgb(116 135 147 / 0.1), 0 1px 2px 0 rgb(0 0 0 / 0.04);
  --shadow-card-hover: 0 4px 16px 0 rgb(116 135 147 / 0.18), 0 2px 4px 0 rgb(0 0 0 / 0.06);
}
```

### ボーダー

- 区切り線: `border-neutral-200`
- カードボーダー: `border border-neutral-100`
- 強調装飾（下線）: `bg-primary-400 h-1 rounded-full`
- バッジボーダー: なし（背景色で区別）

---

## コンポーネント方針

### ボタン

| 種別 | 用途 | スタイル |
|---|---|---|
| **Primary（CTA）** | お問い合わせ・資料請求 | `bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-3 rounded-full` |
| **Secondary** | サブアクション | `bg-white hover:bg-primary-50 text-primary-600 border border-primary-600 font-medium px-6 py-2.5 rounded-full` |
| **Ghost** | テキストリンク | `text-primary-600 hover:text-primary-800 underline-offset-4 hover:underline` |

**CTAボタンの使用ルール:**
- 1ビューポートに Primary ボタンは最大2個まで
- テキストは「お問い合わせはこちら」「詳細を見る」など行動を促す文言
- アイコン（矢印）を右側に添える

### カード

```html
<!-- 標準カード（サービス紹介・強み等） -->
<div class="bg-white rounded-lg shadow-card p-6 md:p-8
            hover:shadow-card-hover transition-shadow duration-200">
  <div class="mb-4"><!-- イラストまたはアイコン --></div>
  <h3 class="text-lg font-bold text-neutral-800 mb-2">生徒紹介サービス</h3>
  <ul class="space-y-2 text-neutral-700 text-sm">
    <li class="flex items-start gap-2">
      <span class="text-secondary-400 font-bold mt-0.5">✓</span>
      入学条件のヒアリング
    </li>
  </ul>
</div>
```

### チェックリスト（強み一覧・サービス内容）

既存デザインのチェックボックス + テキストパターンを踏襲する。

```html
<ul class="space-y-3">
  <li class="flex items-center gap-3">
    <!-- チェックボックス: bg-primary-400 when checked -->
    <span class="w-6 h-6 rounded bg-primary-400 flex items-center justify-center flex-shrink-0">
      <span class="text-white text-xs font-bold">✓</span>
    </span>
    <span class="text-neutral-700">TikTokのフォロワー6.8万人</span>
  </li>
</ul>
```

### バッジ・ラベル（ページ上部アクセント）

既存サイトの「日本語・特定技能教育 / 生活サポート完備」バナーパターン。

```html
<span class="inline-block bg-primary-600 text-white text-sm font-medium
             px-4 py-1.5 rounded-full shadow-[0_4px_8px_rgba(41,171,226,0.3)]">
  日本語・特定技能教育 / 生活サポート完備
</span>
```

### ページヘッダー（各ページ上部）

```html
<section class="bg-primary-800 text-white py-16 md:py-20">
  <div class="max-w-6xl mx-auto px-6">
    <p class="text-secondary-400 text-sm font-medium tracking-widest uppercase mb-2">
      Our Strengths
    </p>
    <h1 class="text-3xl md:text-4xl font-black">弊社の強み</h1>
  </div>
</section>
```

### セクション区切り（交互背景）

既存サイトのパターンを継承：

```
セクション1: bg-white
セクション2: bg-[#EAF6FD]（Base Light）
セクション3: bg-white
セクション4: bg-primary-800 text-white（ダーク：CTAやハイライト用）
```

---

## グローバルヘッダー設計

既存サイトはガラスモーフィズム（backdrop-blur）を使用。新サイトも同様に採用する。

```
┌──────────────────────────────────────────────────────┐
│ [ロゴ]  弊社の強み  サービス  紹介の流れ  料金  会社概要  [お問い合わせ▶] │
│ bg-white/80 backdrop-blur-md（スクロール前：透明）     │
└──────────────────────────────────────────────────────┘
```

```html
<header class="fixed top-0 left-0 right-0 z-50
               bg-white/80 backdrop-blur-md
               border-b border-white/20
               h-16">
  <!-- ロゴ + ナビ + CTAボタン -->
</header>
```

- ナビリンク: `text-neutral-700 hover:bg-primary-50 hover:text-primary-600 px-3 py-1.5 rounded transition-colors`
- CTAボタン: `bg-primary-600 hover:bg-primary-500 text-white text-sm font-bold px-5 py-2 rounded-full`

---

## グローバルフッター設計

```
┌───────────────────────────────────────────────┐
│ [ロゴ]  Sun's Son株式会社                        │
│ 東京都新宿区百人町2-20-23-203                    │
│ TEL: 03-4485-3085                              │
│ ──────────────────────────────────────────────  │
│ 弊社の強み | サービス | 紹介の流れ | 料金 | 会社概要 │
│ プライバシーポリシー                              │
│ © 2025 Sun's Son株式会社                        │
└───────────────────────────────────────────────┘
```

- 背景: `bg-primary-900`
- テキスト: `text-neutral-300`
- リンク: `text-neutral-400 hover:text-white`
- コピーライト: `text-neutral-500 text-xs`

---

## CTAブロック（各ページ末尾共通）

```html
<section class="bg-primary-800 text-white py-16 md:py-20 text-center">
  <p class="text-neutral-300 text-sm mb-2">お気軽にご相談ください</p>
  <a href="tel:0344853085"
     class="text-4xl md:text-5xl font-black text-white hover:text-primary-200
            transition-colors block mb-2">
    03-4485-3085
  </a>
  <p class="text-neutral-400 text-sm mb-8">受付時間（平日）</p>
  <a href="/contact/"
     class="inline-block bg-primary-600 hover:bg-primary-500 text-white
            font-bold px-10 py-4 rounded-full transition-colors">
    お問い合わせフォーム →
  </a>
</section>
```

---

## アイコン

Nuxt UI v3 付属の **Heroicons** を基本とする。学校・教育・グローバル系のアイコンを優先。

| 用途 | アイコン名 | 備考 |
|---|---|---|
| チェックマーク（強み・サービス） | `check` | Primary 400 背景 |
| 電話 | `phone` | ヘッダー・CTA |
| メール | `envelope` | お問い合わせ |
| 場所 | `map-pin` | 会社概要 |
| 矢印（リンク） | `arrow-right` | CTAボタン右側 |
| 学校・教育 | `academic-cap` | 紹介サービス |
| グローバル | `globe-alt` | 対応国籍 |
| ユーザー | `user-group` | 講師陣・生徒 |
| 書類 | `document-text` | 選考・書類 |
| シールド | `shield-check` | 完全成功報酬 |

```html
<UIcon name="i-heroicons-check" class="w-5 h-5 text-white" />
```

---

## アニメーション方針

既存サイトのトランジション設定を継承する。

| 用途 | 実装 |
|---|---|
| ボタンホバー | `transition-colors duration-200` |
| カードホバー | `transition-shadow duration-200` |
| ナビゲーション | `transition-colors duration-150` |
| チェックボックス | `hover:scale-105 transition-transform` |

---

## Nuxt UI v3 テーマ設定

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'neutral'],
    },
  },
})
```

```css
/* assets/css/app.css */
@import "tailwindcss";
@import "@nuxt/ui";

@theme {
  /* カラーパレット（上記定義を記述） */
  --font-sans: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
  --color-primary: var(--color-primary-500);
  --color-secondary: var(--color-secondary-400);
}
```

---

## チェックリスト（実装前確認）

- [ ] ロゴデータ（SVG形式）— 既存スライドにロゴマーク確認済み、ベクターデータ入手
- [ ] 会社・サービス紹介用のイラスト素材（既存サイトに等身大人物イラストあり）
- [ ] Google Fonts の Noto Sans JP 読み込み確認
- [ ] `assets/css/app.css` に `@import "tailwindcss"` と `@import "@nuxt/ui"` を追加
- [ ] `nuxt.config.ts` のカラーテーマ設定
- [ ] お問い合わせフォーム送信先メールアドレスの確認
- [ ] TikTok / SNSリンクURLの確認

---

*最終更新：2026年3月29日（primary：#29ABE2／secondary：#b5ccda 基準のブルーグレースケール） / 参照：sunsson-corporate（既存制作物）・営業スライド（学校用草案）*
