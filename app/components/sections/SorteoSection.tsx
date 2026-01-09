'use client';

export default function SorteoSection() {
  return (
    <div className="space-y-6">
      {/* Status Banner */}
      <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border-l-4 border-red-500 rounded-xl p-6 backdrop-blur-xl">
        <h2 className="text-3xl font-black text-red-400 mb-2">🎁 SORTEO FINALIZADO</h2>
        <p className="text-gray-200 text-lg">El sorteo cerró el 5 de Enero. ¡Gracias a todos por participar!</p>
      </div>

      {/* Winners */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border-2 border-yellow-500">
        <h3 className="text-2xl font-bold text-yellow-400 mb-4">🏆 Ganadores</h3>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/50">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🥇</span>
              <div>
                <p className="text-xl font-bold text-yellow-400">1er Lugar</p>
                <p className="text-gray-300">[Nombre del ganador] - 2 entradas VIP</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-lg p-4 border border-gray-400/50">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🥈</span>
              <div>
                <p className="text-xl font-bold text-gray-300">2do Lugar</p>
                <p className="text-gray-300">[Nombre del ganador] - 2 entradas generales</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-orange-700/20 to-orange-800/20 rounded-lg p-4 border border-orange-700/50">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🥉</span>
              <div>
                <p className="text-xl font-bold text-orange-400">3er Lugar</p>
                <p className="text-gray-300">[Nombre del ganador] - 1 entrada general</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Redirect to Promo */}
      <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-xl rounded-xl p-6 border-2 border-green-500">
        <h3 className="text-2xl font-bold text-green-400 mb-3">¿No ganaste? ¡No te preocupes!</h3>
        <p className="text-gray-200 mb-4">Todavía podés conseguir tu entrada con nuestra promo especial:</p>
        <div className="bg-black/30 rounded-lg p-4 mb-4">
          <p className="text-3xl font-black text-[#ff8800]">2x$40.000</p>
          <p className="text-gray-300">2 entradas por $40.000 ($20.000 c/u)</p>
          <p className="text-green-400 font-bold mt-2">¡Ahorrás $20.000!</p>
        </div>
        <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black py-3 rounded-lg hover:scale-105 transition-transform">
          🎟️ CONSEGUIR ENTRADAS AHORA
        </button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-[#0088ff]/30 text-center">
          <p className="text-4xl font-black text-[#0088ff]">500+</p>
          <p className="text-gray-300 mt-2">Participantes</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-[#ff8800]/30 text-center">
          <p className="text-4xl font-black text-[#ff8800]">3</p>
          <p className="text-gray-300 mt-2">Ganadores</p>
        </div>
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-green-500/30 text-center">
          <p className="text-4xl font-black text-green-400">5 ENE</p>
          <p className="text-gray-300 mt-2">Fecha cierre</p>
        </div>
      </div>
    </div>
  );
}