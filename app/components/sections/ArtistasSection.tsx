'use client';

import { useState } from 'react';
import { artists } from '@/app/data/artists';
import Image from 'next/image';

export default function ArtistasSection() {
  const [expandedArtists, setExpandedArtists] = useState<string[]>([]);
  
  const headliners = artists.filter(a => a.category === 'headliner');
  const support = artists.filter(a => a.category === 'support');

  const toggleExpand = (artistId: string) => {
    setExpandedArtists(prev =>
      prev.includes(artistId)
        ? prev.filter(id => id !== artistId)
        : [...prev, artistId]
    );
  };

  const getShortBio = (bio: string) => {
    return bio.length > 150 ? bio.substring(0, 150) + '...' : bio;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0088ff]/20 to-purple-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-[#0088ff]">
        <h2 className="text-3xl font-black text-[#0088ff] mb-2">🎤 LINEUP COMPLETO</h2>
        <p className="text-gray-200">9 artistas confirmados</p>
      </div>

      {/* Headliners */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#ff8800]">
          🔥 HEADLINERS
        </h3>
        
        {headliners.map((artist, index) => {
          const isExpanded = expandedArtists.includes(artist.id);
          return (
            <div
              key={artist.id}
              className="bg-gradient-to-r from-[#ff8800]/10 to-red-500/10 backdrop-blur-xl rounded-xl p-6 border-l-4 border-[#ff8800] hover:scale-[1.01] transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Artist Photo */}
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden border-4 border-[#ff8800] shadow-lg shadow-[#ff8800]/50">
                    <Image
                      src={artist.photo}
                      alt={artist.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Artist Info */}
                <div className="flex-1">
                  <h4 className="text-3xl font-black text-[#ff8800] mb-2">{artist.name}</h4>
                  {artist.realName && (
                    <p className="text-gray-400 mb-3 italic">{artist.realName}</p>
                  )}
                  <p className="text-gray-200 leading-relaxed mb-4">
                    {isExpanded ? artist.bio : getShortBio(artist.bio)}
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <a
                      href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform"
                    >
                      📱 {artist.instagram}
                    </a>
                    
                    {artist.bio.length > 150 && (
                      <button
                        onClick={() => toggleExpand(artist.id)}
                        className="text-[#ff8800] font-bold hover:text-orange-400 transition-colors"
                      >
                        {isExpanded ? '← Ver menos' : 'Ver más →'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Acts */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#0088ff]">
          🎧 SUPPORT
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {support.map((artist, index) => {
            const isExpanded = expandedArtists.includes(artist.id);
            return (
              <div
                key={artist.id}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border-l-4 border-[#0088ff] hover:scale-[1.02] transition-all"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4 mb-4">
                  {/* Artist Photo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden border-2 border-[#0088ff] shadow-md shadow-[#0088ff]/30">
                      <Image
                        src={artist.photo}
                        alt={artist.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className="flex-1">
                    <h4 className="text-xl font-black text-[#0088ff] mb-1">{artist.name}</h4>
                    {artist.realName && (
                      <p className="text-gray-400 text-sm mb-2 italic">{artist.realName}</p>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  {isExpanded ? artist.bio : getShortBio(artist.bio)}
                </p>
                
                <div className="flex items-center gap-3">
                  <a
                    href={`https://instagram.com/${artist.instagram.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 text-sm font-bold transition-colors"
                  >
                    📱 {artist.instagram}
                  </a>
                  
                  {artist.bio.length > 150 && (
                    <button
                      onClick={() => toggleExpand(artist.id)}
                      className="text-[#0088ff] text-sm font-bold hover:text-blue-400 transition-colors ml-auto"
                    >
                      {isExpanded ? '← Menos' : 'Más →'}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* B2B Info */}
      <div className="bg-purple-500/10 backdrop-blur-xl rounded-xl p-6 border border-purple-500/30">
        <h3 className="text-xl font-bold text-purple-400 mb-3">🔊 Formato B2B (Back to Back)</h3>
        <p className="text-gray-200 mb-4">
          Los sets B2B son cuando dos DJs tocan juntos, alternando tracks y creando una energía única. 
          En DForest tenemos 3 B2Bs increíbles:
        </p>
        <div className="space-y-2 text-gray-300">
          <p>🎵 <strong className="text-[#0088ff]">RDKS B2B Nano</strong> - Retórica Records en acción</p>
          <p>🎵 <strong className="text-[#0088ff]">Nawe B2B Aleto</strong> - Vinilo selectos y groove constante</p>
          <p>🎵 <strong className="text-[#0088ff]">Nahu G B2B Braian Comparada</strong> - Energía fresca emergente</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-[#ff8800] mb-4">⏰ Horarios Estimados</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#0088ff] w-20">10:00</span>
            <span className="text-gray-200">Apertura - Warm up</span>
          </div>
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#0088ff] w-20">12:00</span>
            <span className="text-gray-200">Nahu G B2B Braian Comparada</span>
          </div>
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#0088ff] w-20">14:00</span>
            <span className="text-gray-200">Nawe B2B Aleto</span>
          </div>
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#0088ff] w-20">16:00</span>
            <span className="text-gray-200">RDKS B2B Nano</span>
          </div>
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#ff8800] w-20">18:00</span>
            <span className="text-gray-200 font-bold">🔥 SGALIA (Headliner)</span>
          </div>
          <div className="flex items-center gap-4 pb-3 border-b border-white/10">
            <span className="text-2xl font-black text-[#ff8800] w-20">20:00</span>
            <span className="text-gray-200 font-bold">🔥 PFIRTER (Headliner)</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-green-400 w-20">21:30</span>
            <span className="text-green-400 font-bold">🎭 KOREAH (Sorpresa)</span>
          </div>
        </div>
        <p className="text-sm text-gray-400 mt-4 italic">*Horarios aproximados, sujetos a cambios</p>
      </div>
    </div>
  );
}