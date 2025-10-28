import type { Answer, QuestionDto } from '@/model/data.ts';

export type HistoryEntry = {
  id: string;
  question: QuestionDto;
  answer: Answer;
};

export type Game = {
  question: QuestionDto | null;
  round: number;
  questionHistory: Array<HistoryEntry>;
};
