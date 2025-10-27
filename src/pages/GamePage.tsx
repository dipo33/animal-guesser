import GameSidePanel from '@/components/game/GameSidePanel.tsx';
import QuestionHistory from '@/components/game/QuestionHistory.tsx';
import GameSection from '@/components/game/QuestionSection.tsx';
import type { GameMode } from '@/model/data.ts';
import React from 'react';

type GamePageProps = {
  gameMode: GameMode;
};

export default function GamePage({ gameMode }: GamePageProps) {
  return (
    <main className="mx-auto max-w-[1200px] h-[70vh] max-h-[70vh] px-6 py-6 grid grid-cols-12 gap-6 my-auto">
      <QuestionHistory />
      <GameSection progress={69} />
      <GameSidePanel />
    </main>
  );
}
