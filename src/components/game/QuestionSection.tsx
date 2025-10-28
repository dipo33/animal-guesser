import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Progress } from '@/components/ui/progress.tsx';
import TToken from '@/i18n/ttoken.tsx';
import type { QuestionDto } from '@/model/data.ts';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type QuestionSectionProps = {
  progress: number;
  question?: QuestionDto;
};

export default function QuestionSection({
  progress,
  question,
}: QuestionSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="col-span-12 lg:col-span-6 space-y-6">
      <Card className="rounded-3xl glass shadow-2xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white/90">{t("round", { round: 1 })}</CardTitle>
            <div className="text-xs text-white/60">{t("expected_rounds", { count: 20 })}</div>
          </div>
          <Progress
            value={progress}
            className="h-2 bg-white/10 [&>[data-slot=progress-indicator]]:bg-cyan-400/90"
          />
        </CardHeader>
        <CardContent>
          <motion.h1
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95 text-center py-6"
          >
            {question ? <TToken token={question.token} /> : 'Thinking ...'}
          </motion.h1>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-1">
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/100 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
            >
              {t('button.yes')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 py-6 text-base bg-rose-500/80 hover:bg-rose-500/100 border border-white/20 text-white/90"
            >
              {t('button.no')}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 py-6 text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
            >
              {t('button.unsure')}
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/70">
            <Badge
              variant="outline"
              className="border-white/15 text-white/70 px-3 py-1"
            >
              {t("traits_left", { "count": 13 })}
            </Badge>
            <Badge
              variant="outline"
              className="border-white/15 text-white/70 px-3 py-1"
            >
              {t("confidence", { "level": 42 })}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Suggestion / input row */}
      <div className="rounded-2xl glass p-4 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2 text-white/70 w-fit">
          <Sparkles className="h-4 w-4" /> {t("label.improve_me")}
        </div>
        <Input
          placeholder={t("placeholder.suggest_question")}
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 flex-1"
        />
        <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
          {t("button.submit")}
        </Button>
      </div>
    </section>
  );
}
