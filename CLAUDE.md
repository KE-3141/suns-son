# コーディングルール — Sun's Sonコーポレートサイト

## 1. コンポーネント設計：アトミックデザイン

`components/` はアトミックデザインで構成する。

```
components/
  atoms/        最小単位のUI（ボタン・アイコンなど）
  molecules/    atoms の組み合わせ（カード・見出しブロック・ページヒーローなど）
  organisms/    セクション・ヘッダー・フッターなどの複合コンポーネント
pages/          Nuxt の pages/ ディレクトリ
```

`nuxt.config.ts` で `pathPrefix: false` を設定しているため、
サブディレクトリに関わらずファイル名のみで参照できる。

```vue
<!-- OK: ディレクトリ名なしで使用 -->
<AppButton />         <!-- components/atoms/AppButton.vue -->
<SectionHeading />    <!-- components/molecules/SectionHeading.vue -->
<PageHero />          <!-- components/molecules/PageHero.vue -->
<CtaSection />        <!-- components/organisms/CtaSection.vue -->
```

新しいコンポーネントを追加する際は、適切な階層に配置すること。

---

## 2. コンポーネントの共通化（DRYルール）

**同じ見た目のマークアップを繰り返さない。** 同一パターンが2箇所以上に出現したら共通コンポーネントに切り出す。

### 抽出の判断基準

| 状況 | 対応 |
|---|---|
| 同じマークアップが2ファイル以上に出現する | 即座に共通コンポーネントへ |
| 1ファイル内に同パターンが2回以上出現する | `v-for` + データ配列に統一する |
| ページ末尾の CTA ブロック | `<CtaSection />` を使う（直書き禁止） |
| 内部ページのヒーローヘッダー | `<PageHero />` を使う（直書き禁止） |
| セクション見出し（h2 + 下線） | `<SectionHeading />` を使う（直書き禁止） |
| コンテンツ内の別ページ誘導リンク | `<AppButton variant="secondary" />` を使う（`NuxtLink` 直書き禁止） |
| ページ内の目次（`#id` へのリンク） | `<SlideLink />` を使う |
| 順序のない要点（約束・強み・取り組みなど） | `<PointList />` を使う |
| ページ下部の関連ページ誘導 | `<RelatedLinks />` を使う |
| 手順・流れ | `<FlowSteps />` を使う |

### 既存の共通コンポーネント

