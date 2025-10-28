import { Button } from '@/components/ui/button.tsx';
import { CardContent } from '@/components/ui/card.tsx';
import { motion } from 'framer-motion';
import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

export type FailureReason = 'unsure' | 'unknown';

export type AnimalGuessFailureCardContentProps = {
  reason: FailureReason;
  onRestart: () => void;
};

export default function AnimalGuessFailureCardContent({
  reason,
  onRestart,
}: AnimalGuessFailureCardContentProps) {
  const { t } = useTranslation();

  const titleKey = (() => {
    switch (reason) {
      case 'unsure':
        return 'fail.simple.title.unsure';
      default:
        return 'fail.simple.title.unknown';
    }
  })();

  const subtitleKey = (() => {
    switch (reason) {
      case 'unsure':
        return 'fail.simple.subtitle.unsure';
      default:
        return 'fail.simple.subtitle.unknown';
    }
  })();

  return (
    <CardContent>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="flex flex-col items-center text-center py-6"
      >
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95">
          <Trans i18nKey={titleKey} />
        </h1>
        <p className="mt-3 text-white/75 max-w-prose">
          <Trans i18nKey={subtitleKey} />
        </p>

        <div className="mt-6">
          <Button
            size="lg"
            className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/100 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
            onClick={onRestart}
          >
            {t('button.try_again')}
          </Button>
        </div>
      </motion.div>
    </CardContent>
  );
}
