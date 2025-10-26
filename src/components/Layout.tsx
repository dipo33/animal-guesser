import React from 'react';
import '@/globals.css';
import { Navbar } from '@/components/bars/Navbar.tsx';
import AmbientGlow from '@/components/effects/AmbientGlow.tsx';

export default function Layout() {
  return (
    <div
      className={`min-h-screen w-full relative overflow-hidden bg-gradient-to-br app-gradient text-text`}
    >
      <AmbientGlow />
      <Navbar />
    </div>
  );
}
