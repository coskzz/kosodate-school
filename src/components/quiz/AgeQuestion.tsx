import { ageOptions } from '../../data/quiz';
import type { AgeGroup } from '../../types';

interface Props {
  selected: AgeGroup | null;
  onSelect: (a: AgeGroup) => void;
}

export function AgeQuestion({ selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">お子さんの年齢は？</h2>
      <p className="text-gray-500 mb-6">現在のお子さんの年齢に最も近いものを選んでください</p>
      <div className="grid grid-cols-2 gap-3">
        {ageOptions.map((opt) => (
          <button
            key={opt.value}
            onClick={() => onSelect(opt.value)}
            className={`p-4 rounded-2xl border-2 text-center transition ${
              selected === opt.value
                ? 'border-coral-400 bg-coral-50'
                : 'border-gray-200 bg-white hover:border-coral-200'
            }`}
          >
            <div className="text-3xl mb-1">{opt.emoji}</div>
            <div className="font-semibold text-gray-800">{opt.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
