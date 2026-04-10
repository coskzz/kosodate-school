# 子育ての学校 講義検索アプリ — マニュアル兼引き継ぎ書

> 最終更新: 2026-04-10
> 本番URL: https://coskzz.github.io/kosodate-school/
> リポジトリ: https://github.com/coskzz/kosodate-school

---

## 1. プロジェクト概要

「子育ての学校」の全39講義から、ユーザーの悩みに合った講義をおすすめする検索アプリ。
ターゲットは30〜40代のママ層。

### 主な機能
- **診断（Quiz）**: 4ステップの質問に答えると、スコアリングでおすすめ講義を表示
- **講義一覧（Browse）**: キーワード検索 + セクション/年齢/悩みカテゴリでフィルタ
- **講義視聴リンク**: 各講義モーダルから Teachable の視聴ページへ直接遷移

---

## 2. 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | React 19 + TypeScript |
| ビルドツール | Vite 8 |
| スタイリング | Tailwind CSS 3 |
| ルーティング | react-router-dom 7（HashRouter） |
| ホスティング | GitHub Pages |
| フォント | Noto Sans JP（Google Fonts） |

### コマンド

```bash
npm run dev      # 開発サーバー起動（http://localhost:5173）
npm run build    # プロダクションビルド（dist/に出力）
npm run preview  # ビルド結果のプレビュー
npx tsc --noEmit # 型チェックのみ
```

---

## 3. ディレクトリ構成

```
kosodate-school/
├── index.html              # エントリHTML
├── vite.config.ts          # Vite設定（base: '/kosodate-school/'）
├── tailwind.config.js      # Tailwind設定（カスタムカラー定義）
├── package.json
├── Design.md               # デザインガイド（カラー・コンポーネント仕様）
├── MANUAL.md               # 本ファイル
├── public/
│   ├── favicon.svg
│   ├── icons.svg
│   └── characters/         # 星校長キャラクターイラスト（17枚）
│       ├── hoshi-reading.png      # ヒーローセクションで使用
│       ├── hoshi-reading2.png     # ヘッダーロゴで使用
│       ├── hoshi-listening.png    # 診断の流れStep1
│       ├── hoshi-sitting.png      # 診断の流れStep2
│       ├── hoshi-studying.png     # 診断の流れStep3
│       ├── hoshi-ok.png           # 診断の流れStep4
│       ├── hoshi-cheer.png        # 診断結果画面
│       ├── hoshi-highfive.png     # CTAセクション
│       ├── hoshi-mic.png          # 未使用（予備）
│       ├── hoshi-mic2.png         # 未使用（予備）
│       ├── hoshi-blackboard.png   # 未使用（予備）
│       ├── hoshi-whiteboard.png   # 未使用（予備）
│       ├── hoshi-fistpump.png     # 未使用（予備）
│       ├── hoshi-science.png      # 未使用（予備）
│       ├── hoshi-tablet.png       # 未使用（予備）
│       ├── hoshi-shoulder.png     # 未使用（予備）
│       └── hoshi-hug.png          # 未使用（予備）
└── src/
    ├── main.tsx             # Reactエントリ
    ├── index.css            # グローバルCSS（背景色・行間）
    ├── App.tsx              # ルーティング・ヘッダー・フッター
    ├── types/
    │   └── index.ts         # 全型定義
    ├── data/
    │   ├── lectures.ts      # 全39講義データ（タイトル・説明・年齢・悩み・キーワード）
    │   ├── lectureUrls.ts   # 講義ID → Teachable URL のマッピング
    │   ├── sections.ts      # 8セクション定義（タイトル・色）
    │   ├── concerns.ts      # 13の悩みカテゴリ定義
    │   └── quiz.ts          # 診断の選択肢定義
    ├── utils/
    │   └── recommend.ts     # スコアリングアルゴリズム
    ├── hooks/
    │   ├── useQuiz.ts           # 診断ステート管理
    │   ├── useRecommendations.ts # 診断結果の分類
    │   └── useLectureBrowser.ts  # 検索・フィルタロジック
    ├── pages/
    │   ├── HomePage.tsx     # トップページ
    │   ├── QuizPage.tsx     # 診断ページ
    │   └── BrowserPage.tsx  # 講義一覧ページ
    └── components/
        ├── quiz/
        │   ├── QuizShell.tsx       # 診断コンテナ
        │   ├── AgeQuestion.tsx     # Step1: 年齢選択
        │   ├── ConcernQuestion.tsx # Step2-4: 悩み・価値観選択
        │   ├── QuizProgress.tsx    # 進捗バー
        │   └── QuizResults.tsx     # 結果表示
        ├── browser/
        │   ├── SearchInput.tsx     # 検索ボックス
        │   ├── FilterBar.tsx       # フィルタサイドバー
        │   ├── LectureGrid.tsx     # 講義カードグリッド
        │   └── LectureCard.tsx     # 講義カード
        └── shared/
            ├── LectureModal.tsx    # 講義詳細モーダル（視聴リンク付き）
            ├── SectionBadge.tsx    # セクションラベル
            └── ConcernTag.tsx      # 悩みタグ
```

