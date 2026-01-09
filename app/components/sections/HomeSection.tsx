'use client';

import { eventData } from '@/app/data/event';
import CountdownTimer from '../CountdownTimer';

export default function HomeSection() {
  
  return (
    <div className="space-y-6">
      {/* COUNTDOWN TIMER */}
      <CountdownTimer />

      {/* Urgent Action Box */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-500 rounded-xl p-6 backdrop-blur-xl animate-pulse">
        <h3 className="text-2xl font-black text-yellow-400 mb-3">
          ⚠️ ACCIÓN INMEDIATA HOY (9 ENE)
        </h3>
        <p className="text-white font-bold mb-3">HOY DEBES:</p>
        <div className="space-y-2 text-gray-200">
          <p>✅ Story anunciando Últimas promos 2x$40.000</p>
          <p>✅ Actualizar precios en bio</p>
          <p>✅ Responder DMs sobre nueva promo</p>
          <p className="text-xl font-black text-orange-400">⏰ QUEDAN SOLO {eventData.daysLeft} DÍAS!</p>
        </div>
      </div>

      {/* Event Info */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border-2 border-[#0088ff]">
        <h3 className="text-2xl font-bold text-[#0088ff] mb-4">📅 Información del Evento</h3>
        <div className="grid md:grid-cols-2 gap-4 text-gray-200">
          <div>
            <p className="text-[#ff8800] font-bold">Fecha:</p>
            <p className="text-xl">{eventData.date}</p>
          </div>
          <div>
            <p className="text-[#ff8800] font-bold">Horario:</p>
            <p className="text-xl">{eventData.time} 🔥 EXTENDIDO!</p>
          </div>
          <div>
            <p className="text-[#ff8800] font-bold">Ubicación:</p>
            <p className="text-xl">{eventData.location}</p>
          </div>
          <div>
            <p className="text-[#ff8800] font-bold">Faltan:</p>
            <p className="text-3xl font-black text-[#ff8800]">{eventData.daysLeft} DÍAS</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-4 border border-green-500/50">
          <div className="text-3xl mb-2">📸</div>
          <h4 className="font-bold text-white mb-2">Stories</h4>
          <p className="text-sm text-gray-300">15 stories listas</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl p-4 border border-blue-500/50">
          <div className="text-3xl mb-2">🎤</div>
          <h4 className="font-bold text-white mb-2">Artistas</h4>
          <p className="text-sm text-gray-300">8 artistas + 1 TBA</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-xl p-4 border border-orange-500/50">
          <div className="text-3xl mb-2">🔥</div>
          <h4 className="font-bold text-white mb-2">Promo</h4>
          <p className="text-sm text-gray-300">2x$40.000 activa</p>
        </div>
      </div>

      {/* Latest Updates */}
      <div className="bg-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-400 mb-3">🆕 Últimas Actualizaciones</h3>
        <ul className="space-y-2 text-gray-200">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✅</span>
            <span><strong>8 Ene:</strong> Evento extendido hasta las 22hs - Nuevo artista TBA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✅</span>
            <span><strong>5 Ene:</strong> Ganadores del sorteo anunciados</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✅</span>
            <span><strong>3 Ene:</strong> Nueva promo 2x$40.000 lanzada</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">📌</span>
            <span><strong>29 Dic:</strong> Evento confirmado para el 11 de Enero</span>
          </li>
        </ul>
      </div>

      {/* Promo Info */}
      <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-xl p-6 border-2 border-green-500/50">
        <h3 className="text-2xl font-bold text-green-400 mb-4">💰 Promociones Activas</h3>
        <div className="space-y-4">
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-xl font-bold text-[#ff8800] mb-2">🔥 2x$40.000</h4>
            <p className="text-gray-300">2 entradas por $40.000 ($20.000 c/u)</p>
            <p className="text-sm text-green-400 mt-2">Ahorrás $20.000</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-xl font-bold text-[#ff8800] mb-2">👥 Promo Grupal</h4>
            <p className="text-gray-300">4 personas: $100.000 ($25.000 c/u)</p>
            <p className="text-gray-300">4 personas + Gin: $120.000</p>
          </div>
          <div className="bg-black/30 rounded-lg p-4">
            <h4 className="text-xl font-bold text-[#ff8800] mb-2">💳 Transferencia</h4>
            <p className="text-gray-300">Pagá solo 2% vs 15% online</p>
            <p className="text-sm text-green-400 mt-2">Ahorrás comisión</p>
          </div>
        </div>
      </div>
    </div>
  );
}