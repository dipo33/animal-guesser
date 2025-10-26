export default function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="text-white/90 font-medium">{title}</div>
      <div className="text-white/70 text-sm mt-1">{desc}</div>
    </div>
  );
}