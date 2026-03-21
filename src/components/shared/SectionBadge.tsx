import { sections } from '../../data/sections';

interface Props {
  sectionId: number;
  size?: 'sm' | 'md';
}

export function SectionBadge({ sectionId, size = 'sm' }: Props) {
  const section = sections.find((s) => s.id === sectionId);
  if (!section) return null;
  const sizeClass = size === 'sm' ? 'text-xs px-2 py-0.5' : 'text-sm px-3 py-1';
  return (
    <span className={`inline-block rounded-full font-medium ${section.color} ${sizeClass}`}>
      Section {sectionId}: {section.title}
    </span>
  );
}
