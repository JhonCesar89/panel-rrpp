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
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          return <HomeSection />;
      }
    };
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex">
          <Sidebar 
            activeSection={activeSection} 
            onSectionChange={setActiveSection}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
          <main className="flex-1 p-6 lg:p-8 transition-all duration-300">
            <div className="max-w-6xl mx-auto">
              {renderSection()}
            </div>
          </main>
        </div>
      </div>
    );
  }
