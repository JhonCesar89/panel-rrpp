'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export default function Header() {
  const eventDate = new Date('2026-01-11T10:00:00').getTime();
  const [daysLeft, setDaysLeft] = useState(0);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  // Handle countdown
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

  // Initialize theme - solo manipula DOM, no setState
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  }, []);

  return (
    <header className="bg-black/90 backdrop-blur-xl border-b-4 border-[#0088ff] sticky top-0 z-50 shadow-lg shadow-[#0088ff]/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
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
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-xl border-2 border-[#0088ff] rounded-full p-3 transition-all hover:scale-110 group"
              aria-label="Cambiar tema"
            >
              {theme === 'dark' ? (
                <span className="text-2xl group-hover:rotate-180 transition-transform inline-block duration-300">☀️</span>
              ) : (
                <span className="text-2xl group-hover:-rotate-180 transition-transform inline-block duration-300">🌙</span>
              )}
            </button>

            {/* Days Counter */}
            <div className="text-2xl font-black text-[#ff8800]">
              ⏰ {daysLeft} DÍAS
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}