import BubbleSection from '@/components/containers/BubbleSection.tsx';

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-10 text-white/90">
      {/* Header card */}
      <div className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">About</h1>
        <p className="mt-2 text-white/70">
          Learn what Animal Guesser is and how it works.
        </p>
        <p className="mt-4 text-white/80">
          This page introduces the project, its goals, technology stack and
          philosophy. Replace or extend with your real about-page text when
          ready.
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <BubbleSection title="What is Animal Guesser?">
          <p className="text-white/80">
            Animal Guesser is an interactive guessing game inspired by classic
            20-questions logic, powered by modern heuristics and optionally
            machine learning. You think of any animal, and we try to guess it by
            narrowing down traits through yes/no questions.
          </p>
        </BubbleSection>

        <BubbleSection title="How does it guess?">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>
              Adaptive trait selection (questions become more specific as
              confidence rises)
            </li>
            <li>Probability weighting based on answers</li>
            <li>Optional learning from user feedback (if you enable it)</li>
          </ul>
        </BubbleSection>

        <BubbleSection title="Tech Stack">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>
              <span className="text-white">Frontend:</span> React + TailwindCSS
              + shadcn/ui
            </li>
            <li>
              <span className="text-white">Backend:</span> Rust
            </li>
            <li>
              <span className="text-white">Hosting:</span> Self-hosted / VPS
            </li>
            <li>
              <span className="text-white">Optional stats:</span>{' '}
              privacy‑friendly analytics
            </li>
          </ul>
        </BubbleSection>

        <BubbleSection title="Why build this?">
          <p className="text-white/80">
            Because guessing games are timeless — and building one with modern
            UI/UX allows us to make it elegant, fast, multilingual, and private
            by design. Unlike many commercial guessers, this one avoids
            profiling and respects anonymity.
          </p>
        </BubbleSection>

        <BubbleSection title="Roadmap (mock)">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>✔ Basic guessing flow</li>
            <li>✔ Glassmorphism UI pass</li>
            <li>⌛ Model improvements and knowledge expansion</li>
            <li>⌛ More languages and offline mode</li>
            <li>Future: user-defined animals & traits browser</li>
          </ul>
        </BubbleSection>

        <BubbleSection title="Open Source?">
          <p className="text-white/80">
            Parts of the project may become open source when stable. Backend and
            trait model are easiest to release first; UI kit and integrations
            later.
          </p>
        </BubbleSection>
      </div>
    </main>
  );
}
