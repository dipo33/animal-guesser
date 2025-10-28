import { api } from '@/api/client.ts';
import GameSidePanel from '@/components/game/GameSidePanel.tsx';
import QuestionHistory from '@/components/game/QuestionHistory.tsx';
import GameSection from '@/components/game/QuestionSection.tsx';
import type { Answer, GameMode } from '@/model/data.ts';
import React, { useEffect, useState } from 'react';

type GamePageProps = {
  gameMode: GameMode;
};

export default function GamePage({ gameMode }: GamePageProps) {
  const [question, setQuestion] = useState(null);
  const [animal, setAnimal] = useState(null);

  const getQuestion = async () => {
    const response = await api.getQuestion();
    if (response.data?.type == 'new_question') {
      setQuestion(response.data.question);
    }
  };

  const answerQuestion = async (answer: Answer) => {
    const response = await api.answerQuestion(answer);
    if (response.data?.type == 'answered') {
      await getQuestion();
    } else if (response.data?.type == 'animal_guess') {
      setAnimal(response.data.animal);
    }
  };

  useEffect(() => {
    async function init() {
      await api.start(gameMode);
      const response = await api.getQuestion();
      if (response.data?.type == 'new_question') {
        setQuestion(response.data.question);
      }
    }

    void init();
  }, []);

  return (
    <main className="mx-auto max-w-[1200px] h-[70vh] max-h-[70vh] px-6 py-6 grid grid-cols-12 gap-6 my-auto">
      <QuestionHistory />
      <GameSection
        progress={69}
        question={question}
        animal={animal}
        onAnswer={answerQuestion}
      />
      <GameSidePanel />
    </main>
  );
}
