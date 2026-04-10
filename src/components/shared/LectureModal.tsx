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
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          &times;
        </button>
        <div className="mb-3">
          <SectionBadge sectionId={lecture.sectionId} size="md" />
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-3">
          <span className="text-coral-400 mr-1">{lecture.id}：</span>{lecture.title}
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">{lecture.description}</p>

        {/* Lecture URL */}
        {lecture.url && (
          <a
            href={lecture.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full mb-4 px-4 py-3 bg-coral-400 text-white font-semibold rounded-full text-center justify-center hover:bg-coral-500 transition shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            この講義を視聴する
          </a>
        )}

        <div className="mb-3">
          <p className="text-xs font-semibold text-gray-500 mb-1">対象年齢</p>
          <div className="flex flex-wrap gap-1">
            {lecture.ageGroups.map((a) => (
              <span
                key={a}
                className="text-xs px-2 py-0.5 rounded-full bg-sky-100 text-sky-700"
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
