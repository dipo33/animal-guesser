import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import { CardContent } from '@/components/ui/card.tsx';
import TToken from '@/i18n/ttoken.tsx';
import type { Answer, QuestionDto } from '@/model/data.ts';
import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';

export type QuestionCardContent = {
  question?: QuestionDto;
  onAnswer: (answer: Answer) => void;
};

export default function QuestionCardContent({
  question,
  onAnswer,
}: QuestionCardContent) {
  const { t } = useTranslation();

  return (
    <CardContent>
      <motion.h1
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95 text-center py-6"
      >
        {question ? <TToken token={question.token} /> : t('thinking')}
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-1">
        <Button
          size="lg"
          className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/100 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
          onClick={() => onAnswer('yes')}
        >
          {t('button.yes')}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-xl px-8 py-6 text-base bg-rose-500/80 hover:bg-rose-500/100 border border-white/20 text-white/90"
          onClick={() => onAnswer('no')}
        >
          {t('button.no')}
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-xl px-8 py-6 text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
          onClick={() => onAnswer('unsure')}
        >
          {t('button.unsure')}
        </Button>
      </div>

      <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/70">
        <Badge
          variant="outline"
          className="border-white/15 text-white/70 px-3 py-1"
        >
          {t('traits_left', { count: 13 })}
        </Badge>
        <Badge
          variant="outline"
          className="border-white/15 text-white/70 px-3 py-1"
        >
          {t('confidence', { level: 42 })}
        </Badge>
      </div>
    </CardContent>
  );
}
