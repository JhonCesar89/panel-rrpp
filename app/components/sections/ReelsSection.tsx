'use client';

import { useState } from 'react';
import { reels } from '@/app/data/reels';

export default function ReelsSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-pink-500">
        <h2 className="text-3xl font-black text-pink-400 mb-2">🎥 GUIONES REELS</h2>
        <p className="text-gray-200">5 guiones completos listos para grabar</p>
      </div>

      {/* Tips Generales */}
      <div className="bg-blue-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💡 Tips Generales para Reels</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-200">
          <div>
            <h4 className="font-bold text-[#ff8800] mb-2">Formato:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Vertical 9:16 (1080x1920)</li>
              <li>• Duración ideal: 7-15 segundos</li>
              <li>• Textos grandes y legibles</li>
              <li>• Transiciones en beat de música</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#ff8800] mb-2">Contenido:</h4>
            <ul className="space-y-1 text-sm">
              <li>• Hook en primeros 2 segundos</li>
              <li>• Cambio de escena cada 1-2 seg</li>
              <li>• CTA claro al final</li>
              <li>• Música con energía</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Reels List */}
      <div className="space-y-4">
        {reels.map((reel, index) => (
          <div
            key={reel.id}
            className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border-l-4 border-pink-500 hover:scale-[1.01] transition-all"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded-lg font-bold text-sm bg-pink-500 text-white">
                    REEL #{reel.id}
                  </span>
                  <span className="text-gray-400 text-sm">⏱️ {reel.duration}</span>
                </div>
                <h3 className="text-2xl font-bold text-pink-400">{reel.title}</h3>
              </div>
            </div>

            {/* Hook */}
            <div className="bg-yellow-500/20 border-l-4 border-yellow-500 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-yellow-400 mb-1">HOOK (primeros 2 segundos):</p>
              <p className="text-xl font-black text-white">{reel.hook}</p>
            </div>

            {/* Script */}
            <div className="bg-black/40 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-gray-400 mb-2">GUIÓN COMPLETO:</p>
              <pre className="text-gray-200 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                {reel.script}
              </pre>
            </div>

            {/* Music */}
            <div className="bg-purple-500/10 border-l-2 border-purple-400 rounded p-3 mb-4">
              <p className="text-xs font-bold text-purple-400 mb-1">🎵 MÚSICA SUGERIDA:</p>
              <p className="text-gray-300 text-sm">{reel.music}</p>
            </div>

            {/* Tips */}
            <div className="bg-green-500/10 rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-green-400 mb-2">✓ TIPS DE PRODUCCIÓN:</p>
              <ul className="space-y-1">
                {reel.tips.map((tip, i) => (
                  <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                    <span className="text-green-400">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Copy Button */}
            <button
              onClick={() => copyToClipboard(reel.script, reel.id)}
              className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold py-3 rounded-lg hover:scale-105 transition-transform"
            >
              {copiedId === reel.id ? '✓ ¡Copiado!' : '📋 Copiar Guión'}
            </button>
          </div>
        ))}
      </div>

      {/* Herramientas Recomendadas */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-[#ff8800] mb-4">🛠️ Herramientas Recomendadas</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black/30 rounded-lg p-4">
            <p className="font-bold text-pink-400 mb-2">Edición:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• CapCut (gratis)</li>
              <li>• InShot</li>
              <li>• Adobe Premiere Rush</li>
            </ul>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="font-bold text-blue-400 mb-2">Música:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Biblioteca Instagram</li>
              <li>• Epidemic Sound</li>
              <li>• Tracks de artistas</li>
            </ul>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <p className="font-bold text-purple-400 mb-2">Textos:</p>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Fuente: Montserrat Bold</li>
              <li>• Tamaño: Grande</li>
              <li>• Animación: Bounce/Fade</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}