---

## 4. データ構造

### 4.1 Lecture型（src/types/index.ts）

```typescript
interface Lecture {
  id: string;          // "1-1", "2-3" 等
  sectionId: number;   // 1〜8
  title: string;       // 講義タイトル
  description: string; // 講義の説明文
  ageGroups: AgeGroup[];  // 対象年齢（'0-3','4-6','7-10','11+'）
  concerns: ConcernKey[]; // 関連する悩みカテゴリ
  keywords: string[];     // 検索用キーワード（10-13個/講義）
  url: string;            // Teachable視聴URL
}
```

### 4.2 セクション構成（全8セクション・39講義）

| Section | タイトル | 講義数 | バッジ色 |
|---------|---------|--------|---------|
| 1 | 脳と発達の科学 | 5 | rose |
| 2 | 感情と社会性の育て方 | 5 | pink |
| 3 | 生活習慣と健康 | 5 | emerald |
| 4 | やる気と自律性 | 5 | amber |
| 5 | 学びと好奇心 | 5 | sky |
| 6 | 創造性と表現力 | 5 | orange |
| 7 | 論理的思考と問題解決 | 4 | teal |
| 8 | デジタル時代の子育て | 5 | violet |

### 4.3 悩みカテゴリ（13種類、src/data/concerns.ts）

- emotion_control（感情コントロール）→ Section 1, 2
- motivation（やる気）→ Section 4, 5
- defiance（反抗的）→ Section 4
- sleep（睡眠）→ Section 3
- nutrition（食事・栄養）→ Section 3
- curiosity（好奇心）→ Section 5
- creativity（創造性）→ Section 6
- critical_thinking（考える力）→ Section 7
- social（社会性）→ Section 2, 5, 6
- screen_time（スクリーンタイム）→ Section 8
- praise_discipline（褒め方・叱り方）→ Section 4, 5
- brain_development（脳・知能）→ Section 1, 2
- physical（運動・身体）→ Section 3

---

## 5. スコアリングアルゴリズム（src/utils/recommend.ts）

診断結果のおすすめ順を決めるロジック：

### 5.1 年齢スコア（最大30点）
- 完全一致: 30点
- 隣接年齢グループ: 10点
- 不一致: 0点

### 5.2 悩みスコア（最大50点）
- 選択した悩みが講義に含まれる: 15点/件
- 「主な悩み」に該当: +10点ボーナス
- 上限50点でキャップ

### 5.3 多様性ペナルティ
- 同じセクションが3件以上連続: -15点
- ソート後に再適用して最終順位を決定

### 5.4 結果の分類（src/hooks/useRecommendations.ts）
- **primary**: スコア上位3件（ランクバッジ付き）
- **secondary**: 次の3件
- **rest**: 残り全件（「もっと見る」で展開）

---

## 6. デザインテーマ

Design.md に詳細あり。要点：

### カラーパレット
| 用途 | 色名 | Tailwindクラス |
|------|------|---------------|
| プライマリ | コーラルピンク | `coral-400`（#F27B7B） |
| プライマリ濃 | ディープコーラル | `coral-500`（#E0605E） |
| 背景 | クリームホワイト | `cream`（#FFF9F5） |
| 背景サブ | ベビーピンク | `baby-pink`（#FFF0ED） |
| テキスト主 | チャコール | `gray-800`（#3D3D3D寄り） |

