'use client';

import { calendarData } from '@/app/data/calendar';

export default function CalendarioSection() {
  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case 'CRITICAL':
        return {
          circle: 'bg-red-500 shadow-red-500/50',
          border: 'border-red-500',
          text: 'text-red-400',
          bg: 'bg-red-500',
          icon: 'text-red-400'
        };
      case 'HIGH':
        return {
          circle: 'bg-orange-500 shadow-orange-500/50',
          border: 'border-orange-500',
          text: 'text-orange-400',
          bg: 'bg-orange-500',
          icon: 'text-orange-400'
        };
      case 'EVENT':
        return {
          circle: 'bg-green-500 shadow-green-500/50',
          border: 'border-green-500',
          text: 'text-green-400',
          bg: 'bg-green-500',
          icon: 'text-green-400'
        };
      default:
        return {
          circle: 'bg-blue-500 shadow-blue-500/50',
          border: 'border-blue-500',
          text: 'text-blue-400',
          bg: 'bg-blue-500',
          icon: 'text-blue-400'
        };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-blue-500">
        <h2 className="text-3xl font-black text-blue-400 mb-2">📆 CALENDARIO ESTRATÉGICO</h2>
        <p className="text-gray-200">Plan de acción día por día hasta el evento</p>
      </div>

      {/* Current Date Alert */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-l-4 border-yellow-500 rounded-xl p-6 backdrop-blur-xl animate-pulse">
        <h3 className="text-2xl font-black text-yellow-400 mb-2">📍 ESTAMOS AQUÍ</h3>
        <p className="text-white text-lg mb-2">Hoy: <strong>8 de Enero 2026</strong></p>
        <p className="text-white text-lg">Faltan: <strong className="text-[#ff8800]">3 DÍAS</strong> para el evento</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-orange-500 to-green-500"></div>

        {/* Calendar Days */}
        <div className="space-y-6 relative">
          {calendarData.map((day, index) => {
            const styles = getPriorityStyles(day.priority);
            return (
              <div
                key={index}
                className="ml-20 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Date Circle */}
                <div className={`absolute -left-24 top-4 w-16 h-16 rounded-full ${styles.circle} border-4 border-black flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-black text-xs text-center leading-tight">
                    {day.date.split(' - ')[0]}
                  </span>
                </div>

                {/* Card */}
                <div className={`bg-white/5 backdrop-blur-xl rounded-xl p-6 border-l-4 ${styles.border} hover:scale-[1.02] transition-all`}>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className={`text-2xl font-black ${styles.text} mb-1`}>
                        {day.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{day.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full ${styles.bg} text-white text-xs font-bold`}>
                      {day.priority}
                    </span>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2">
                    {day.tasks.map((task, taskIndex) => (
                      <div
                        key={taskIndex}
                        className="flex items-start gap-3 bg-black/30 rounded-lg p-3 hover:bg-black/40 transition-colors"
                      >
                        <span className={`${styles.icon} text-xl flex-shrink-0`}>
                          {task.startsWith('✅') ? '✅' : '📌'}
                        </span>
                        <p className="text-gray-200">{task.replace(/^[✅📌⏰]\s*/, '')}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quick Reference */}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Priority Legend */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">🎯 Niveles de Prioridad</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-gray-200"><strong className="text-red-400">CRITICAL:</strong> Máxima urgencia</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-gray-200"><strong className="text-orange-400">HIGH:</strong> Alta prioridad</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-gray-200"><strong className="text-green-400">EVENT:</strong> Día del evento</span>
            </div>
          </div>
        </div>

        {/* Key Actions */}
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">⚡ Acciones Clave</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Stories diarias con countdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Responder DMs en menos de 2 horas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Destacar promo 2x$40.000</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Mencionar horario extendido</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span>
              <span>Crear urgencia últimos días</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Post-Event */}
      <div className="bg-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-400 mb-3">📸 Post-Evento (12 Enero)</h3>
        <p className="text-gray-200 mb-4">No olvides después del evento:</p>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span>Publicar highlights y mejores momentos</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span>Agradecer a todos los asistentes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span>Repostear contenido de los asistentes</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-400">•</span>
            <span>Anunciar próximo evento</span>
          </li>
        </ul>
      </div>
    </div>
  );
}