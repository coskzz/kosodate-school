import { useMemo } from 'react';
import type { QuizAnswer } from '../types';
import { lectures } from '../data/lectures';
import { scoreLectures } from '../utils/recommend';

export function useRecommendations(answer: QuizAnswer) {
  return useMemo(() => {
    const scored = scoreLectures(lectures, answer.age, answer.mainConcern, answer.subConcerns);
    return {
      primary: scored.slice(0, 3),
      secondary: scored.slice(3, 6),
      rest: scored.slice(6),
    };
  }, [answer.age, answer.mainConcern, answer.subConcerns]);
}
