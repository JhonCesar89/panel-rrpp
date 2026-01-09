'use client';

import { useState } from 'react';
import { stories } from '@/app/data/stories';

export default function StoriesSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-orange-500">
        <h2 className="text-3xl font-black text-orange-400 mb-2">📸 STORIES COMPLETAS</h2>
        <p className="text-gray-200">15 stories listas para copiar y publicar</p>
      </div>

      {/* Stories List */}
      <div className="space-y-4">
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-5 border-l-4 transition-all hover:scale-[1.02] ${
              story.urgent 
                ? 'border-yellow-500 bg-yellow-500/10' 
                : 'border-orange-500'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                  story.urgent 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-orange-500 text-white'
                }`}>
                  STORY #{story.id}
                </span>
                <h3 className={`text-xl font-bold ${
                  story.urgent ? 'text-yellow-400' : 'text-orange-400'
                }`}>
                  {story.title}
                </h3>
              </div>
            </div>

            <div className="bg-black/30 rounded-lg p-4 mb-3">
              <pre className="text-gray-200 whitespace-pre-wrap font-sans">
                {story.content}
              </pre>
            </div>

            {story.note && (
              <div className="bg-blue-500/10 border-l-2 border-blue-400 rounded p-3 mb-3">
                <p className="text-blue-300 text-sm">{story.note}</p>
              </div>
            )}

            <button
              onClick={() => copyToClipboard(story.content, story.id)}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-2 rounded-lg hover:scale-105 transition-transform"
            >
              {copiedId === story.id ? '✓ ¡Copiado!' : '📋 Copiar Story'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}