### カスタムカラー定義場所
`tailwind.config.js` の `theme.extend.colors` にcoral/cream/baby-pinkを定義。

---

## 7. よくある変更作業

### 7.1 講義を追加する
1. `src/data/lectures.ts` に講義オブジェクトを追加
2. `src/data/lectureUrls.ts` にID→URLマッピングを追加
3. `src/data/sections.ts` の該当セクションの `lectureCount` を更新

### 7.2 講義のURLを変更する
`src/data/lectureUrls.ts` の該当IDの値を変更するだけ。

### 7.3 キャラクターイラストを追加・差し替える
1. 画像ファイルを `public/characters/` に配置
2. コード内で `${import.meta.env.BASE_URL}characters/ファイル名.png` で参照
   - 注意: `import.meta.env.BASE_URL` を必ず付ける（GitHub Pagesのサブパス対応）

### 7.4 カラーを変更する
1. `tailwind.config.js` のカスタムカラー定義を変更
2. 各コンポーネントの `coral-400` 等のクラスを検索して置換

### 7.5 セクションのバッジ色を変更する
`src/data/sections.ts` の各セクションの `color` フィールドを変更。
形式: `'bg-{color}-100 text-{color}-700'`

### 7.6 診断の質問を変更する
`src/data/quiz.ts` の各Options配列を編集。
- `mainConcernOptions`: Step2の選択肢（8件・排他選択）
- `subConcernOptions`: Step3の選択肢（5件・最大3つ複数選択）
- `valueOptions`: Step4の選択肢（6件・最大2つ複数選択）

---

## 8. デプロイ手順

### GitHub Pages（現在の方式）

1. コードを変更
2. `npm run build` でビルド
3. `git add` → `git commit` → `git push origin main`
4. GitHub Actions（またはgh-pages設定）が自動でデプロイ

### 重要な設定
- `vite.config.ts` の `base: '/kosodate-school/'` はリポジトリ名と一致させること
- HashRouterを使用（GitHub Pagesのルーティング制約対応）

---

## 9. 注意事項・既知の制約

- **画像はCleanShotスクショから手動コピーした**：元画像はCleanShotのmediaフォルダにあるが、アプリは`public/characters/`内のコピーを参照している
- **アプリ名は仮称**：「講義検索アプリ」は仮名。正式名称が決まったらヘッダー・フッター・index.htmlのtitleを更新すること
- **星校長キャラクターの使用許可**：議事録（2026-04-09 MTG）では「星校長に許可確認が必要」となっている。許可なしの場合はイラストを外す必要あり
- **Teachable URL**：全URLが `s-school5690.teachable.com/courses/8be56c521/lectures/` 配下。コースIDやプラットフォーム変更時は `lectureUrls.ts` を一括修正
- **予備イラスト10枚**：`public/characters/` に未使用イラストが10枚ある。今後セクションアイコンや各ページの装飾に使える

---

## 10. 関連ファイル（Obsidian Vault内）

| ファイル | 場所 |
|---------|------|
| 販売方針MTG議事録 | `99_Planning_2026Apl seminar/07_議事録_子育て図鑑_販売方針MTG_20260409.md` |
| 講義書き起こし | `90_「子育ての学校」講義コンテンツ書き起こし/` |
| デザインガイド | 本フォルダ内 `Design.md` |

---

## 11. Claude Code で作業する際のヒント

- 本プロジェクトのパスが長い。作業ディレクトリの指定例：
  ```
  /Users/hayashidahiroshisuke/Library/Mobile Documents/iCloud~md~obsidian/Documents/Obsidian Vault/20_projects/09_星さん出版記念/91_コンテンツ/kosodate-school
  ```
- `npm run build` でビルドが通るか、`npx tsc --noEmit` で型チェックが通るかを確認してからプッシュすること
- 画像の追加はClaude Codeでも可能：ユーザーがチャットに画像添付 → `cp`コマンドで`public/characters/`にコピー
- Tailwindのカスタムカラー（coral, cream, baby-pink）は`tailwind.config.js`で定義済み