| コンポーネント | 用途 |
|---|---|
| `AppButton` | リンク・ボタン（`to` / `href` / なし で自動切替） |
| `SlideLink` | ページ内の目次リンク（`#id` へ。下線つき。矢印・動きなし） |
| `IconArrow` | 右矢印アイコン（トップのヒーローのボタンでのみ使用） |
| `RajanWalk` | 代表が歩いてきて立ち止まるイラスト（`rajan_walk.svg`。画面に入ってから読み込んで1回動く。高さは `class` で） |
| `IllustImage` | illustkit のイラスト（`src` は `/images/illust/...`。飾りなら alt なし。`eager` でヒーロー用） |
| `IconPhone` | 電話アイコン |
| `BilingualText` | ネパール語の文の下に日本語を小さく薄く添える（`text` に `{ ne, ja }`。`tag` で要素を指定。UKARU ONLINE ページ用） |
| `RubyText` | 「漢字[よみ]」の書き方の文をふりがなつきで表示（教材の特長の図で使う） |
| `SubHeading` | 小見出し h3/h4（左にロゴの青の線） |
| `TagBadge` | 小さな丸いラベル（primary / soft / outline / line） |
| `SectionHeading` | セクション見出し（h2 + 下にロゴの青と灰青の短い線。`inverse` で白） |
| `BusinessCard` | 画像つきの紹介ブロック（外枠なし。画像・小見出し・説明・箇条書きまたはリンク） |
| `StatRow` | 数字の帯（`font-num` の大きな数字。`note` に出典と時点） |
| `FlowSteps` | 流れ図（角の丸い箱を矢印でつなぐ。3つまでは横に並べ、4つ以上は箱が小さくならないよう縦に1行ずつ。`illust` でイラスト。`goalLast` で最後を塗る。`title`・`description` は `{ ne, ja }` も可。そのときは `goalLast` を使わない） |
| `ExamParts` | 試験の構成図（学科・実技、A・B・C などのパートを角の丸い箱で横に並べる。`value` で問題数などを大きく、`weight` で幅の比、`note` に合格の基準） |
| `BarList` | 横棒のグラフ（1系列だけ。primary の1色の細い棒、値は文字色で右に。`<table>` で組む。`note` に出典と時点） |
| `AccordionItem` | 折りたたみ（`details`。丸い板のイラスト + h2 + 短い説明 + 右に + / −。罫線で区切る。`id` の `#id` で来たら開く。開閉の動きなし） |
| `DocumentViewer` | 資料（PDF）を読むダイアログ（`dialog`。ページごとの画像を縦に並べて中でスクロール。`v-model:open`。Esc・背景・✕ で閉じる）。PDF はそのまま埋め込まず、ページを画像（webp）にして渡す（スマホで PDF を埋め込むと読めないため） |
| `InfoTable` | 項目と内容の表（会社概要・許可番号など） |
| `PointList` | 順序のない要点の一覧（左に見出し、右に説明。行を罫線で区切る。番号は付けない。`illust` で丸いイラスト。`link`（`to` / `href` + `label`）で説明の下に別ページへのボタン。`href` は新しいタブ） |
| `CheckList` | 箇条書き（四角の小さな印） |
| `SpeechBubble` | 代表の吹き出し（要所だけで使う） |
| `CommentBubble` | 一言そえる吹き出し（UKARU の `c.comment`。丸い顔 + 名前 + 吹き出し。`faceSrc` は illustkit のキャラクターの顔（`/images/illust/face_<who>.svg`）。`side` は学習者が右・それ以外が左。`tone` は line / primary） |
| `RelatedLinks` | ページ下部の関連ページ誘導 |
| `OnlineApplyButton` | UKARU ONLINE の受講申し込みボタン（Facebook のメッセージ。`note` で下の日本語の案内を出すか） |
| `PageHero` | 内部ページ共通ヒーロー（淡い青背景 + パンくず + h1 + 説明文。`parents` で親ページを上の階層から順に、`#description` スロットで説明文の位置に自由な中身、`illust` で右にイラスト、`:breadcrumb="false"` でパンくずなし） |
| `ServicesSection` | 事業内容（イラストの板 + 事業を1行ずつ。`title` で見出し変更） |
| `StepsSection` | 見出し + 流れ図 |
| `CtaSection` | ページ末尾 CTA（電話番号 + お問い合わせボタン + ラジャンのイラスト） |
| `AppHeader` | グローバルヘッダー |
| `AppFooter` | グローバルフッター |

### リンクの使い分け（`AppButton` / `SlideLink`）

別ページへ誘導するリンク（「人材紹介について」「教育の詳細はこちら」「会社概要をくわしく見る」など）は、
テキストリンクではなく **`AppButton variant="secondary"`**（白地 + primary の枠）にする。
お問い合わせなど主要なアクションは `AppButton`（primary）。

```vue
<AppButton to="/company/" variant="secondary">会社概要をくわしく見る</AppButton>
<!-- 要点の一覧など、小さく置く場合 -->
<AppButton to="/placement/" variant="secondary" size="sm">人材紹介について</AppButton>
```

`SlideLink` は、同じページ内の目次（`#id` へのリンク。例：教育ページの活動一覧）にだけ使う。

```vue
<SlideLink :to="`#${activity.key}`" class="text-primary font-bold">{{ activity.title }}</SlideLink>
```

- `to` prop: リンク先（必須）
- 文字色・太さ・余白は `class` で指定する

---

## 3. 固定値の管理

**コード内にデータを直接書かない。** 全ての共有データは composable に集約する。

| データ種別 | ファイル |
|---|---|
| 会社情報（社名・住所・電話番号など） | `composables/useSiteContent.ts` |
| ナビゲーション項目 | `composables/useSiteContent.ts` |
| 施工実績・強み・取引先などのコンテンツ一覧 | `composables/useSiteContent.ts` |

```vue
<script setup lang="ts">
const { company, navItems } = useSiteContent()
</script>

<template>
  <a :href="`tel:${company.telRaw}`">{{ company.tel }}</a>
</template>
```

### NG パターン

```vue
<!-- NG: 電話番号がコンポーネントにハードコードされている -->
<a href="tel:0336467450">03-3646-7450</a>

