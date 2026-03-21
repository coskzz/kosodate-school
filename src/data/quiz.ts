import type { AgeGroup, ConcernKey, ValueKey } from '../types';

export interface AgeOption {
  value: AgeGroup;
  label: string;
  emoji: string;
}

export interface ConcernOption {
  value: ConcernKey;
  label: string;
}

export interface ValueOption {
  value: ValueKey;
  label: string;
  description: string;
}

export const ageOptions: AgeOption[] = [
  { value: '0-3', label: '0〜3歳', emoji: '👶' },
  { value: '4-6', label: '4〜6歳', emoji: '🧒' },
  { value: '7-10', label: '7〜10歳', emoji: '👦' },
  { value: '11+', label: '11歳以上', emoji: '🧑' },
];

export const mainConcernOptions: ConcernOption[] = [
  { value: 'emotion_control', label: '感情コントロール・かんしゃく' },
  { value: 'motivation', label: 'やる気・勉強への取り組み' },
  { value: 'defiance', label: '言うことを聞かない・反抗的' },
  { value: 'social', label: '友達関係・社会性' },
  { value: 'brain_development', label: '脳・知能を伸ばしたい' },
  { value: 'curiosity', label: '好奇心・探究心を育てたい' },
  { value: 'creativity', label: '創造性・クリエイティビティ' },
  { value: 'critical_thinking', label: '考える力・論理的思考' },
];

export const subConcernOptions: ConcernOption[] = [
  { value: 'sleep', label: '睡眠リズムの乱れ' },
  { value: 'nutrition', label: '食事・栄養' },
  { value: 'physical', label: '運動・身体の発達' },
  { value: 'screen_time', label: 'スクリーンタイム・ゲーム' },
  { value: 'praise_discipline', label: '褒め方・叱り方' },
];

export const valueOptions: ValueOption[] = [
  { value: 'autonomy', label: '自主性・自律性', description: '自分で考え、決める力を育てたい' },
  { value: 'evidence', label: '科学的根拠', description: '研究に基づいた方法を知りたい' },
  {
    value: 'communication',
    label: 'コミュニケーション',
    description: '親子の対話と関わり方を学びたい',
  },
  { value: 'health', label: '心身の健康', description: '体と心の健康的な発達をサポートしたい' },
  { value: 'future', label: '将来に役立つ力', description: '社会で活きるスキルを育てたい' },
  {
    value: 'digital',
    label: 'デジタル時代への備え',
    description: 'AI・テクノロジーとの向き合い方を学びたい',
  },
];
