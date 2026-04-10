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
  const base = import.meta.env.BASE_URL;

  return (
    <div>
      <div className="text-center mb-8">
        <img
          src={`${base}characters/hoshi-cheer.png`}
          alt=""
          className="w-24 h-24 object-contain mx-auto mb-3"
        />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">あなたへのおすすめ講義</h2>
        <p className="text-gray-500">
          選んだ条件をもとに、今最も役立つ講義を選びました
        </p>
      </div>

      {primary.length > 0 && (
        <section className="mb-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="inline-block w-2 h-6 bg-coral-400 rounded"></span>
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
              className="w-full py-3 border-2 border-dashed border-coral-200 rounded-xl text-gray-500 hover:border-coral-400 hover:text-coral-500 transition"
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
          className="px-6 py-3 rounded-full border-2 border-coral-400 text-coral-500 font-semibold hover:bg-coral-50 transition"
        >
          診断をやり直す
        </button>
      </div>
    </div>
  );
}
