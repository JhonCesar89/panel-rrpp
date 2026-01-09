'use client';

import { useState } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ activeSection, onSectionChange, isOpen, onClose }: SidebarProps) {
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
        { id: 'sorteo', label: '🎁 Sorteo', icon: '🎁' },
        { id: 'captions', label: '📝 Captions', icon: '📝' },
        { id: 'dms', label: '💬 DMs', icon: '💬' }
      ]
    },
    {
      id: 'lineup',
      title: '🎧 LINEUP',
      items: [
        { id: 'artistas', label: '🎤 Artistas', icon: '🎤' }
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
    onClose(); // Close sidebar on mobile after selection
  };

  return (
    <>
      {/* Overlay (Mobile) */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-20 left-0 h-[calc(100vh-5rem)] w-64
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