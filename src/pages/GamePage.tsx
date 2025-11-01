import { api } from '@/api/client.ts';
import GameExistsDialog from '@/components/game/GameExistsDialog.tsx';
import GameSidePanel from '@/components/game/GameSidePanel.tsx';
import QuestionHistory from '@/components/game/QuestionHistory.tsx';
import GameSection from '@/components/game/QuestionSection.tsx';
import type { AnimalDto, Answer, GameMode } from '@/model/data.ts';
import {
  addQuestionToHistory,
  defaultGame,
  incrementRound,
  setFailureReason,
  setGameState,
  setQuestion,
  updateGame,
  type Game,
} from '@/model/game.ts';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type GamePageProps = {
  gameMode: GameMode;
};

export default function GamePage({ gameMode }: GamePageProps) {
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = React.useState(false);
  const [animal, setAnimal] = useState<AnimalDto | null>(null);
  const [game, setGame] = useState<Game>(() => defaultGame());

  const getQuestion = async () => {
    const response = await api.getQuestion();
    if (response.data?.type == 'new_question') {
      const question = response.data.question;
      updateGame(setGame, [setQuestion(question)]);
    } else if (response.data?.type == 'no_questions_left') {
      updateGame(setGame, [setGameState('failed'), setFailureReason('unsure')]);
    }
  };

  const answerQuestion = async (answer: Answer) => {
    const response = await api.answerQuestion(answer);
    updateGame(setGame, [
      addQuestionToHistory(game.question!, answer),
      incrementRound(),
    ]);

    if (response.data?.type == 'answered') {
      await getQuestion();
    } else if (response.data?.type == 'animal_guess') {
      updateGame(setGame, [setGameState('finished')]);
      setAnimal(response.data.animal);
    }
  };

  const startGame = useCallback(
    async (force: boolean) => {
      const startResponse = await api.start(gameMode, force);
      if (startResponse.data?.type === 'new_game_started') {
        setGame(defaultGame());
        setAnimal(null);
        await getQuestion();
      } else if (startResponse.data?.type === 'game_already_exists') {
        setAnimal(startResponse.data.game.animal);
        setGame({
          ...startResponse.data.game.question,
          question: startResponse.data.game.question,
          round: startResponse.data.game.round,
          state: startResponse.data.game.state.type,
          questionHistory: startResponse.data.game.question_history.map(
            (entry) => ({
              question: entry.question,
              answer: entry.answer,
              id: crypto.randomUUID(),
            }),
          ),
        });

        if (startResponse.data.game.question == null) {
          await getQuestion();
        }

        setShowDialog(true);
      }
    },
    [gameMode],
  );

  useEffect(() => {
    void startGame(false);
  }, [startGame]);

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
        onRestart={() => {
          void startGame(true);
        }}
        setGame={setGame}
        failureReason={game.failureReason}
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
