import { useQuiz } from '../../hooks/useQuiz';
import { QuizProgress } from './QuizProgress';
import { AgeQuestion } from './AgeQuestion';
import { MainConcernQuestion, SubConcernQuestion, ValueQuestion } from './ConcernQuestion';
import { QuizResults } from './QuizResults';

export function QuizShell() {
  const { step, answer, setAge, setMainConcern, toggleSubConcern, toggleValue, next, back, reset, canNext } =
    useQuiz();

  if (step === 'result') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <QuizResults answer={answer} onReset={reset} />
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <QuizProgress step={step} />

      <div className="mb-8">
        {step === 1 && <AgeQuestion selected={answer.age} onSelect={setAge} />}
        {step === 2 && (
          <MainConcernQuestion selected={answer.mainConcern} onSelect={setMainConcern} />
        )}
        {step === 3 && <SubConcernQuestion selected={answer.subConcerns} onToggle={toggleSubConcern} />}
        {step === 4 && <ValueQuestion selected={answer.values} onToggle={toggleValue} />}
      </div>

      <div className="flex gap-3">
        {step > 1 && (
          <button
            onClick={back}
            className="flex-1 py-3 rounded-full border-2 border-gray-300 text-gray-600 font-semibold hover:border-gray-400 transition"
          >
            戻る
          </button>
        )}
        <button
          onClick={next}
          disabled={!canNext}
          className={`flex-1 py-3 rounded-full font-semibold transition ${
            canNext
              ? 'bg-coral-400 text-white hover:bg-coral-500'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          {step === 4 ? '結果を見る' : '次へ'}
        </button>
      </div>
    </div>
  );
}
