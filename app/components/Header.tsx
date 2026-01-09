'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const eventDate = new Date('2026-01-11T10:00:00').getTime();
  const [daysLeft, setDaysLeft] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const calculateDays = () => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };

    calculateDays();
    const interval = setInterval(calculateDays, 60000);

    return () => clearInterval(interval);
  }, [eventDate]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <header className="bg-black/90 backdrop-blur-xl border-b-4 border-[#0088ff] sticky top-0 z-50 shadow-lg shadow-[#0088ff]/20">
      <div className="container mx-auto px-4 py-3">
        
        {/* MOBILE LAYOUT */}
        <div className="lg:hidden">
          {/* Row 1: Logo + Title + Days */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2 flex-1">
              <Image 
                src="/assets/logos/dforest-logo.png" 
                alt="DForest" 
                width={45} 
                height={45}
                className="rounded-lg bg-white p-1 shadow-lg shadow-[#0088ff]/40 flex-shrink-0"
              />
              <h1 className="text-base font-black bg-gradient-to-r from-[#0088ff] to-[#ff8800] bg-clip-text text-transparent leading-tight">
                DFOREST<br/>POOLPARTY
              </h1>
            </div>
            <div className="text-base font-black text-[#ff8800] whitespace-nowrap">
              ⏰ {daysLeft} DÍAS
            </div>
          </div>

          {/* Row 2: Event info + Theme toggle */}
          <div className="flex items-center justify-between gap-2">
            <div className="inline-block bg-gradient-to-r from-red-500 to-[#ff8800] px-2 py-1 rounded-full text-white font-bold text-[10px] shadow-lg animate-pulse">
              📅 DOM 11 ENE · 10-22hs
            </div>
            
            <button
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-[#0088ff] rounded-full p-2 transition-all hover:scale-110 group flex-shrink-0"
              aria-label="Cambiar tema"
              type="button"
            >
              <span className="text-lg inline-block transition-transform duration-300 group-hover:rotate-180">
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
            </button>
          </div>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image 
              src="/assets/logos/dforest-logo.png" 
              alt="DForest" 
              width={70} 
              height={70}
              className="rounded-xl bg-white p-2 shadow-lg shadow-[#0088ff]/40"
            />
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-[#0088ff] to-[#ff8800] bg-clip-text text-transparent">
                DFOREST POOLPARTY
              </h1>
              <div className="mt-2 inline-block bg-gradient-to-r from-red-500 to-[#ff8800] px-4 py-1 rounded-full text-white font-bold text-sm shadow-lg animate-pulse">
                📅 DOMINGO 11 ENERO 2026 · 10-22hs · CANNING
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-[#0088ff] rounded-full p-3 transition-all hover:scale-110 group"
              aria-label="Cambiar tema"
              type="button"
            >
              <span className="text-2xl inline-block transition-transform duration-300 group-hover:rotate-180">
                {theme === 'dark' ? '☀️' : '🌙'}
              </span>
            </button>

            <div className="text-2xl font-black text-[#ff8800]">
              ⏰ {daysLeft} DÍAS
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}