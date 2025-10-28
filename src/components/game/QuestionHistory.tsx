import { Badge } from '@/components/ui/badge.tsx';
import TToken from '@/i18n/ttoken.tsx';
import type { Answer } from '@/model/data.ts';
import type { HistoryEntry } from '@/model/game.ts';
import { AnimatePresence, motion } from 'framer-motion';
import { History } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type QuestionHistoryProps = {
  history: Array<HistoryEntry>;
};

export default function QuestionHistory({ history }: QuestionHistoryProps) {
  const { t } = useTranslation();

  return (
    <aside className="hidden lg:block col-span-3 glass rounded-2xl p-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-white/90">
          <History className="h-4 w-4" /> {t('question_history')}
        </div>
        <Badge variant="outline" className="border-white/15 text-white/70">
          {history.length}
        </Badge>
      </div>
      <div className="space-y-3 max-h-[60vh] h-[60vh] overflow-y-auto pr-1">
        <motion.div
          layout
          className="space-y-3 max-h-[60vh] h-[60vh] overflow-y-auto pr-1"
        >
          <AnimatePresence initial={false}>
            {history.map((entry, i) => (
              <motion.div
                key={entry.id}
                layout
                initial={i === 0 ? { opacity: 0, scale: 0.9, y: -8 } : false}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  type: 'spring',
                  stiffness: 550,
                  damping: 32,
                  mass: 0.5,
                }}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
              >
                <div className="text-sm text-white/85">
                  <TToken token={entry.question.token} />
                </div>
                <div className="mt-2">
                  <AnswerBadge answer={entry.answer} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/*{history.map(([question, answer], i) => (*/}
        {/*  <div*/}
        {/*    key={i}*/}
        {/*    className="rounded-xl border border-white/10 bg-white/[0.03] p-3"*/}
        {/*  >*/}
        {/*    <div className="text-sm text-white/85">*/}
        {/*      <TToken token={question.token} />*/}
        {/*    </div>*/}
        {/*    <div className="mt-2">*/}
        {/*      <AnswerBadge answer={answer} />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </aside>
  );
}

type AnswerBadgeProps = {
  answer: Answer;
};

function AnswerBadge({ answer }: AnswerBadgeProps) {
  const variants = {
    yes: { class: 'bg-emerald-500/80', label: 'Yes' },
    no: { class: 'bg-rose-500/80', label: 'No' },
    unsure: { class: 'bg-white/15', label: 'Not sure' },
  } as const;
  const { class: bgClass, label } = variants[answer];

  return <Badge className={`${bgClass} border-0`}>{label}</Badge>;
}
