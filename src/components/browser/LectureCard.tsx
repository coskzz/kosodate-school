import { useState } from 'react';
import type { Lecture } from '../../types';
import { SectionBadge } from '../shared/SectionBadge';
import { ConcernTag } from '../shared/ConcernTag';
import { LectureModal } from '../shared/LectureModal';

interface Props {
  lecture: Lecture;
  highlight?: boolean;
  rank?: number;
}

const AGE_LABELS: Record<string, string> = {
  '0-3': '0〜3歳',
  '4-6': '4〜6歳',
  '7-10': '7〜10歳',
  '11+': '11歳以上',
};

export function LectureCard({ lecture, highlight, rank }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={`text-left rounded-2xl p-5 shadow-sm border transition hover:shadow-md hover:-translate-y-0.5 w-full ${
          highlight
            ? 'border-indigo-300 bg-indigo-50'
            : 'border-gray-200 bg-white'
        }`}
      >
        {rank && (
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold">
              {rank}
            </span>
            <span className="text-xs text-indigo-600 font-medium">おすすめ</span>
          </div>
        )}
        <div className="mb-2">
          <SectionBadge sectionId={lecture.sectionId} />
        </div>
        <h3 className="font-bold text-gray-900 mb-2 leading-snug">
          <span className="text-indigo-500 mr-1">{lecture.id}：</span>{lecture.title}
        </h3>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{lecture.description}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          {lecture.ageGroups.map((a) => (
            <span key={a} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
              {AGE_LABELS[a]}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1">
          {lecture.concerns.slice(0, 3).map((c) => (
            <ConcernTag key={c} concernKey={c} />
          ))}
        </div>
      </button>
      <LectureModal lecture={open ? lecture : null} onClose={() => setOpen(false)} />
    </>
  );
}
