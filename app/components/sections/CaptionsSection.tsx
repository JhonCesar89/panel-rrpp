'use client';

import { useState } from 'react';
import { captions } from '@/app/data/captions';

export default function CaptionsSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, hashtags: string, id: number) => {
    const fullText = `${text}\n\n${hashtags}`;
    navigator.clipboard.writeText(fullText);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-green-500">
        <h2 className="text-3xl font-black text-green-400 mb-2">📝 CAPTIONS COMPLETOS</h2>
        <p className="text-gray-200">7 captions listos con hashtags incluidos</p>
      </div>

      {/* Captions List */}
      <div className="space-y-4">
        {captions.map((caption, index) => (
          <div
            key={caption.id}
            className={`bg-white/5 backdrop-blur-xl rounded-xl p-5 border-l-4 transition-all hover:scale-[1.01] ${
              caption.urgent 
                ? 'border-yellow-500 bg-yellow-500/10' 
                : 'border-green-500'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                  caption.urgent 
                    ? 'bg-yellow-500 text-black' 
                    : 'bg-green-500 text-white'
                }`}>
                  POST #{caption.id}
                </span>
                <h3 className={`text-xl font-bold ${
                  caption.urgent ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {caption.title}
                </h3>
              </div>
            </div>

            {/* Caption Content */}
            <div className="bg-black/30 rounded-lg p-4 mb-3">
              <pre className="text-gray-200 whitespace-pre-wrap font-sans mb-4">
                {caption.content}
              </pre>
              <div className="border-t border-gray-700 pt-3">
                <p className="text-blue-400 text-sm font-mono break-words">
                  {caption.hashtags}
                </p>
              </div>
            </div>

            {caption.note && (
              <div className="bg-blue-500/10 border-l-2 border-blue-400 rounded p-3 mb-3">
                <p className="text-blue-300 text-sm">{caption.note}</p>
              </div>
            )}

            <button
              onClick={() => copyToClipboard(caption.content, caption.hashtags, caption.id)}
              className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-2 rounded-lg hover:scale-105 transition-transform"
            >
              {copiedId === caption.id ? '✓ ¡Copiado con hashtags!' : '📋 Copiar Caption + Hashtags'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}