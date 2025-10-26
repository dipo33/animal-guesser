import React from 'react';
import '@/globals.css';
import Navbar from '@/components/bars/Navbar.tsx';
import AmbientGlow from '@/components/effects/AmbientGlow.tsx';


const palette = {
  accent: '#22d3ee', // cyan-400
  accentSoft: '#0ea5b8',
  danger: '#f43f5e',
  success: '#10b981',
  glass: 'backdrop-blur-xl bg-white/5 border border-white/10',
  text: '#E6EAF2',
  subtext: '#9BA6B2',
};

const languages = ['EN', 'CS', 'DE', 'ES']; // example set

export default function HomePage() {
  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden bg-gradient-to-br app-gradient text-text`}
    >
      <AmbientGlow />
      <Navbar />
    </div>
  );
}
