import type { Lecture } from '../types';

export const lectures: Lecture[] = [
  // Section 1: 脳と発達の科学
  {
    id: '1-1',
    sectionId: 1,
    title: '子どもの脳の発達と「育てどき」を知る',
    description:
      '生後から思春期にかけての脳の発達段階を科学的に解説します。シナプスの形成と刈り込み、敏感期の仕組みを理解し、それぞれの時期に合った関わり方を学びます。',
    ageGroups: ['0-3', '4-6', '7-10', '11+'],
    concerns: ['brain_development'],
    keywords: ['脳', '発達', '神経', 'シナプス', '敏感期', '科学'],
  },
  {
    id: '1-2',
    sectionId: 1,
    title: 'ストレスが子どもの脳に与える影響',
    description:
      '慢性的なストレスが子どもの脳発達に与えるダメージと、それを防ぐための安全基地の作り方を学びます。コルチゾールと海馬の関係をわかりやすく解説します。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['brain_development', 'emotion_control'],
    keywords: ['ストレス', '脳', '安全基地', 'コルチゾール', '愛着'],
  },
  {
    id: '1-3',
    sectionId: 1,
    title: '前頭前野を育てる —— 実行機能の発達',
    description:
      '計画性・衝動制御・ワーキングメモリなど「実行機能」の発達を解説します。前頭前野を鍛えるための日常的な練習方法を具体的に紹介します。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['brain_development', 'emotion_control', 'critical_thinking'],
    keywords: ['前頭前野', '実行機能', '衝動', '計画', 'ワーキングメモリ'],
  },
  {
    id: '1-4',
    sectionId: 1,
    title: 'ミラーニューロンと共感力の育て方',
    description:
      'ミラーニューロンシステムの仕組みと、共感力・思いやりの発達メカニズムを解説します。親の行動が子どもの共感力に与える影響を科学的に学びます。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['brain_development', 'social', 'emotion_control'],
    keywords: ['ミラーニューロン', '共感', '思いやり', '模倣', '社会性'],
  },
  {
    id: '1-5',
    sectionId: 1,
    title: '睡眠と脳の発達 —— なぜ眠りが重要か',
    description:
      '睡眠中の脳の記憶統合プロセスと、深い眠りが子どもの知能・感情発達に果たす役割を解説します。年齢別の必要睡眠時間と質の良い睡眠習慣づくりを学びます。',
    ageGroups: ['0-3', '4-6', '7-10', '11+'],
    concerns: ['sleep', 'brain_development'],
    keywords: ['睡眠', '脳', '記憶', '成長ホルモン', '睡眠習慣'],
  },

  // Section 2: 感情と社会性の育て方
  {
    id: '2-1',
    sectionId: 2,
    title: 'かんしゃく・泣き叫びに冷静に対処する',
    description:
      '幼児のかんしゃく（タントラム）の神経学的メカニズムを理解し、効果的な対処法を学びます。叫んでいる子どもに寄り添いながら落ち着かせる具体的なステップを紹介します。',
    ageGroups: ['0-3', '4-6'],
    concerns: ['emotion_control'],
    keywords: ['かんしゃく', '泣き叫び', '感情', 'タントラム', '落ち着かせる'],
  },
  {
    id: '2-2',
    sectionId: 2,
    title: '感情コーチング —— 気持ちに名前をつける',
    description:
      '感情語彙を豊かにすることで子どもの感情調整能力を高める「感情コーチング」の方法を学びます。日常会話で感情について話し合うためのロールモデルの示し方も解説します。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['emotion_control', 'brain_development'],
    keywords: ['感情', 'コーチング', '感情語彙', '気持ち', '共感'],
  },
  {
    id: '2-3',
    sectionId: 2,
    title: '友達関係のトラブル —— 親はどう関わるか',
    description:
      '子ども同士のけんか・仲間外れ・いじめの問題に対し、親としてどのように介入すべきかを解説します。子どもの問題解決能力を育てながらサポートするバランスを学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['social', 'emotion_control'],
    keywords: ['友達', 'トラブル', 'けんか', '仲間外れ', '介入'],
  },
  {
    id: '2-4',
    sectionId: 2,
    title: '愛着形成と安全基地の作り方',
    description:
      '安定した愛着関係が子どもの心理的安全性に与える影響を、アタッチメント理論をもとに解説します。忙しい親でも実践できる安全基地の作り方を具体的に紹介します。',
    ageGroups: ['0-3', '4-6'],
    concerns: ['brain_development', 'emotion_control', 'social'],
    keywords: ['愛着', 'アタッチメント', '安全基地', '信頼', '絆'],
  },
  {
    id: '2-5',
    sectionId: 2,
    title: '思春期の感情爆発を理解する',
    description:
      '思春期における脳の変化（扁桃体優位の状態）が感情の激しさを生む理由を科学的に説明します。反抗期の子どもとの関係を壊さずに対話を続けるための具体的なコミュニケーション術を学びます。',
    ageGroups: ['11+'],
    concerns: ['emotion_control', 'defiance', 'social'],
    keywords: ['思春期', '反抗期', '感情', '扁桃体', '対話'],
  },

  // Section 3: 生活習慣と健康
  {
    id: '3-1',
    sectionId: 3,
    title: '幼児期の睡眠リズムを整える',
    description:
      '0〜6歳の子どもの睡眠サイクルと概日リズムの特性を解説します。寝かしつけの困難・夜泣き・早起きなど、よくある睡眠問題への科学的なアプローチを学びます。',
    ageGroups: ['0-3', '4-6'],
    concerns: ['sleep'],
    keywords: ['睡眠', '寝かしつけ', '夜泣き', 'リズム', '概日リズム'],
  },
  {
    id: '3-2',
    sectionId: 3,
    title: '学齢期の睡眠と学習パフォーマンス',
    description:
      '学校に通う子どもにとって睡眠がいかに学力・集中力・感情調整に影響するかを解説します。宿題・習い事・就寝時間のバランスをどう取るかを具体的に考えます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['sleep', 'motivation'],
    keywords: ['睡眠', '学習', '集中力', 'パフォーマンス', '就寝'],
  },
  {
    id: '3-3',
    sectionId: 3,
    title: '子どもの食事と栄養 —— 脳と体を育てる食',
    description:
      '子どもの脳発達に欠かせない栄養素（DHA・鉄・亜鉛など）と食事の工夫を解説します。好き嫌い・食欲不振・偏食などの食の問題への実践的な対処法も学びます。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['nutrition', 'brain_development'],
    keywords: ['食事', '栄養', 'DHA', '偏食', '食育', '鉄', '亜鉛'],
  },
  {
    id: '3-4',
    sectionId: 3,
    title: '運動と脳 —— 体を動かすことの重要性',
    description:
      '有酸素運動が子どもの脳の認知機能・記憶力・情動調節に与えるポジティブな影響を解説します。日常生活で運動を取り入れる工夫と、外遊びの重要性について学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['physical', 'brain_development'],
    keywords: ['運動', '外遊び', '体', '認知', 'BDNF', '身体発達'],
  },
  {
    id: '3-5',
    sectionId: 3,
    title: '粗大運動・微細運動の発達と支援',
    description:
      '歩く・走る・跳ぶなどの粗大運動と、ハサミ・鉛筆を使う微細運動の発達段階を解説します。発達の遅れが気になる場合のチェックポイントと家庭でできるサポートも紹介します。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['physical'],
    keywords: ['粗大運動', '微細運動', '発達', '運動', 'バランス'],
  },

  // Section 4: やる気と自律性
  {
    id: '4-1',
    sectionId: 4,
    title: '内発的動機づけを育てる —— やる気の科学',
    description:
      '外からのご褒美が内発的なやる気を壊すメカニズム（アンダーマイニング効果）を解説します。子どもの「やってみたい」という気持ちを育て、維持するための具体的な環境づくりを学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['motivation'],
    keywords: ['やる気', '動機づけ', '内発的', 'ご褒美', '自律'],
  },
  {
    id: '4-2',
    sectionId: 4,
    title: '褒め方の科学 —— 努力vs才能',
    description:
      '「頭がいい」と褒めることより「努力」を認めることが子どもの成長マインドセットを育てる理由をキャロル・ドゥエックの研究と共に解説します。効果的な褒め方の具体例を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['praise_discipline', 'motivation'],
    keywords: ['褒める', '努力', 'グロースマインドセット', 'ドゥエック', 'フィードバック'],
  },
  {
    id: '4-3',
    sectionId: 4,
    title: '叱り方・伝え方 —— 効果的なしつけの科学',
    description:
      '罰と報酬のみに依存したしつけの限界を解説し、子どもの理解と協力を引き出す「自然な結果」アプローチを学びます。タイムアウト・論理的帰結など具体的な手法も比較します。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['praise_discipline', 'defiance'],
    keywords: ['叱る', 'しつけ', 'タイムアウト', '罰', '自然な結果'],
  },
  {
    id: '4-4',
    sectionId: 4,
    title: '反抗期を乗り越える —— 「NO」の意味を理解する',
    description:
      '2歳の「イヤイヤ期」と思春期反抗期の神経発達的な背景を解説します。子どもの「NO」を自律性の芽生えとして肯定的に捉え直し、力の対決を避ける関わり方を学びます。',
    ageGroups: ['0-3', '4-6', '11+'],
    concerns: ['defiance', 'emotion_control'],
    keywords: ['反抗期', 'イヤイヤ', '自律性', '協力', '対立'],
  },
  {
    id: '4-5',
    sectionId: 4,
    title: '自分でできる子を育てる —— 自己効力感の育て方',
    description:
      '子どもの自己効力感（「自分にはできる」という確信）を育てるアルバート・バンデューラの理論を解説します。適切な挑戦・失敗経験・モデリングを通じた自己効力感の高め方を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['motivation', 'defiance'],
    keywords: ['自己効力感', 'バンデューラ', '自立', '挑戦', '失敗'],
  },

  // Section 5: 学びと好奇心
  {
    id: '5-1',
    sectionId: 5,
    title: '好奇心の火を消さない親の関わり方',
    description:
      '生まれながらの好奇心が学齢期に失われる理由を解説します。「なぜ？」「どうして？」という問いを歓迎する家庭の雰囲気づくりと、親が実践できる探究心を育てる対話法を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['curiosity', 'motivation'],
    keywords: ['好奇心', '探究心', '問い', '発見', '学び'],
  },
  {
    id: '5-2',
    sectionId: 5,
    title: '読み聞かせの力 —— 言語発達と想像力',
    description:
      '読み聞かせが子どもの語彙力・読解力・共感力・想像力に与える多面的な効果を解説します。年齢別の効果的な本の選び方と、対話型読み聞かせのテクニックを学びます。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['curiosity', 'brain_development', 'social'],
    keywords: ['読み聞かせ', '絵本', '語彙', '言語', '想像力'],
  },
  {
    id: '5-3',
    sectionId: 5,
    title: '勉強嫌いを克服する —— 学習の動機づけ',
    description:
      '宿題をやらない・勉強が嫌いな子どもへの対処法を、学習動機づけの理論から解説します。自己決定理論（SDT）に基づいた「自律的学習者」を育てる具体的なアプローチを学びます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['motivation', 'praise_discipline'],
    keywords: ['勉強嫌い', '宿題', '学習', '動機', '自律'],
  },
  {
    id: '5-4',
    sectionId: 5,
    title: '遊びと学びの統合 —— プレイ・ベースド・ラーニング',
    description:
      '遊びが子どもの最高の学び場であることを示す研究を解説します。「遊び」と「勉強」を分離せず統合的に捉えるプレイ・ベースド・ラーニングの考え方と実践方法を学びます。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['curiosity', 'creativity', 'motivation'],
    keywords: ['遊び', '学び', 'プレイ', '統合', '探索'],
  },
  {
    id: '5-5',
    sectionId: 5,
    title: '友達から学ぶ —— 協同学習と社会的知性',
    description:
      '子ども同士の協同学習が個人学習より効果的な場合を解説します。グループ活動・教え合い・協力ゲームを通じた社会的知性と学力の同時発達を促す方法を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['social', 'curiosity'],
    keywords: ['協同学習', '友達', '社会性', '教え合い', '協力'],
  },

  // Section 6: 創造性と表現力
  {
    id: '6-1',
    sectionId: 6,
    title: '創造性の育て方 —— 環境とプロセス',
    description:
      '創造性は生まれつきの才能ではなく育てられることを示す研究を解説します。子どもの創造性を伸ばす家庭環境の整え方と、親がすべきでない「創造性を殺す」行動を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['creativity'],
    keywords: ['創造性', '環境', 'プロセス', '発散思考', '実験'],
  },
  {
    id: '6-2',
    sectionId: 6,
    title: 'アートで育つ力 —— 芸術活動の多面的効果',
    description:
      '絵画・工作・音楽・ダンスなどの芸術活動が子どもの感情発達・認知能力・自己表現に与える効果を解説します。家庭でできるアートプロジェクトのアイデアも紹介します。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['creativity', 'emotion_control'],
    keywords: ['アート', '芸術', '絵画', '音楽', '表現', '工作'],
  },
  {
    id: '6-3',
    sectionId: 6,
    title: '音楽と言語・数学的思考の関係',
    description:
      '音楽教育が言語発達・数学的思考・空間認識能力を高めるメカニズムを解説します。楽器を習わせることのメリットと、音楽的な環境を家庭で作る方法を学びます。',
    ageGroups: ['0-3', '4-6', '7-10', '11+'],
    concerns: ['creativity', 'brain_development'],
    keywords: ['音楽', '楽器', '言語', '数学', '空間認識'],
  },
  {
    id: '6-4',
    sectionId: 6,
    title: '想像力と物語る力を育てる',
    description:
      'ごっこ遊び・物語創作・ファンタジーへの没頭が子どもの想像力・共感力・思考力に与える影響を解説します。家族でストーリーテリングを楽しむ具体的な方法を紹介します。',
    ageGroups: ['0-3', '4-6', '7-10'],
    concerns: ['creativity', 'social', 'curiosity'],
    keywords: ['想像力', 'ごっこ遊び', '物語', 'ファンタジー', 'ストーリー'],
  },
  {
    id: '6-5',
    sectionId: 6,
    title: 'デザイン思考を子どもに —— 問題解決の創造的アプローチ',
    description:
      'デザイン思考の5ステップ（共感・定義・着想・試作・評価）を子どもに教える方法を解説します。日常の問題をデザイン思考で解決するプロジェクト型学習の実践例を学びます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['creativity', 'critical_thinking'],
    keywords: ['デザイン思考', '問題解決', '試作', '評価', 'プロジェクト'],
  },

  // Section 7: 論理的思考と問題解決
  {
    id: '7-1',
    sectionId: 7,
    title: '批判的思考力を育てる —— 「なぜ？」を問い続ける',
    description:
      '批判的思考（クリティカルシンキング）の基礎と、それを子どもに育てる方法を解説します。ソクラテス式対話・反論の練習・複数の視点を考える習慣づけの具体的な方法を学びます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['critical_thinking', 'curiosity'],
    keywords: ['批判的思考', '論理', 'ソクラテス', '議論', '多角的'],
  },
  {
    id: '7-2',
    sectionId: 7,
    title: '数学的思考力の育て方 —— 数の感覚から論理へ',
    description:
      '数学嫌いを生まない数の感覚の育て方と、論理的思考の基礎となる数学的マインドを解説します。日常生活の中で数学的思考を育てる遊びや対話の具体例を紹介します。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['critical_thinking', 'motivation'],
    keywords: ['数学', '論理', '数', '思考', '計算'],
  },
  {
    id: '7-3',
    sectionId: 7,
    title: 'プログラミング的思考 —— 分解・抽象化・アルゴリズム',
    description:
      'プログラミング教育の本質である「プログラミング的思考」（分解・パターン認識・抽象化・アルゴリズム）を子どもに教える方法を解説します。コンピューターなしでも始められる活動を紹介します。',
    ageGroups: ['7-10', '11+'],
    concerns: ['critical_thinking', 'screen_time'],
    keywords: ['プログラミング', 'アルゴリズム', '分解', '抽象化', 'コーディング'],
  },
  {
    id: '7-4',
    sectionId: 7,
    title: '科学的思考を育てる —— 仮説・実験・検証',
    description:
      '科学的思考プロセス（観察・仮説・実験・検証）を子どもが楽しく体験する家庭科学実験を紹介します。「なぜそうなるの？」という疑問を一緒に探求する親の関わり方を学びます。',
    ageGroups: ['4-6', '7-10', '11+'],
    concerns: ['critical_thinking', 'curiosity'],
    keywords: ['科学', '実験', '仮説', '探究', '検証'],
  },

  // Section 8: デジタル時代の子育て
  {
    id: '8-1',
    sectionId: 8,
    title: 'スクリーンタイムの科学 —— 適切な使い方と制限',
    description:
      'スクリーンタイムが子どもの発達に与える影響の最新研究を解説します。年齢別の推奨時間、コンテンツの質による違い、そして実際に機能するスクリーンタイムルールの作り方を学びます。',
    ageGroups: ['0-3', '4-6', '7-10', '11+'],
    concerns: ['screen_time', 'brain_development'],
    keywords: ['スクリーンタイム', 'メディア', 'テレビ', 'タブレット', 'ルール'],
  },
  {
    id: '8-2',
    sectionId: 8,
    title: 'ゲームと子どもの発達 —— 依存と可能性の間',
    description:
      'ゲームが子どもに与える影響（依存リスク・認知的メリット・社会性への影響）を科学的に解説します。ゲームとの健全な関係を築くための家庭ルールづくりと対話のコツを学びます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['screen_time', 'motivation'],
    keywords: ['ゲーム', '依存', '動画', 'YouTube', 'ルール'],
  },
  {
    id: '8-3',
    sectionId: 8,
    title: 'SNSと思春期 —— オンラインの友達関係と自己イメージ',
    description:
      'SNSが思春期の子どもの自己イメージ・メンタルヘルス・友達関係に与える影響を解説します。オンラインとオフラインのバランス、ネットいじめへの対処法、デジタルリテラシーを学びます。',
    ageGroups: ['11+'],
    concerns: ['screen_time', 'social', 'emotion_control'],
    keywords: ['SNS', 'Instagram', '自己イメージ', 'ネットいじめ', '思春期'],
  },
  {
    id: '8-4',
    sectionId: 8,
    title: 'AIの時代に育てる力 —— 人間にしかできないことを磨く',
    description:
      'AIが進化する社会で子どもが必要とする力（創造性・批判的思考・感情知性・協働）を解説します。AIツールを教育に活用しながら、人間固有の力を育てる親としての戦略を考えます。',
    ageGroups: ['7-10', '11+'],
    concerns: ['critical_thinking', 'creativity', 'screen_time'],
    keywords: ['AI', '人工知能', '未来', 'スキル', 'ChatGPT'],
  },
  {
    id: '8-5',
    sectionId: 8,
    title: 'デジタルリテラシーを子どもに教える',
    description:
      'フェイクニュースの見分け方・プライバシー保護・オンライン安全・情報リテラシーなど、現代の子どもに必要なデジタルスキルを年齢に合わせて教える方法を解説します。',
    ageGroups: ['7-10', '11+'],
    concerns: ['screen_time', 'critical_thinking'],
    keywords: ['デジタルリテラシー', 'フェイクニュース', 'プライバシー', '情報', 'オンライン安全'],
  },
];
