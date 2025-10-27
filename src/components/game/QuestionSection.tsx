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
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import React from 'react';

type QuestionSectionProps = {
  progress: number;
  question?: string;
};

export default function QuestionSection({
  progress,
  question,
}: QuestionSectionProps) {
  return (
    <section className="col-span-12 lg:col-span-6 space-y-6">
      <Card className="rounded-3xl glass shadow-2xl">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-white/90">Round 1</CardTitle>
            <div className="text-xs text-white/60">~ 20 questions</div>
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
            {question ?? 'Thinking ...'}
          </motion.h1>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-1">
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/100 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
            >
              Yes
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 py-6 text-base bg-rose-500/80 hover:bg-rose-500/100 border border-white/20 text-white/90"
            >
              No
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-xl px-8 py-6 text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
            >
              Not sure
            </Button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/70">
            <Badge
              variant="outline"
              className="border-white/15 text-white/70 px-3 py-1"
            >
              Traits left: 13
            </Badge>
            <Badge
              variant="outline"
              className="border-white/15 text-white/70 px-3 py-1"
            >
              Confidence: 42%
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Suggestion / input row */}
      <div className="rounded-2xl glass p-4 flex flex-col sm:flex-row items-center gap-3">
        <div className="flex items-center gap-2 text-white/70 w-fit">
          <Sparkles className="h-4 w-4" /> Improve me:
        </div>
        <Input
          placeholder="Suggest a new question…"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/40 flex-1"
        />
        <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
          Submit
        </Button>
      </div>
    </section>
  );
}
