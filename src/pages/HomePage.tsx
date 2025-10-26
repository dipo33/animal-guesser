import React from 'react';
import '@/globals.css';
import FeatureCard from '@/components/cards/FeatureCard.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card.tsx';
import { Input } from '@/components/ui/input.tsx';
import { motion } from 'framer-motion';
import { Play, Skull } from 'lucide-react';

function onStartClassic() {}
function onStartQuick() {}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-10 my-auto">
      <Card className="rounded-3xl glass shadow-2xl overflow-hidden p-0">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(1200px 400px at 20% 0%, rgba(34,211,238,0.25), transparent), radial-gradient(800px 300px at 90% 100%, rgba(244,63,94,0.18), transparent)',
          }}
        />
        <div className="relative rounded-3xl overflow-hidden">
          <div className="relative grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-4xl md:text-5xl font-semibold tracking-tight text-white/95"
              >
                Think of an animal.
                <br /> We'll find it in ~20 questions.
              </motion.h1>
              <p className="mt-4 text-white/70 max-w-prose">
                Answer simple <span className="text-white">Yes/No</span>{' '}
                questions. Our guesser narrows down possibilities with every
                tap.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  size="lg"
                  className="rounded-xl px-7 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/90 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
                  onClick={onStartClassic}
                >
                  <Play className="mr-2 h-5 w-5" /> Start Classic
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-xl px-7 py-6 text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
                  onClick={onStartQuick}
                >
                  <Skull className="mr-2 h-5 w-5" /> Expert Mode
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs ">
                <Badge
                  variant="outline"
                  className="border-white/15 text-white/70 px-3 py-1"
                >
                  No login needed
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/15 text-white/70 px-3 py-1"
                >
                  Multilingual
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/15 text-white/70 px-3 py-1"
                >
                  Open-source backend
                </Badge>
              </div>
            </div>
            <div className="p-8 md:p-12 border-t md:border-t-0 md:border-l border-white/10 bg-white/5">
              <div className="grid sm:grid-cols-3 gap-4">
                <FeatureCard
                  title="1. Think"
                  desc="Pick any animal. Keep it secret."
                />
                <FeatureCard title="2. Answer" desc="Tap Yes/No/Not sure." />
                <FeatureCard
                  title="3. Guess"
                  desc="We predict with confidence."
                />
              </div>

              <div className="mt-6">
                <div className="text-white/80 font-medium mb-3">
                  Trending animals
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    '🦊 Fox',
                    '🦁 Lion',
                    '🐼 Panda',
                    '🦉 Owl',
                    '🐬 Dolphin',
                    '🦘 Kangaroo',
                  ].map((t) => (
                    <Badge
                      key={t}
                      className="bg-white/10 border border-white/15 text-white/85 rounded-xl px-3 py-1"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className="glass rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-white/90">
              Continue where you left
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 text-sm">
            Resume your last session instantly.
            <div className="mt-4 flex gap-3">
              <Button className="bg-cyan-400/90 hover:bg-cyan-300/90 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]">Resume</Button>
              <Button variant="outline" className="border-white/20 bg-white/10 text-white/90 hover:text-white/90 hover:bg-white/20">Discard</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-white/90">Language</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 text-sm">
            Play in your language. Switch anytime from the top bar.
            <div className="mt-3 flex flex-wrap gap-2">
              {['ENG', 'CZE', 'SVK'].map((l) => (
                <Badge
                  key={l}
                  className="bg-white/10 border border-white/15 text-white/85 rounded-xl px-3 py-1"
                >
                  {l}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="glass rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-white/90">Contribute</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 text-sm">
            Suggest new questions or animals to improve the model.
            <div className="mt-3 flex gap-2">
              <Input
                placeholder="Suggest a question…"
                className="bg-white/5 border-white/15 text-white placeholder:text-white/40"
              />
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
                Send
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
