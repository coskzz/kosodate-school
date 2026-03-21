import type { Lecture } from '../../types';
import { LectureCard } from './LectureCard';

interface Props {
  lectures: Lecture[];
}

export function LectureGrid({ lectures }: Props) {
  if (lectures.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg mb-2">講義が見つかりません</p>
        <p className="text-sm">フィルタ条件を変えて試してみてください</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {lectures.map((l) => (
        <LectureCard key={l.id} lecture={l} />
      ))}
    </div>
  );
}
