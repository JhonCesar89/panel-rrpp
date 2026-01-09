'use client';

import { useState, useEffect, useMemo } from 'react';

export default function CountdownTimer() {
  const eventDate = new Date('2026-01-11T10:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [motivationalMessage, setMotivationalMessage] = useState('');
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

// Wrap messages in useMemo to prevent re-creation on every render
  const messages = useMemo(() => [
    "🔥 ÚLTIMA OPORTUNIDAD! No te pierdas la primera poolparty del 2026!",
    "⚡ SE ACABA EL TIEMPO! Asegurá tu lugar AHORA!",
    "🎉 EVENTO HISTÓRICO! PFIRTER + SGALIA juntos de nuevo!",
    "💥 QUEDAN POCAS ENTRADAS! La fiesta casi SOLD OUT!",
    "🌟 HORARIO EXTENDIDO! Ahora hasta las 22hs - Más fiesta!",
    "🚀 NO TE QUEDES AFUERA! Esto pasa UNA vez al año!",
    "🔊 LINEUP INCREÍBLE! 8 artistas + invitado sorpresa!",
    "💎 MEJOR PRECIO! 2x$40.000 - Ahorrás $20.000!",
    "🏆 SÉ PARTE DE LA HISTORIA! Primera poolparty 2026!"
  ], []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [eventDate]);

  // Message rotation effect
  useEffect(() => {
    const messageTimer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(messageTimer);
  }, [messages.length]);

  // Update message when index changes
  useEffect(() => {
    setMotivationalMessage(messages[currentMessageIndex]);
  }, [currentMessageIndex, messages]);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 animate-gradient"></div>
      
      {/* Content */}
      <div className="relative backdrop-blur-xl bg-black/30 rounded-2xl p-6 border-4 border-yellow-400 shadow-2xl shadow-yellow-500/50">
        
        {/* Motivational Message */}
        <div className="text-center mb-6">
          <div className="inline-block animate-bounce">
            <p className="text-2xl md:text-3xl font-black text-white drop-shadow-lg px-4 py-2 bg-black/50 rounded-xl">
              {motivationalMessage}
            </p>
          </div>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {/* Days */}
          <div className="bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-white/30 transform hover:scale-110 transition-transform">
            <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg animate-pulse">
              {timeLeft.days}
            </div>
            <div className="text-xs md:text-sm font-bold text-yellow-300 mt-2">DÍAS</div>
          </div>

          {/* Hours */}
          <div className="bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-white/30 transform hover:scale-110 transition-transform">
            <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-bold text-yellow-300 mt-2">HORAS</div>
          </div>

          {/* Minutes */}
          <div className="bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-white/30 transform hover:scale-110 transition-transform">
            <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-bold text-yellow-300 mt-2">MINUTOS</div>
          </div>

          {/* Seconds */}
          <div className="bg-gradient-to-b from-white/20 to-white/5 backdrop-blur-sm rounded-xl p-3 md:p-4 border-2 border-white/30 transform hover:scale-110 transition-transform">
            <div className="text-4xl md:text-6xl font-black text-white drop-shadow-lg animate-pulse">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="text-xs md:text-sm font-bold text-yellow-300 mt-2">SEGUNDOS</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 rounded-full shadow-lg shadow-green-500/50 animate-pulse">
            <span className="text-2xl">🎟️</span>
            <span className="font-black text-white text-lg">CONSEGUÍ TUS ENTRADAS AHORA!</span>
            <span className="text-2xl">🚀</span>
          </div>
        </div>

        {/* Urgency Indicators */}
        <div className="mt-4 flex justify-center gap-2 flex-wrap">
          <span className="px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
            ⚡  SE VENDE RÁPIDO
          </span>
          <span className="px-3 py-1 bg-orange-600 text-white text-xs font-bold rounded-full animate-pulse">
            🔥 LA FIESTA EL FINDE ES ACÁ</span>
          <span className="px-3 py-1 bg-yellow-600 text-white text-xs font-bold rounded-full animate-pulse">
            ⏰ NO ESPERES MÁS!
          </span>
        </div>
      </div>
    </div>
  );
}