import React from 'react';
import '@/globals.css';
import Footer from '@/components/bars/Footer.tsx';
import { Navbar } from '@/components/bars/Navbar.tsx';
import AmbientGlow from '@/components/effects/AmbientGlow.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div
      className={`min-h-screen w-full flex flex-col relative overflow-hidden bg-gradient-to-br app-gradient text-text`}
    >
      <AmbientGlow />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
