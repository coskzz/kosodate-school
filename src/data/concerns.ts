import type { ConcernInfo } from '../types';

export const concerns: ConcernInfo[] = [
  { key: 'emotion_control', label: '感情コントロール・かんしゃく', primarySections: [1, 2] },
  { key: 'motivation', label: 'やる気・勉強への取り組み', primarySections: [4, 5] },
  { key: 'defiance', label: '言うことを聞かない・反抗的', primarySections: [4] },
  { key: 'sleep', label: '睡眠リズムの乱れ', primarySections: [3] },
  { key: 'nutrition', label: '食事・栄養', primarySections: [3] },
  { key: 'curiosity', label: '好奇心・探究心を育てたい', primarySections: [5] },
  { key: 'creativity', label: '創造性・クリエイティビティ', primarySections: [6] },
  { key: 'critical_thinking', label: '考える力・論理的思考', primarySections: [7] },
  { key: 'social', label: '友達関係・社会性', primarySections: [2, 5, 6] },
  { key: 'screen_time', label: 'スクリーンタイム・ゲーム', primarySections: [8] },
  { key: 'praise_discipline', label: '褒め方・叱り方', primarySections: [4, 5] },
  { key: 'brain_development', label: '脳・知能を伸ばしたい', primarySections: [1, 2] },
  { key: 'physical', label: '運動・身体の発達', primarySections: [3] },
];

export const concernMap = Object.fromEntries(concerns.map((c) => [c.key, c])) as Record<
  string,
  ConcernInfo
>;
