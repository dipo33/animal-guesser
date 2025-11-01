import type { FailureReason } from '@/components/game/AnimalGuessFailureCardContent.tsx';
import type { Answer, QuestionDto } from '@/model/data.ts';
import type React from 'react';

export type HistoryEntry = {
  id: string;
  question: QuestionDto;
  answer: Answer;
};

export type GameState = 'in_progress' | 'finished' | 'failed';

export type Game = {
  question: QuestionDto | null;
  round: number;
  questionHistory: Array<HistoryEntry>;
  state: GameState;
  failureReason?: FailureReason;
};

export function defaultGame(): Game {
  return {
    question: null,
    round: 1,
    questionHistory: [],
    state: 'in_progress',
    failureReason: undefined,
  };
}

export const updateGame = (
  setGame: React.Dispatch<React.SetStateAction<Game>>,
  updates: Array<(g: Game) => Game>,
) => {
  setGame((g) => updates.reduce((acc, fn) => fn(acc), g));
};

export const setQuestion =
  (question: QuestionDto | null) =>
  (g: Game): Game => ({
    ...g,
    question,
  });

export const addQuestionToHistory =
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

export const incrementRound =
  () =>
  (g: Game): Game => ({
    ...g,
    round: g.round + 1,
  });

export const setGameState =
  (state: GameState) =>
  (g: Game): Game => ({
    ...g,
    state: state,
  });

export const setFailureReason =
  (reason?: FailureReason) =>
  (g: Game): Game => ({
    ...g,
    failureReason: reason,
  });
