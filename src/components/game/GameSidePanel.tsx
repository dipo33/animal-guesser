import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function GameSidePanel() {
  const { t } = useTranslation();

  return (
    <aside className="hidden lg:block col-span-3 glass rounded-2xl p-4 space-y-4">
      <div className="text-white/90 font-medium">{t("current_guess")}</div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <div className="text-2xl font-semibold">🦝 Raccoon</div>
        <div className="text-xs text-white/70 mt-1">
          Confidence 42% • updates live
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Badge className="bg-emerald-500/80 border-0">Nocturnal</Badge>
          <Badge className="bg-cyan-500/80 border-0">Omnivore</Badge>
          <Badge className="bg-white/15 text-white border-white/10">
            North America
          </Badge>
        </div>
      </div>

      <div className="text-white/90 font-medium">Shortcuts</div>
      <div className="grid grid-cols-2 gap-3">
        <Button
          variant="secondary"
          className="bg-white/10 text-white/90 border border-white/20 hover:bg-white/20"
        >
          Back
        </Button>
        <Button
          variant="secondary"
          className="bg-white/10 text-white/90 border border-white/20 hover:bg-white/20"
        >
          Skip
        </Button>
        <Button className="bg-cyan-400/90 text-black hover:bg-cyan-300/100">
          Guess
        </Button>
        <Button
          variant="secondary"
          className="bg-rose-500/80  text-white/90 border border-white/20 hover:bg-rose-500/100"
        >
          Give up
        </Button>
      </div>
    </aside>
  );
}
