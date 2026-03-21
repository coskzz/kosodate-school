import { useState } from 'react';
import type { QuizAnswer, ScoredLecture } from '../../types';
import { LectureCard } from '../browser/LectureCard';
import { useRecommendations } from '../../hooks/useRecommendations';

interface Props {
  answer: QuizAnswer;
  onReset: () => void;
}

export function QuizResults({ answer, onReset }: Props) {
  const { primary, secondary, rest } = useRecommendations(answer);
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      <div className="text-center mb-8">
        <div className="text-4xl mb-3">🎯</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">あなたへのおすすめ講義</h2>
        <p className="text-gray-500">
          選んだ条件をもとに、今最も役立つ講義を選びました
        </p>
      </div>

      {primary.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-indigo-600 rounded"></span>
            特におすすめの3講義
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {primary.map((sl: ScoredLecture, i: number) => (
              <LectureCard key={sl.lecture.id} lecture={sl.lecture} highlight rank={i + 1} />
            ))}
          </div>
        </section>
      )}

      {secondary.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-gray-400 rounded"></span>
            次におすすめ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {secondary.map((sl: ScoredLecture) => (
              <LectureCard key={sl.lecture.id} lecture={sl.lecture} />
            ))}
          </div>
        </section>
      )}

      {rest.length > 0 && (
        <section className="mb-8">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-500 hover:border-indigo-400 hover:text-indigo-600 transition"
            >
              もっと見る（残り{rest.length}講義）
            </button>
          ) : (
            <>
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-6 bg-gray-300 rounded"></span>
                その他の講義
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {rest.map((sl: ScoredLecture) => (
                  <LectureCard key={sl.lecture.id} lecture={sl.lecture} />
                ))}
              </div>
            </>
          )}
        </section>
      )}

      <div className="text-center mt-8">
        <button
          onClick={onReset}
          className="px-6 py-3 rounded-full border-2 border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
        >
          診断をやり直す
        </button>
      </div>
    </div>
  );
}
