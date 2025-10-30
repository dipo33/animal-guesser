import type { Answer, QuestionDto } from '@/model/data.ts';

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
};

export function defaultGame() {
  return {
    question: null,
    round: 1,
    questionHistory: [],
    state: 'in_progress',
  };
}
