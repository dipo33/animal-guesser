import { Badge } from '@/components/ui/badge.tsx';
import { History } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const history = [
  { q: 'Is it a mammal?', a: true },
  { q: 'Does it live in water?', a: false },
  { q: 'Is it larger than a dog?', a: false },
  { q: 'Can it fly?', a: false },
];

export default function QuestionHistory() {
  const { t } = useTranslation();

  return (
    <aside className="hidden lg:block col-span-3 glass rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-white/90">
          <History className="h-4 w-4" /> {t("question_history")}
        </div>
        <Badge variant="outline" className="border-white/15 text-white/70">
          {history.length}
        </Badge>
      </div>
      <div className="space-y-3 max-h-[68vh] overflow-y-auto pr-1">
        {history.map((h, i) => (
          <div
            key={i}
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
          >
            <div className="text-sm text-white/85">{h.q}</div>
            <div className="mt-2">
              <Badge
                className={`${
                  h.a ? 'bg-emerald-500/80' : 'bg-rose-500/80'
                } border-0`}
              >
                {h.a ? 'Yes' : 'No'}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
