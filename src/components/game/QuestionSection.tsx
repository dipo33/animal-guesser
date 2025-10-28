import AnimalGuessCardContent from '@/components/game/AnimalGuessCardContent.tsx';
import { Button } from '@/components/ui/button.tsx';
import { Card, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import type { AnimalDto, Answer, QuestionDto } from '@/model/data.ts';
import { Sparkles } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import QuestionCardContent from './QuestionCardContent.tsx';

type QuestionSectionProps = {
  progress: number;
  question?: QuestionDto;
  animal?: AnimalDto;
  onAnswer: (answer: Answer) => void;
};

export default function QuestionSection({
  progress,
  question,
  animal,
  onAnswer,
}: QuestionSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="col-span-12 lg:col-span-6 space-y-6">
      <Card className="rounded-3xl glass shadow-2xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white/90">
              {t('round', { round: 1 })}
            </CardTitle>
            <div className="text-xs text-white/60">
              {t('expected_rounds', { count: 20 })}
            </div>
          </div>
          <Progress
            value={progress}
            className="h-2 bg-white/10 [&>[data-slot=progress-indicator]]:bg-cyan-400/90"
          />
        </CardHeader>
        {animal ? (
          <AnimalGuessCardContent animal={animal} />
        ) : (
          <QuestionCardContent question={question} onAnswer={onAnswer} />
        )}
      </Card>

      {/* Suggestion / input row */}
      <div className="rounded-2xl glass p-4 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2 text-white/70 w-fit">
          <Sparkles className="h-4 w-4" /> {t('label.improve_me')}
        </div>
        <Input
          placeholder={t('placeholder.suggest_question')}
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 flex-1"
        />
        <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
          {t('button.submit')}
        </Button>
      </div>
    </section>
  );
}
