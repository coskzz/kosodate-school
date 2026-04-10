import { sections } from '../../data/sections';
import { concerns } from '../../data/concerns';
import type { AgeGroup, ConcernKey } from '../../types';

interface Props {
  selectedSection: number | null;
  setSelectedSection: (s: number | null) => void;
  selectedConcerns: ConcernKey[];
  toggleConcern: (c: ConcernKey) => void;
  selectedAges: AgeGroup[];
  toggleAge: (a: AgeGroup) => void;
  clearFilters: () => void;
}

const AGE_OPTIONS: { value: AgeGroup; label: string }[] = [
  { value: '0-3', label: '0〜3歳' },
  { value: '4-6', label: '4〜6歳' },
  { value: '7-10', label: '7〜10歳' },
  { value: '11+', label: '11歳以上' },
];

export function FilterBar({
  selectedSection,
  setSelectedSection,
  selectedConcerns,
  toggleConcern,
  selectedAges,
  toggleAge,
  clearFilters,
}: Props) {
  const hasFilters =
    selectedSection !== null || selectedConcerns.length > 0 || selectedAges.length > 0;

  return (
    <div className="space-y-4">
      {/* Section filter */}
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-2">セクション</p>
        <div className="flex flex-wrap gap-2">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSelectedSection(selectedSection === s.id ? null : s.id)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                selectedSection === s.id
                  ? 'bg-coral-400 text-white border-coral-400'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-coral-300'
              }`}
            >
              {s.id}. {s.title}
            </button>
          ))}
        </div>
      </div>

      {/* Age filter */}
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-2">対象年齢</p>
        <div className="flex flex-wrap gap-2">
          {AGE_OPTIONS.map((a) => (
            <button
              key={a.value}
              onClick={() => toggleAge(a.value)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                selectedAges.includes(a.value)
                  ? 'bg-sky-500 text-white border-sky-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-sky-300'
              }`}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>

      {/* Concern filter */}
      <div>
        <p className="text-sm font-semibold text-gray-600 mb-2">悩みカテゴリ</p>
        <div className="flex flex-wrap gap-2">
          {concerns.map((c) => (
            <button
              key={c.key}
              onClick={() => toggleConcern(c.key)}
              className={`text-xs px-3 py-1.5 rounded-full border transition ${
                selectedConcerns.includes(c.key)
                  ? 'bg-pink-500 text-white border-pink-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-pink-300'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {hasFilters && (
        <button
          onClick={clearFilters}
          className="text-sm text-coral-500 underline hover:text-coral-600"
        >
          フィルタをクリア
        </button>
      )}
    </div>
  );
}
