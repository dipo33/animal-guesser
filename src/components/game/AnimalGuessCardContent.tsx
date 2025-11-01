import { Button } from '@/components/ui/button.tsx';
import { CardContent } from '@/components/ui/card.tsx';
import { useI18nToken } from '@/i18n/index.ts';
import type { AnimalDto } from '@/model/data.ts';
import { motion } from 'framer-motion';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export type AnimalGuessCardContentProps = {
  animal: AnimalDto;
  onIncorrectGuess: () => void;
  onCorrectGuess: () => void;
};

export default function AnimalGuessCardContent({
  animal,
  onIncorrectGuess,
  onCorrectGuess,
}: AnimalGuessCardContentProps) {
  const { t } = useTranslation();

  return (
    <CardContent>
      <motion.h1
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95 text-center py-6"
      >
        <Trans
          i18nKey="guess_prompt"
          values={{ name: useI18nToken(animal.token) }}
          components={[
            <span
              key="highlighted"
              className="text-cyan-400 [text-shadow:0_0_8px_rgba(34,211,238,0.55)] font-semibold"
            />,
          ]}
        />
        <span className="block text-base sm:text-lg font-normal text-white/70 italic mt-2">
          {animal.scientific_name}
        </span>
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-1">
        <Button
          size="lg"
          className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/100 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
          onClick={() => onCorrectGuess()}
        >
          {t('answer.yes')}
        </Button>

        <Button
          size="lg"
          variant="secondary"
          className="rounded-xl px-8 py-6 text-base bg-rose-500/80 hover:bg-rose-500/100 border border-white/20 text-white/90"
          onClick={() => onIncorrectGuess()}
        >
          {t('answer.no')}
        </Button>
      </div>
    </CardContent>
  );
}
