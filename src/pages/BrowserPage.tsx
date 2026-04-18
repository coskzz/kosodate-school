import { useLectureBrowser } from '../hooks/useLectureBrowser';
import { SearchInput } from '../components/browser/SearchInput';
import { FilterBar } from '../components/browser/FilterBar';
import { LectureGrid } from '../components/browser/LectureGrid';

export function BrowserPage() {
  const {
    searchText,
    setSearchText,
    selectedSection,
    setSelectedSection,
    selectedConcerns,
    toggleConcern,
    selectedAges,
    toggleAge,
    clearFilters,
    filtered,
  } = useLectureBrowser();

  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">講義を探す</h1>
          <p className="text-gray-500">全40講義をセクション・悩み・年齢でフィルタできます</p>
        </div>

        <div className="mb-6">
          <SearchInput value={searchText} onChange={setSearchText} />
        </div>

        <div className="lg:flex gap-8">
          {/* Sidebar filters */}
          <div className="lg:w-72 shrink-0 mb-6 lg:mb-0">
            <div className="bg-white rounded-2xl p-5 shadow-sm border border-coral-100 sticky top-20">
              <h2 className="font-bold text-gray-800 mb-4">絞り込み</h2>
              <FilterBar
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
                selectedConcerns={selectedConcerns}
                toggleConcern={toggleConcern}
                selectedAges={selectedAges}
                toggleAge={toggleAge}
                clearFilters={clearFilters}
              />
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-800">{filtered.length}</span> 件の講義
              </p>
            </div>
            <LectureGrid lectures={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}
