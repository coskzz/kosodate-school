import { mainConcernOptions, subConcernOptions, valueOptions } from '../../data/quiz';
import type { ConcernKey, ValueKey } from '../../types';

interface MainConcernProps {
  selected: ConcernKey | null;
  onSelect: (c: ConcernKey) => void;
}

export function MainConcernQuestion({ selected, onSelect }: MainConcernProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">最も気になる悩みは？</h2>
      <p className="text-gray-500 mb-6">1つだけ選んでください</p>
      <div className="space-y-2">
        {mainConcernOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`w-full p-4 rounded-xl border-2 text-left transition ${
              selected === opt.value
                ? 'border-coral-400 bg-coral-50'
                : 'border-gray-200 bg-white hover:border-coral-200'
            }`}
          >
            <span className="font-medium text-gray-800">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

interface SubConcernProps {
  selected: ConcernKey[];
  onToggle: (c: ConcernKey) => void;
}

export function SubConcernQuestion({ selected, onToggle }: SubConcernProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">その他の気になること</h2>
      <p className="text-gray-500 mb-6">当てはまるものをすべて選んでください（最大3つ）</p>
      <div className="space-y-2">
        {subConcernOptions.map((opt) => {
          const isSelected = selected.includes(opt.value);
          const isDisabled = !isSelected && selected.length >= 3;
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              disabled={isDisabled}
              className={`w-full p-4 rounded-xl border-2 text-left transition ${
                isSelected
                  ? 'border-coral-400 bg-coral-50'
                  : isDisabled
                  ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-coral-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-coral-400 bg-coral-400' : 'border-gray-300'
                  }`}
                >
                  {isSelected && <span className="text-white text-xs">✓</span>}
                </div>
                <span className="font-medium">{opt.label}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

interface ValueProps {
  selected: ValueKey[];
  onToggle: (v: ValueKey) => void;
}

export function ValueQuestion({ selected, onToggle }: ValueProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">大切にしたいことは？</h2>
      <p className="text-gray-500 mb-6">当てはまるものを2つまで選んでください</p>
      <div className="space-y-2">
        {valueOptions.map((opt) => {
          const isSelected = selected.includes(opt.value);
          const isDisabled = !isSelected && selected.length >= 2;
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              disabled={isDisabled}
              className={`w-full p-4 rounded-xl border-2 text-left transition ${
                isSelected
                  ? 'border-coral-400 bg-coral-50'
                  : isDisabled
                  ? 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                  : 'border-gray-200 bg-white hover:border-coral-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                    isSelected ? 'border-coral-400 bg-coral-400' : 'border-gray-300'
                  }`}
                >
                  {isSelected && <span className="text-white text-xs">✓</span>}
                </div>
                <div>
                  <div className="font-semibold text-gray-800">{opt.label}</div>
                  <div className="text-sm text-gray-500">{opt.description}</div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