<!-- OK: composable から参照する -->
<a :href="`tel:${company.telRaw}`">{{ company.tel }}</a>
```

固定値の変更は `composables/useSiteContent.ts` 1ファイルで完結させる。

> **注意**: `useSiteConfig` という名前は `@nuxtjs/sitemap` が依存する
> `nuxt-site-config` パッケージと衝突する。このプロジェクトでは
> `useSiteContent` を使う。

---

## 4. TypeScript

- 全コンポーネントで `<script setup lang="ts">` を使用する
- Props は `interface` で型定義し `defineProps<Props>()` で宣言する
- オプションの Props には `withDefaults` でデフォルト値を設定する
- `any` は使わない。型が不明な場合は `unknown` を使う

```vue
<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
})
</script>
```

---

## 5. スタイリング

- **Tailwind CSS ユーティリティクラスのみ**使用する
- `style=""` 属性は Tailwind で表現できない場合のみ許容する
  （グリッドテンプレート・複雑な `background-image` など）
- デザインは UKARU の designkit（`マイドライブ/UKARU/_tools/designkit/themes/ukaru/`）に合わせる
- カラートークンは `assets/css/app.css` の `@theme` に定義済みのもの（designkit の tokens.json の写し）を使う
  - **青はロゴ（`simple_logo.svg`）の色に合わせる。** designkit の青（#0071BC）は使わない
    - `primary`（#29ABE2、ロゴの青）：ボタン（塗り・白ボタンの枠と文字）・帯・大きい文字（見出しの強調・大きい数字）・線・枠・印・面
    - `primary-deep`（#0078C2、鮮やかな濃い青。濁らせない）：小さい文字の青（ラベル・ナビ・流れ図の小見出しなど）と、小さい白い文字を載せる塗り（ラベル・フッター・流れ図の番号）。ロゴの青は小さい文字だと読みにくい（白とのコントラスト 2.6）
    - `primary-dark`（#0062AD）：`primary-deep` のホバー
    - `primary-light` / `primary-bg`（淡い背景）
    - `sub`（#B5CCDA、ロゴの灰青）：見出しの短い線の2本目・世界地図
  - **オレンジ（`accent` / `accent-text` / `bubble`）は使わない。** 色は青系だけでまとめる
  - `text` / `muted` / `rule`（罫線）/ `soft`（淡いグレー背景）
- フォント（`nuxt.config.ts` の `fonts` と `app.css` の `@theme`）
  - 日本語は見出しも本文も Zen Kaku Gothic New（スマートさ）。h1 は `font-black`、h2 以下は `font-bold`
  - 見出しの英字と数字は Outfit（`font-display` / `font-num`。少し丸みのあるポップさ）。h1〜h4 には `app.css` で自動で当たる
  - ネパール語は Noto Sans Devanagari（上のフォントにデーヴァナーガリーの字がないので、その字だけここで出る）
  - 丸ゴシック（Zen Maru Gothic など）は丸っこすぎるので使わない。Noto Sans JP など既定のフォントにも戻さない
  - 見出し（h1〜h4）のひらがなは少し小さく表示する（`app.css` の `Heading Kana`。`assets/fonts/` のひらがなだけのファイルに `size-adjust` をかけている）。見出しにひらがなを小さくするための `<span>` を書かない
- **使わないもの**: グラデーション、影（shadow / drop-shadow）、ぼかし（backdrop-blur。例外：ヘッダーのすりガラス）、絵文字、
  飾りだけのアイコン、
  イタリック、英語ラベルの大文字＋字間あけ、ダッシュ（—, ―）。記号は ○ ✕ → + を使う
- 区切りは 1px の罫線（`border-rule`）と余白で行う。白い文字は塗りの背景の上でだけ使う
- **AIっぽさを出さないための決まり**
  - 見出しの上や横に英語ラベル（「About Us」「Our Services」など）を付けない
  - 01 / 02 / 03 の番号は手順・時間順のものにだけ付ける（`FlowSteps`）。順序のない要点は `PointList`
  - 同じ形のカードを並べない。並ぶ情報は表（`InfoTable`・`<table>`）か罫線で区切った行にする
  - リンク・ボタンの文字に → を付けない（例外：トップのヒーローのお問い合わせボタン）
  - セクション背景を白と淡い青で交互にしない。背景は白。淡い青は `PageHero` と `CtaSection` だけ、
    primary の塗りは人材紹介ページの「完全成功報酬」の1か所だけ
  - コンテナは全セクション `max-w-6xl` で左端をそろえ、文章の行長は `max-w-3xl` で抑える
  - 動きは「スクロールで現れるフェード」と「操作に対する色の変化」だけ。ホバーでの移動は付けない
    - 例外：代表の歩くイラスト（`public/images/rajan_walk.svg`。`RajanWalk`）だけ、歩いてきて立ち止まる動きを1回付ける。
      使うのはコーポレートのトップのヒーローと、UKARU ONLINE の教師のページの「代表」の2か所だけ。
      SVG は `scripts/build_rajan_walk.py` で `rajan.svg` から作る（手で編集しない）。他のイラストには動きを付けない
    - 例外：UKARU ONLINE のトップのヒーロー（`OnlineHero`）の背景だけ、職業のイラストの列（`ukaruOnline.heroJobs`）を
      上下2列でゆっくり流す。下は右から左（`motion-safe:animate-marquee`）、上は逆向き（`motion-safe:animate-marquee-reverse`）。
      どちらも `app.css` の `@theme`
    - 例外：UKARU ONLINE のトップの「UKARU とは」のロゴの円（`public/images/ukaru/ukaru_mark.svg`）だけ、
      ゆっくり時計回りに回す（`motion-safe:animate-spin-slow`。`app.css` の `@theme`）。ほかのロゴは回さない
  - フェードは `plugins/reveal.ts`。ヒーローより下のセクションの中身には自動で付く（並んだ項目は時間差）。
    付けたくないセクションには `data-no-reveal` を付ける
  - ヒーロー（トップ・`PageHero`）は `v-reveal="遅れms"` で要素を上から順に出す。新しいフェードの CSS を個別に書かない
- **ポップさの出し方（イラストと丸み）**
  - ボタン・ラベルは `rounded-full`。イラストを置く板・流れ図の箱は `rounded-2xl` / `rounded-3xl`、
    丸い板（`rounded-full bg-primary-bg`）に人物のイラストを入れてもよい
  - 罫線の行・表・文章の囲みは角を丸めない（構造はカッチリ、飾りの部分だけ丸くする）
  - イラストは UKARU の illustkit（`マイドライブ/UKARU/_tools/illustkit/library/`）から選び、
    `public/images/illust/` に snake_case でコピーして `IllustImage` で表示する。ライブラリの SVG は直接編集しない
  - illustkit にない素材を新しくダウンロードするときは、候補を見せて OK をもらってから（作者は macrovector のみ）
  - Freepik の素材は表記（「Image by macrovector on Freepik」）の要否を確認してから公開する
  - 内容と関係のある絵だけを置く（その事業・職種・手順を表す絵）。イラストのためにセリフを作らない
- 数字には出典と時点を添える（`StatRow` の `note`）
- **マジックナンバー禁止**（`px-[37px]` のような任意値は原則不可。Tailwind のスケールに合わせる）
- レスポンシブは `md:` / `lg:` のブレークポイントで対応し、モバイルファーストで書く

---

## 6. 画像の扱い

- `public/images/` に配置し、`usePublicUrl` composable 経由で参照する
- **ヒーロー画像**（LCP対象）: `fetchpriority="high"` + `loading="eager"`
- **それ以外の画像**: `loading="lazy"`
- `alt` 属性は必ず記述する（装飾のみの画像は `alt=""`）
- 大容量 PNG は `@nuxt/image`（IPX）を経由せず直接 `<img>` タグで配信する
  （dev 環境でのメモリ不足・IPC切断を防ぐため）

```vue
<script setup lang="ts">
const imageUrl = usePublicUrl('/images/rebar_work.png')
</script>

