'use client';

import { useState } from 'react';
import { dms } from '@/app/data/dms';

export default function DMsSection() {
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = {
    all: 'Todas',
    precio: 'Precios',
    ubicacion: 'Ubicación',
    lineup: 'Lineup',
    logistica: 'Logística',
    promo: 'Promos'
  };

  const categoryColors = {
    precio: 'green',
    ubicacion: 'blue',
    lineup: 'purple',
    logistica: 'orange',
    promo: 'yellow'
  };

  const filteredDMs = selectedCategory === 'all' 
    ? dms 
    : dms.filter(dm => dm.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-purple-500">
        <h2 className="text-3xl font-black text-purple-400 mb-2">💬 RESPUESTAS DMs</h2>
        <p className="text-gray-200">11 Mensajes y respuestas pre-armadas para preguntas frecuentes. Comencemos:</p>
      </div>

      {/* Category Filter */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10">
        <p className="text-gray-300 mb-3 font-bold">Filtrar por categoría:</p>
        <div className="flex flex-wrap gap-2">
          {Object.entries(categories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-lg font-bold transition-all ${
                selectedCategory === key
                  ? 'bg-purple-500 text-white scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* DMs List */}
      <div className="space-y-4">
        {filteredDMs.map((dm, index) => {
          const color = categoryColors[dm.category];
          return (
            <div
              key={dm.id}
              className={`bg-white/5 backdrop-blur-xl rounded-xl p-5 border-l-4 border-${color}-500 transition-all hover:scale-[1.01]`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3 flex-1">
                  <span className={`px-3 py-1 rounded-lg font-bold text-xs bg-${color}-500 text-white`}>
                    {categories[dm.category as keyof typeof categories]}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {dm.question}
                  </h3>
                </div>
              </div>

              {/* Response */}
              <div className="bg-black/40 rounded-lg p-4 mb-3">
                <pre className="text-gray-200 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                  {dm.response}
                </pre>
              </div>

              <button
                onClick={() => copyToClipboard(dm.response, dm.id)}
                className={`w-full bg-gradient-to-r from-${color}-500 to-${color}-600 text-white font-bold py-2 rounded-lg hover:scale-105 transition-transform`}
              >
                {copiedId === dm.id ? '✓ ¡Copiado!' : '📋 Copiar Respuesta'}
              </button>
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="bg-blue-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💡 Tips para responder DMs</h3>
        <ul className="space-y-2 text-gray-200">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Responder en menos de 2 horas (idealmente 30 minutos)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Personalizar con el nombre de la persona si es posible</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Siempre terminar con pregunta para mantener conversación</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Usar emojis para generar cercanía</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Cerrar venta enviando link de pago cuando hay interés</span>
          </li>
        </ul>
      </div>
    </div>
  );
}