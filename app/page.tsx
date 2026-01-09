'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomeSection from './components/sections/HomeSection';
import SorteoSection from './components/sections/SorteoSection';
import StoriesSection from './components/sections/StoriesSection';
import CaptionsSection from './components/sections/CaptionsSection';
import DMsSection from './components/sections/DMsSection';
import ArtistasSection from './components/sections/ArtistasSection';
import ReelsSection from './components/sections/ReelsSection';
import CalendarioSection from './components/sections/CalendarioSection';
import SharedFoldersSection from './components/sections/SharedFoldersSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <HomeSection />;
      case 'sorteo':
        return <SorteoSection />;
      case 'stories':
        return <StoriesSection />;
      case 'captions':
        return <CaptionsSection />;
      case 'dms':
        return <DMsSection />;
      case 'artistas':
        return <ArtistasSection />;
      case 'reels':
        return <ReelsSection />;
      case 'calendario':
        return <CalendarioSection />;
      case 'carpetas':
        return <SharedFoldersSection />;
      default:
        return (
          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-[#0088ff]/30">
            <h2 className="text-2xl font-bold text-white mb-4">
              {activeSection.toUpperCase()}
            </h2>
            <p className="text-gray-300">
              Contenido para <span className="text-[#ff8800] font-bold">{activeSection}</span> próximamente...
            </p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black [data-theme='light'] &:from-gray-100 [data-theme='light'] &:via-white [data-theme='light'] &:to-gray-100 transition-colors duration-300">
      <Header />
      <div className="flex">
        <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
        <main className="flex-1 p-6 lg:p-8 transition-all duration-300">
          <div className="max-w-6xl mx-auto">
            {renderSection()}
          </div>
        </main>
      </div>
    </div>
  );
}