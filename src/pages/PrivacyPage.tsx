import React from 'react';

export function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[1000px] px-6 py-10 text-white/90">
      {/* Header card */}
      <div className="rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 shadow-2xl">
        <h1 className="text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-2 text-white/70">
          Last updated: {new Date("2025-10-26").toISOString().slice(0, 10)}
        </p>
        <p className="mt-4 text-white/80">
          This mock page describes how{' '}
          <span className="text-white">Animal Guesser</span> handles
          information. Replace the placeholders with your actual policy once
          your Rust backend is finalized.
        </p>
      </div>

      {/* Sections */}
      <div className="mt-8 space-y-6">
        <Section title="What We Collect">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>
              <span className="text-white">Game telemetry</span>: yes/no
              answers, session IDs (random), timestamps.
            </li>
            <li>
              <span className="text-white">Optional feedback</span>: suggested
              questions or animal names you submit.
            </li>
            <li>
              <span className="text-white">Device data</span>: anonymized
              analytics (screen size, language, rough region).
            </li>
            <li>
              <span className="text-white">No account required</span>: we don’t
              collect names, emails, or precise location by default.
            </li>
          </ul>
        </Section>

        <Section title="How We Use Data">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>To run the guessing game and improve question selection.</li>
            <li>To measure performance and detect abuse or bugs.</li>
            <li>
              To train/adjust heuristics or models with aggregated stats only.
            </li>
          </ul>
        </Section>

        <Section title="Storage & Retention">
          <p className="text-white/80">
            Sessions are stored with a random ID. We keep raw logs for{' '}
            <span className="text-white">30–90 days</span> (configure as needed)
            and retain aggregated metrics longer. You can clear your local data
            from the app at any time via{' '}
            <span className="text-white">
              Settings → Privacy → Clear local data
            </span>
            .
          </p>
        </Section>

        <Section title="Sharing & Third Parties">
          <p className="text-white/80">
            We don’t sell personal data. We may use hosting and analytics
            providers. Example placeholders:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>
              Hosting: e.g., <span className="text-white">Vultr</span> or other
              cloud (EU region where possible).
            </li>
            <li>
              Optional analytics: e.g.,{' '}
              <span className="text-white">Plausible</span> (no cookies) or
              self-hosted tools.
            </li>
            <li>
              Error reporting: e.g., <span className="text-white">Sentry</span>{' '}
              (IP anonymization on).
            </li>
          </ul>
        </Section>

        <Section title="Cookies & Local Storage">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>
              Language preference, mute setting, and theme are stored locally.
            </li>
            <li>
              Session resume token so you can continue where you left off.
            </li>
            <li>
              Analytics cookies are{' '}
              <span className="text-white">disabled by default</span> in this
              mock; toggle in Settings.
            </li>
          </ul>
        </Section>

        <Section title="Children’s Privacy">
          <p className="text-white/80">
            Animal Guesser is family‑friendly but not designed for children
            under 13 without parental guidance. We do not knowingly collect
            personal information from children.
          </p>
        </Section>

        <Section title="Your Rights">
          <ul className="list-disc pl-5 space-y-1 text-white/80">
            <li>Access, export, or delete session data.</li>
            <li>Opt out of analytics and personalized improvements.</li>
            <li>Region-specific rights (e.g., GDPR/CCPA) will be honored.</li>
          </ul>
        </Section>

        <Section title="Contact">
          <p className="text-white/80">
            Questions? Email{' '}
            <a
              className="underline hover:text-white"
              href="mailto:privacy@example.com"
            >
              privacy@example.com
            </a>
            . For data requests, include your session ID from{' '}
            <span className="text-white">Settings → About</span>.
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-xl font-semibold tracking-tight text-white/95">{title}</h2>
      <div className="mt-3 space-y-2">{children}</div>
    </section>
  );
}