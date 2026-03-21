import type { Lecture } from '../../types';
import { SectionBadge } from './SectionBadge';
import { ConcernTag } from './ConcernTag';

interface Props {
  lecture: Lecture | null;
  onClose: () => void;
}

const AGE_LABELS: Record<string, string> = {
  '0-3': '0〜3歳',
  '4-6': '4〜6歳',
  '7-10': '7〜10歳',
  '11+': '11歳以上',
};

export function LectureModal({ lecture, onClose }: Props) {
  if (!lecture) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ×
        </button>
        <div className="mb-3">
          <SectionBadge sectionId={lecture.sectionId} size="md" />
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">{lecture.title}</h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{lecture.description}</p>
        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 mb-1">対象年齢</p>
          <div className="flex flex-wrap gap-1">
            {lecture.ageGroups.map((a) => (
              <span
                key={a}
                className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700"
              >
                {AGE_LABELS[a]}
              </span>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">関連する悩み</p>
          <div className="flex flex-wrap gap-1">
            {lecture.concerns.map((c) => (
              <ConcernTag key={c} concernKey={c} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
