export type AgeGroup = '0-3' | '4-6' | '7-10' | '11+';

export type ConcernKey =
  | 'emotion_control'
  | 'motivation'
  | 'defiance'
  | 'sleep'
  | 'nutrition'
  | 'curiosity'
  | 'creativity'
  | 'critical_thinking'
  | 'social'
  | 'screen_time'
  | 'praise_discipline'
  | 'brain_development'
  | 'physical';

export type ValueKey =
  | 'autonomy'
  | 'evidence'
  | 'communication'
  | 'health'
  | 'future'
  | 'digital';

export interface Lecture {
  id: string;
  sectionId: number;
  title: string;
  description: string;
  ageGroups: AgeGroup[];
  concerns: ConcernKey[];
  keywords: string[];
  url: string;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  color: string;
  lectureCount: number;
}

export interface ConcernInfo {
  key: ConcernKey;
  label: string;
  primarySections: number[];
}

export interface QuizAnswer {
  age: AgeGroup | null;
  mainConcern: ConcernKey | null;
  subConcerns: ConcernKey[];
  values: ValueKey[];
}

export interface ScoredLecture {
  lecture: Lecture;
  score: number;
}
