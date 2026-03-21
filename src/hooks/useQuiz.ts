import { useState } from 'react';
import type { AgeGroup, ConcernKey, ValueKey, QuizAnswer } from '../types';

export type QuizStep = 1 | 2 | 3 | 4 | 'result';

export function useQuiz() {
  const [step, setStep] = useState<QuizStep>(1);
  const [answer, setAnswer] = useState<QuizAnswer>({
    age: null,
    mainConcern: null,
    subConcerns: [],
    values: [],
  });

  const setAge = (age: AgeGroup) => setAnswer((a) => ({ ...a, age }));
  const setMainConcern = (c: ConcernKey) => setAnswer((a) => ({ ...a, mainConcern: c }));

  const toggleSubConcern = (c: ConcernKey) =>
    setAnswer((a) => {
      const exists = a.subConcerns.includes(c);
      if (exists) return { ...a, subConcerns: a.subConcerns.filter((x) => x !== c) };
      if (a.subConcerns.length >= 3) return a;
      return { ...a, subConcerns: [...a.subConcerns, c] };
    });

  const toggleValue = (v: ValueKey) =>
    setAnswer((a) => {
      const exists = a.values.includes(v);
      if (exists) return { ...a, values: a.values.filter((x) => x !== v) };
      if (a.values.length >= 2) return a;
      return { ...a, values: [...a.values, v] };
    });

  const next = () => {
    if (step === 1 && answer.age) setStep(2);
    else if (step === 2 && answer.mainConcern) setStep(3);
    else if (step === 3) setStep(4);
    else if (step === 4) setStep('result');
  };

  const back = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
    else if (step === 4) setStep(3);
    else if (step === 'result') setStep(4);
  };

  const reset = () => {
    setStep(1);
    setAnswer({ age: null, mainConcern: null, subConcerns: [], values: [] });
  };

  const canNext =
    (step === 1 && answer.age !== null) ||
    (step === 2 && answer.mainConcern !== null) ||
    step === 3 ||
    step === 4;

  return { step, answer, setAge, setMainConcern, toggleSubConcern, toggleValue, next, back, reset, canNext };
}
