'use client';

import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export default function Sidebar({ activeSection, onSectionChange }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['instagram']);

  const toggleGroup = (group: string) => {
    setExpandedGroups(prev => 
      prev.includes(group) 
        ? prev.filter(g => g !== group)
        : [...prev, group]
    );
  };

  const menuGroups = [
    {
      id: 'instagram',
      title: '📱 INSTAGRAM',
      items: [
        { id: 'inicio', label: '🏠 Inicio', icon: '🏠' },
        { id: 'stories', label: '📸 Stories', icon: '📸' },
        { id: 'sorteo', label: '🎁 Sorteos Finalizados', icon: '🎁' },
        { id: 'captions', label: '📝 Captions', icon: '📝' },
        { id: 'dms', label: '💬 DMs', icon: '💬' }
      ]
    },
    {
      id: 'lineup',
      title: '🎧 LINEUP',
      items: [
        { id: 'artistas', label: '🎤 Artists', icon: '🎤' }
      ]
    },
    {
      id: 'content',
      title: '🎬 CONTENIDO',
      items: [
        { id: 'reels', label: '🎥 Reels', icon: '🎥' }
      ]
    },
    {
      id: 'strategy',
      title: '📅 ESTRATEGIA',
      items: [
        { id: 'calendario', label: '📆 Calendario', icon: '📆' }
      ]
    },
    {
    id: 'recursos',
    title: '📂 RECURSOS',
    items: [
        { id: 'carpetas', label: '🗂️ Carpetas Compartidas', icon: '🗂️' }
      ]
    }
  ];

  const handleItemClick = (sectionId: string) => {
    onSectionChange(sectionId);
    setIsOpen(false); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Hamburger Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-[#0088ff] text-white p-3 rounded-lg shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        sidebar fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-64
        bg-black/50 backdrop-blur-xl border-r-2 border-[#0088ff]
        overflow-y-auto z-40 transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-4 space-y-4">
          {menuGroups.map(group => (
            <div key={group.id} className="space-y-2">
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full flex items-center justify-between text-[#0088ff] font-bold text-sm border-b-2 border-[#0088ff] pb-2 hover:text-[#ff8800] transition-colors"
              >
                <span>{group.title}</span>
                <span className="text-xs">
                  {expandedGroups.includes(group.id) ? '▼' : '▶'}
                </span>
              </button>
              
              {expandedGroups.includes(group.id) && (
                <div className="space-y-1 pl-2">
                  {group.items.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleItemClick(item.id)}
                      className={`
                        w-full text-left px-3 py-2 rounded-lg text-sm
                        transition-all duration-200 border-l-4
                        ${activeSection === item.id
                          ? 'bg-[#0088ff]/20 border-[#0088ff] text-white font-bold'
                          : 'border-transparent text-gray-300 hover:bg-white/5 hover:border-[#0088ff]/50 hover:translate-x-1'
                        }
                      `}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}