<template>
  <!-- ヒーロー（LCP） -->
  <img :src="heroUrl" alt="施工現場" fetchpriority="high" loading="eager" />

  <!-- それ以外 -->
  <img :src="imageUrl" alt="鉄筋工事の施工現場" loading="lazy" />
</template>
```

---

## 7. SEO / Head の管理

各ページで `useHead` または `useSeoMeta` を呼び、ページ固有のタイトルと
description を設定する。

```vue
<script setup lang="ts">
useHead({ title: '平山工業の強み | 平山工業株式会社' })
useSeoMeta({
  description: '創業50年超の実績が培った安全・品質・対応力。平山工業の3つのこだわりをご紹介します。',
})
</script>
```

- タイトル形式: `ページ名 | 平山工業株式会社`
- トップページのみ: `平山工業株式会社 | 鉄筋工事・溶接工事の専門企業`

---

## 8. アクセシビリティ

- セマンティックな HTML 要素を使う（`section`, `nav`, `article`, `header`, `footer` など）
- 各ページの `<h1>` は1つだけ（`PageHero` が `h1` を出力するため、
  それ以降は `h2` 以下を使う）
- アイコンのみのボタン・リンクには `aria-label` を付ける
- SVG アイコンには `aria-hidden="true"` を付けて読み上げから除外する

```vue
<!-- NG: aria-label なしのアイコンボタン -->
<a href="tel:0336467450"><IconPhone /></a>

<!-- OK -->
<a href="tel:0336467450" :aria-label="`電話する ${company.tel}`">
  <IconPhone aria-hidden="true" />
