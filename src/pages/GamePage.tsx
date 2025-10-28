import { api } from '@/api/client.ts';
import GameSidePanel from '@/components/game/GameSidePanel.tsx';
import QuestionHistory from '@/components/game/QuestionHistory.tsx';
import GameSection from '@/components/game/QuestionSection.tsx';
import type { Answer, GameMode, QuestionDto } from '@/model/data.ts';
import type { Game } from '@/model/game.ts';
import React, { useEffect, useState } from 'react';

type GamePageProps = {
  gameMode: GameMode;
};

export default function GamePage({ gameMode }: GamePageProps) {
  const [animal, setAnimal] = useState(null);
  const [game, setGame] = useState<Game>({
    question: null,
    round: 1,
    questionHistory: [],
  });

  const setQuestion = (question?: QuestionDto) => {
    setGame((g) => ({
      ...g,
      question: question,
    }));
  };

  const addQuestionToHistory = (question: QuestionDto, answer: Answer) => {
    setGame((g) => {
      return {
        ...g,
        questionHistory: [
          {
            question: question,
            answer: answer,
            id: crypto.randomUUID(),
          },
          ...g.questionHistory,
        ],
      };
    });
  };

  const getQuestion = async () => {
    const response = await api.getQuestion();
    if (response.data?.type == 'new_question') {
      const question = response.data.question;
      setQuestion(question);
    }
  };

  const answerQuestion = async (answer: Answer) => {
    const response = await api.answerQuestion(answer);
    addQuestionToHistory(game.question!, answer);
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
  });

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-6 grid grid-cols-12 gap-6 my-auto">
      <QuestionHistory history={game.questionHistory} />
      <GameSection
        progress={69}
        question={game.question}
        animal={animal}
        onAnswer={answerQuestion}
      />
      <GameSidePanel />
    </main>
  );
}
