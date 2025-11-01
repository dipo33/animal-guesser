/* eslint-disable */
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { motion } from 'framer-motion';
import {
  ChevronDown,
  Globe,
  History,
  Home,
  Languages,
  PawPrint,
  Play,
  RotateCcw,
  Settings,
  Sparkles,
  Volume2,
  VolumeX,
  Zap,
} from 'lucide-react';
import React from 'react';

// NOTE: This is a visual mockup for inspiration – wire it to your Rust backend later.
// Design system variables
const palette = {
  bg: 'from-[#0a0f1f] via-[#080d19] to-[#060b14]',
  accent: '#22d3ee', // cyan-400
  accentSoft: '#0ea5b8',
  danger: '#f43f5e',
  success: '#10b981',
  glass: 'backdrop-blur-xl bg-white/5 border border-white/10',
  text: '#E6EAF2',
  subtext: '#9BA6B2',
};

const languages = ['EN', 'CS', 'DE', 'ES']; // example set

type Screen = 'home' | 'game';

export default function App() {
  const [screen, setScreen] = React.useState<Screen>('home');
  const [lang, setLang] = React.useState('EN');
  const [muted, setMuted] = React.useState(false);
  const [progress, setProgress] = React.useState(35);

  const history = [
    { q: 'Is it a mammal?', a: true },
    { q: 'Does it live in water?', a: false },
    { q: 'Is it larger than a dog?', a: false },
    { q: 'Can it fly?', a: false },
  ];

  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden bg-gradient-to-br ${palette.bg} text-[${palette.text}]`}
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px] opacity-30"
          style={{
            background:
              'radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)',
          }}
        />
        <div
          className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-[120px] opacity-20"
          style={{
            background:
              'radial-gradient(closest-side, rgba(244,63,94,0.5), transparent)',
          }}
        />
      </div>

      {/* NAVBAR */}
      <header className={`sticky top-0 z-40 ${palette.glass} shadow-xl`}>
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 grid place-items-center rounded-xl border border-white/15 bg-white/10">
              <PawPrint className="h-5 w-5 text-cyan-300" />
            </div>
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-tight">
                Animal Guesser
              </div>
              <div className="text-xs text-white/60">
                Think of an animal. We’ll find it.
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setScreen('home')}
            >
              <Home className="mr-2 h-4 w-4" /> Home
            </Button>
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => {
                setScreen('game');
                setProgress(0);
              }}
            >
              <RotateCcw className="mr-2 h-4 w-4" /> Restart
            </Button>

            {/* Language */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-white/15 bg-white/5 text-white/90 hover:bg-white/10"
                >
                  <Languages className="mr-2 h-4 w-4" /> {lang}{' '}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36">
                {languages.map((l) => (
                  <DropdownMenuItem
                    key={l}
                    onClick={() => setLang(l)}
                    className={'cursor-pointer'}
                  >
                    {l}
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Globe className="mr-2 h-4 w-4" /> Manage languages…
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sound */}
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
              onClick={() => setMuted((s) => !s)}
            >
              {muted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </Button>

            {/* Settings */}
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10"
            >
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {screen === 'home' ? (
        <HomeScreen
          onStartClassic={() => {
            setScreen('game');
            setProgress(0);
          }}
          onStartQuick={() => {
            setScreen('game');
            setProgress(0);
          }}
        />
      ) : (
        <GameScreen
          history={history}
          progress={progress}
          setProgress={setProgress}
        />
      )}

      {/* FOOTER */}
      <footer className={`mt-4 ${palette.glass}`}>
        <div className="mx-auto max-w-[1200px] px-6 py-4 flex flex-col sm:flex-row items-center gap-3 justify-between text-white/60 text-xs">
          <div>
            © {new Date().getFullYear()} Animal Guesser • v0.1 design mock
          </div>
          <div className="flex items-center gap-4">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              About
            </a>
            <div className="flex items-center gap-2">
              Dark Mode <Switch className="ml-1" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ================= HOME SCREEN =================
function HomeScreen({
  onStartClassic,
  onStartQuick,
}: {
  onStartClassic: () => void;
  onStartQuick: () => void;
}) {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-10">
      {/* HERO */}
      <Card
        className={`rounded-3xl ${palette.glass} shadow-2xl overflow-hidden`}
      >
        <div className="relative">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(1200px 400px at 20% 0%, rgba(34,211,238,0.25), transparent), radial-gradient(800px 300px at 90% 100%, rgba(244,63,94,0.18), transparent)',
            }}
          />
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
                  <Zap className="mr-2 h-5 w-5" /> Quick Mode (10)
                </Button>
              </div>

              <div className="mt-6 flex items-center gap-3 text-xs text-white/70">
                <Badge variant="outline" className="border-white/15">
                  No login needed
                </Badge>
                <Badge variant="outline" className="border-white/15">
                  Multilingual
                </Badge>
                <Badge variant="outline" className="border-white/15">
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

      {/* SECONDARY SECTION */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        <Card className={`${palette.glass} rounded-2xl`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-white/90">
              Continue where you left
            </CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 text-sm">
            Resume your last session instantly.
            <div className="mt-4 flex gap-3">
              <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
                Resume
              </Button>
              <Button
                variant="outline"
                className="border-white/20 text-white/80 hover:bg-white/10"
              >
                Discard
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className={`${palette.glass} rounded-2xl`}>
          <CardHeader className="pb-2">
            <CardTitle className="text-white/90">Language</CardTitle>
          </CardHeader>
          <CardContent className="text-white/70 text-sm">
            Play in your language. Switch anytime from the top bar.
            <div className="mt-3 flex flex-wrap gap-2">
              {['EN', 'CS', 'DE', 'ES'].map((l) => (
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

        <Card className={`${palette.glass} rounded-2xl`}>
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

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-white/90 font-medium">{title}</div>
      <div className="text-white/70 text-sm mt-1">{desc}</div>
    </div>
  );
}

// ================= GAME SCREEN =================
function GameScreen({
  history,
  progress,
}: {
  history: { q: string; a: boolean }[];
  progress: number;
  setProgress: (n: number) => void;
}) {
  return (
    <main className="mx-auto max-w-[1200px] px-6 py-6 grid grid-cols-12 gap-6">
      {/* LEFT: History */}
      <aside
        className={`hidden lg:block col-span-3 ${palette.glass} rounded-2xl p-4`}
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-white/90">
            <History className="h-4 w-4" /> Question History
          </div>
          <Badge variant="outline" className="border-white/15 text-white/70">
            {history.length}
          </Badge>
        </div>
        <div className="space-y-3 max-h-[68vh] overflow-y-auto pr-1">
          {history.map((h, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <div className="text-sm text-white/85">{h.q}</div>
              <div className="mt-2">
                <Badge
                  className={`${h.a ? 'bg-emerald-500/80' : 'bg-rose-500/80'} border-0`}
                >
                  {h.a ? 'Yes' : 'No'}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* CENTER: Core card */}
      <section className="col-span-12 lg:col-span-6 space-y-6">
        <Card className={`rounded-3xl ${palette.glass} shadow-2xl`}>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-white/90">Round 1</CardTitle>
              <div className="text-xs text-white/60">~ 20 questions</div>
            </div>
            <Progress value={progress} className="h-2 bg-white/10" />
          </CardHeader>
          <CardContent>
            <motion.h1
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-3xl sm:text-4xl font-semibold tracking-tight text-white/95 text-center py-6"
            >
              Is it primarily active at night?
            </motion.h1>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pb-1">
              <Button
                size="lg"
                className="rounded-xl px-8 py-6 text-base bg-cyan-400/90 hover:bg-cyan-300/90 text-black shadow-[0_8px_24px_rgba(34,211,238,0.35)]"
              >
                Yes
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-xl px-8 py-6 text-base bg-white/10 hover:bg-white/20 border border-white/20 text-white/90"
              >
                No
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl px-8 py-6 text-base border-white/20 text-white/80 hover:bg-white/10"
              >
                Not sure
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3 text-xs text-white/70">
              <Badge variant="outline" className="border-white/15">
                Traits left: 13
              </Badge>
              <Badge variant="outline" className="border-white/15">
                Confidence: 42%
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Suggestion / input row */}
        <div
          className={`rounded-2xl ${palette.glass} p-4 flex flex-col sm:flex-row items-center gap-3`}
        >
          <div className="flex items-center gap-2 text-white/70">
            <Sparkles className="h-4 w-4" /> Improve me:
          </div>
          <Input
            placeholder="Suggest a new question…"
            className="bg-white/5 border-white/15 text-white placeholder:text-white/40"
          />
          <Button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white">
            Submit
          </Button>
        </div>
      </section>

      {/* RIGHT: Current guess / tips */}
      <aside
        className={`hidden lg:block col-span-3 ${palette.glass} rounded-2xl p-4 space-y-4`}
      >
        <div className="text-white/90 font-medium">Current Guess</div>
        <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
          <div className="text-2xl font-semibold">🦝 Raccoon</div>
          <div className="text-xs text-white/70 mt-1">
            Confidence 42% • updates live
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <Badge className="bg-emerald-500/80 border-0">Nocturnal</Badge>
            <Badge className="bg-cyan-500/80 border-0">Omnivore</Badge>
            <Badge className="bg-white/15 text-white border-white/10">
              North America
            </Badge>
          </div>
        </div>

        <div className="text-white/90 font-medium">Shortcuts</div>
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="border-white/20 text-white/80 hover:bg-white/10"
          >
            Back
          </Button>
          <Button
            variant="outline"
            className="border-white/20 text-white/80 hover:bg-white/10"
          >
            Skip
          </Button>
          <Button className="bg-cyan-400/90 text-black hover:bg-cyan-300/90">
            I’m ready – Guess
          </Button>
          <Button
            variant="secondary"
            className="bg-white/10 text-white/90 border border-white/20 hover:bg-white/20"
          >
            Give up
          </Button>
        </div>
      </aside>
    </main>
  );
}
