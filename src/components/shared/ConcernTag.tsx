import { concernMap } from '../../data/concerns';
import type { ConcernKey } from '../../types';

interface Props {
  concernKey: ConcernKey;
}

export function ConcernTag({ concernKey }: Props) {
  const info = concernMap[concernKey];
  if (!info) return null;
  return (
    <span className="inline-block text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
      {info.label}
    </span>
  );
}
