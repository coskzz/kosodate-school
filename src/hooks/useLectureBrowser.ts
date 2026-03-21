import { useState, useMemo } from 'react';
import { lectures } from '../data/lectures';
import type { Lecture, ConcernKey, AgeGroup } from '../types';

export function useLectureBrowser() {
  const [searchText, setSearchText] = useState('');
  const [selectedSection, setSelectedSection] = useState<number | null>(null);
  const [selectedConcerns, setSelectedConcerns] = useState<ConcernKey[]>([]);
  const [selectedAges, setSelectedAges] = useState<AgeGroup[]>([]);

  const toggleConcern = (c: ConcernKey) =>
    setSelectedConcerns((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c],
    );

  const toggleAge = (a: AgeGroup) =>
    setSelectedAges((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));

  const clearFilters = () => {
    setSearchText('');
    setSelectedSection(null);
    setSelectedConcerns([]);
    setSelectedAges([]);
  };

  const filtered = useMemo<Lecture[]>(() => {
    const q = searchText.toLowerCase().trim();
    return lectures.filter((l) => {
      if (selectedSection && l.sectionId !== selectedSection) return false;
      if (selectedConcerns.length > 0 && !selectedConcerns.some((c) => l.concerns.includes(c)))
        return false;
      if (selectedAges.length > 0 && !selectedAges.some((a) => l.ageGroups.includes(a)))
        return false;
      if (q) {
        const text = [l.title, l.description, ...l.keywords].join(' ').toLowerCase();
        if (!text.includes(q)) return false;
      }
      return true;
    });
  }, [searchText, selectedSection, selectedConcerns, selectedAges]);

  return {
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
  };
}
