import type { QuizStep } from '../../hooks/useQuiz';

interface Props {
  step: QuizStep;
}

const STEPS = [1, 2, 3, 4] as const;
const LABELS = ['お子さんの年齢', '主な悩み', 'その他の気になること', '大切にしたいこと'];

export function QuizProgress({ step }: Props) {
  const currentStep = step === 'result' ? 5 : step;

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                currentStep > s
                  ? 'bg-indigo-600 text-white'
                  : currentStep === s
                  ? 'bg-indigo-600 text-white ring-4 ring-indigo-200'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {currentStep > s ? '✓' : s}
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`flex-1 h-1 mx-1 rounded transition-colors ${
                  currentStep > s ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              />
            )}
          </div>
        ))}
      </div>
      {step !== 'result' && (
        <p className="text-center text-sm text-gray-500">
          ステップ {step}/4: {LABELS[step - 1]}
        </p>
      )}
    </div>
  );
}