</a>
```

---

## 9. ファイル・命名規則

| 対象 | 規則 | 例 |
|---|---|---|
| コンポーネント | PascalCase | `AppButton.vue`, `SectionHeading.vue` |
| Composable | camelCase, `use` プレフィックス | `useSiteContent.ts`, `usePublicUrl.ts` |
| ページ | kebab-case（Nuxt 規約） | `index.vue`, `about.vue` |
| 画像ファイル | snake_case | `hero_1.png`, `rebar_work.png` |

---

## 10. UKARU ONLINE のサイト（online.suns-son.jp）

UKARU ONLINE は別サイトとして `online/` に置く。ルート（コーポレートサイト）を土台（Nuxt の layer）にしているので、
部品・色・フォント・`useSiteContent` はそのまま共有する。

- ページは `online/pages/` のものだけを使う（`online/nuxt.config.ts` の `pages:extend` でコーポレートのページを外す）
- ヘッダー・フッターは `online/components/organisms/`（`OnlineHeader` / `OnlineFooter`）
- 本文はネパール語。下に小さく薄く日本語を添える（`BilingualText`。`PointList`・`SectionHeading` も `{ ne, ja }` を受け取る）
- 文言・教科・教材の内容は `useSiteContent` の `ukaruOnline` にまとめる。元の情報は Drive の `UKARU/Ukaru_Online`（読むだけ。編集しない）
- ネパール語の文章は公開前にネパール人の先生に確認してもらう
- 生徒の申し込みは Facebook のメッセージ（`OnlineApplyButton`）。企業向けは `RelatedLinks` でコーポレートサイトへ
- ページ：トップ・クラス（`classes`。クラスごとに `AccordionItem` で折りたたみ、中に どんな試験（`ExamParts`）/ 数字（`StatRow`・`BarList`。合格率・勉強時間の目安）/ 資格までの流れ（`FlowSteps`）/ UKARU のクラス）・教師（`teachers`）・教材（`materials`。上に特長（`materialFeatures`。罫線の行で左に文・右に N5 第1課から写した図）、下にチラ見せ（代表の `CommentBubble` + JLPT の主教材・漢字・単語は N5 第1課だけを `DocumentViewer` で見せる。画像は `public/images/ukaru/materials/`。ほかの課は載せない。介護・特定技能の教材は載せない）・UKARU について（`about`）
- 介護福祉士の専用のページは作らない（クラスのページの介護福祉士にまとめる。トップからは `/classes/#kaigo` で開いて見せる）
- 先生の名前は社内の時間割にしか載っていないので、公開の OK をもらうまで載せない
- コーポレートの旧 URL `/ukaru-online/` は Amplify のリダイレクトで online.suns-son.jp へ送る
- サイトをまたぐリンクは `useSiteContent` の `siteUrls`（`corporate` / `online`）から作る。URL を直書きしない
- ルートの `nuxt.config.ts` は `online/**` を読まない。パスは `here()` でルート基準にしている（layer から使われても壊れないように）
- Tailwind は `app.css` の `@source "../.."` でリポジトリ全体のクラスを拾う（消すと online のビルドで共通部品の見た目が崩れる）
- 手元：`npm run dev:online`（port 3001）。ビルド：`npm run generate:online` → `online/.output/public`
- Amplify：同じリポジトリから2つのアプリを作り、online のアプリにだけ環境変数 `SITE=online` を付ける（`amplify.yml` が切り替える）

---

## 11. ディレクトリ構成（参考）

```
suns-son/
  assets/css/app.css            カラートークン・フォント設定（@theme）
  composables/
    useSiteContent.ts           共有データ（会社情報・ナビ・コンテンツ）
    usePublicUrl.ts             public/ 画像 URL の解決
  plugins/
    reveal.ts                   スクロールで現れるフェード（v-reveal・自動付与）
  components/
    atoms/
      AppButton.vue             ボタン（variant: primary / secondary）
      IconArrow.vue             右矢印アイコン
      IconPhone.vue             電話アイコン
    molecules/
      SectionHeading.vue        セクション見出し（h2 + 下線）
      PointList.vue             順序のない要点の一覧
      PageHero.vue              内部ページ共通ヒーロー
    organisms/
      AppHeader.vue             グローバルヘッダー
      AppFooter.vue             グローバルフッター
      CtaSection.vue            ページ末尾 CTA（電話番号 + お問い合わせボタン）
  pages/                        各ページ（index / about / business / ...）
  online/                       UKARU ONLINE のサイト（ルートを layer にした別の Nuxt アプリ）
  public/images/                静的画像ファイル
  docs/                         設計ドキュメント
```
