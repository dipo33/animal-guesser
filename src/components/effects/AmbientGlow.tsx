import React from "react";

export default function AmbientGlow() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full blur-[120px] opacity-30"
        style={{
          background:
            "radial-gradient(closest-side, rgba(34,211,238,0.6), transparent)",
        }}
      />
      <div
        className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full blur-[120px] opacity-20"
        style={{
          background:
            "radial-gradient(closest-side, rgba(244,63,94,0.5), transparent)",
        }}
      />
    </div>
  );
}
