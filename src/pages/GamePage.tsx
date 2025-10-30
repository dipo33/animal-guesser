import { api } from '@/api/client.ts';
import GameExistsDialog from '@/components/game/GameExistsDialog.tsx';
import GameSidePanel from '@/components/game/GameSidePanel.tsx';
import QuestionHistory from '@/components/game/QuestionHistory.tsx';
import GameSection from '@/components/game/QuestionSection.tsx';
import type { Answer, GameMode, QuestionDto } from '@/model/data.ts';
import { defaultGame, type Game, type GameState } from '@/model/game.ts';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type GamePageProps = {
  gameMode: GameMode;
};

export default function GamePage({ gameMode }: GamePageProps) {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = React.useState(false);
  const [animal, setAnimal] = useState(null);
  const [game, setGame] = useState<Game>(() => defaultGame());

  const updateGame = (updates: Array<(g: Game) => Game>) => {
    setGame((g) => updates.reduce((acc, fn) => fn(acc), g));
  };

  const setQuestion =
    (question?: QuestionDto) =>
    (g: Game): Game => ({
      ...g,
      question,
    });

  const addQuestionToHistory =
    (question: QuestionDto, answer: Answer) =>
    (g: Game): Game => ({
      ...g,
      questionHistory: [
        {
          id: crypto.randomUUID(),
          question: question,
          answer: answer,
        },
        ...g.questionHistory,
      ],
    });

  const incrementRound =
    () =>
    (g: Game): Game => ({
      ...g,
      round: g.round + 1,
    });

  const setGameState =
    (state: GameState) =>
    (g: Game): Game => ({
      ...g,
      state: state,
    });

  const getQuestion = async () => {
    const response = await api.getQuestion();
    if (response.data?.type == 'new_question') {
      const question = response.data.question;
      updateGame([setQuestion(question)]);
    } else if (response.data?.type == 'no_questions_left') {
      updateGame([setGameState('failed')]);
    }
  };

  const answerQuestion = async (answer: Answer) => {
    const response = await api.answerQuestion(answer);
    updateGame([
      addQuestionToHistory(game.question!, answer),
      incrementRound(),
    ]);

    if (response.data?.type == 'answered') {
      await getQuestion();
    } else if (response.data?.type == 'animal_guess') {
      updateGame([setGameState('finished')]);
      setAnimal(response.data.animal);
    }
  };

  const startGame = async (force: boolean) => {
    const startResponse = await api.start(gameMode, force);
    if (startResponse.data?.type === 'new_game_started') {
      setGame(defaultGame());
      await getQuestion();
    } else if (startResponse.data?.type === 'game_already_exists') {
      setShowDialog(true);
    }
  };

  useEffect(() => {
    void startGame(false);
  }, []);

  return (
    <main className="mx-auto max-w-[1200px] px-6 py-6 grid grid-cols-12 gap-6 my-auto">
      <QuestionHistory history={game.questionHistory} />
      <GameSection
        progress={69}
        question={game.question}
        animal={animal}
        onAnswer={answerQuestion}
        round={game.round}
        expectedRounds={
          animal ? game.round : game.round >= 10 ? game.round + 1 : 10
        }
        gameState={game.state}
      />
      <GameSidePanel />
      <GameExistsDialog
        open={showDialog}
        onClosed={() => {
          void navigate('/');
        }}
        onContinue={() => {
          setShowDialog(false);
        }}
        onOverwrite={() => {
          setShowDialog(false);
          void startGame(true);
        }}
      />
    </main>
  );
}
