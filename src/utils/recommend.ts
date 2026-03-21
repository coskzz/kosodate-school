import type { Lecture, AgeGroup, ConcernKey, ScoredLecture } from '../types';

const AGE_ORDER: AgeGroup[] = ['0-3', '4-6', '7-10', '11+'];

function ageScore(lectureAges: AgeGroup[], selectedAge: AgeGroup): number {
  if (lectureAges.includes(selectedAge)) return 30;
  const selectedIdx = AGE_ORDER.indexOf(selectedAge);
  const hasAdjacent = lectureAges.some((a) => Math.abs(AGE_ORDER.indexOf(a) - selectedIdx) === 1);
  return hasAdjacent ? 10 : 0;
}

function concernScore(
  lectureConcerns: ConcernKey[],
  mainConcern: ConcernKey | null,
  subConcerns: ConcernKey[],
): number {
  let score = 0;
  const allSelected = [...(mainConcern ? [mainConcern] : []), ...subConcerns];
  for (const c of allSelected) {
    if (lectureConcerns.includes(c)) {
      score += 15;
      if (c === mainConcern) score += 10;
    }
  }
  return Math.min(score, 50);
}

export function scoreLectures(
  lectures: Lecture[],
  age: AgeGroup | null,
  mainConcern: ConcernKey | null,
  subConcerns: ConcernKey[],
): ScoredLecture[] {
  if (!age && !mainConcern && subConcerns.length === 0) return [];

  const rawScores = lectures.map((lecture) => ({
    lecture,
    score:
      (age ? ageScore(lecture.ageGroups, age) : 0) +
      concernScore(lecture.concerns, mainConcern, subConcerns),
  }));

  // Sort descending
  rawScores.sort((a, b) => b.score - a.score);

  // Apply diversity penalty: if same section appears 3+ consecutive times, penalize
  const result: ScoredLecture[] = [];
  const sectionCounts: Record<number, number> = {};

  for (const item of rawScores) {
    const sid = item.lecture.sectionId;
    sectionCounts[sid] = (sectionCounts[sid] || 0) + 1;
    const penalty = sectionCounts[sid] >= 3 ? 15 : 0;
    result.push({ lecture: item.lecture, score: Math.max(0, item.score - penalty) });
  }

  // Re-sort after penalty
  result.sort((a, b) => b.score - a.score);
  return result;
}
