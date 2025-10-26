import React from 'react';

export default function BubbleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6">
      <h2 className="text-xl font-semibold tracking-tight text-white/95">
        {title}
      </h2>
      <div className="mt-3 space-y-2">{children}</div>
    </section>
  );
}
