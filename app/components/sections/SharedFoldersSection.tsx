'use client';

import { useState } from 'react';
import { sharedFolders } from '@/app/data/sharedFolders';

export default function SharedFoldersSection() {
  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&\s]+)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const getSoundCloudEmbedUrl = (url: string) => {
    return `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'drive': return '📁';
      case 'soundcloud': return '🎧';
      case 'youtube': return '▶️';
      default: return '🔗';
    }
  };

  const musicFolders = sharedFolders.filter(f => f.type === 'soundcloud' || f.type === 'youtube');
  const documentFolders = sharedFolders.filter(f => f.type === 'drive');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-cyan-500">
        <h2 className="text-3xl font-black text-cyan-400 mb-2">📂 CARPETAS COMPARTIDAS</h2>
        <p className="text-gray-200">Todo el material de DForest organizado y listo para usar</p>
      </div>

      {/* Documents Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-cyan-400">
          📁 Documentos y Material
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {documentFolders.map((folder, index) => (
            <a
              key={folder.id}
              href={folder.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-xl rounded-xl p-5 border-2 border-transparent hover:border-cyan-500 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="text-4xl group-hover:scale-110 transition-transform">
                  {folder.icon}
                </div>
                <div className="px-2 py-1 bg-cyan-500/20 rounded-full">
                  <span className="text-xs font-bold text-cyan-400 uppercase">
                    {getIconForType(folder.type)} {folder.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="mb-4">
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {folder.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {folder.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-end pt-3 border-t border-white/10">
                <span className="text-cyan-400 font-bold group-hover:translate-x-2 transition-transform text-sm">
                  Abrir Drive →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Music Section */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-purple-400">
          🎧 Música de Artistas
        </h3>
        
        <div className="grid gap-4">
          {musicFolders.map((folder, index) => {
            const isExpanded = selectedMedia === folder.id;
            const isYouTube = folder.type === 'youtube';
            const isSoundCloud = folder.type === 'soundcloud';

            return (
              <div
                key={folder.id}
                className="bg-white/5 backdrop-blur-xl rounded-xl p-5 border-l-4 border-purple-500 transition-all"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">
                      {folder.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {folder.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {folder.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedMedia(isExpanded ? null : folder.id)}
                      className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors"
                    >
                      {isExpanded ? '✕ Cerrar' : '▶ Reproducir'}
                    </button>
                    <a
                      href={folder.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors"
                    >
                      Abrir {isYouTube ? 'YouTube' : 'SoundCloud'} →
                    </a>
                  </div>
                </div>

                {/* Embedded Player */}
                {isExpanded && (
                  <div className="mt-4 rounded-lg overflow-hidden border-2 border-purple-500 animate-fadeIn">
                    {isYouTube && getYouTubeEmbedUrl(folder.link) && (
                      <iframe
                        width="100%"
                        height="400"
                        src={getYouTubeEmbedUrl(folder.link) || ''}
                        title={folder.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full"
                      />
                    )}
                    {isSoundCloud && (
                      <iframe
                        width="100%"
                        height="166"
                        scrolling="no"
                        frameBorder="no"
                        allow="autoplay"
                        src={getSoundCloudEmbedUrl(folder.link)}
                        className="w-full"
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-blue-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-400 mb-3">💡 Cómo Usar</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-white mb-2">📁 Material Gráfico:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Click en la carpeta para abrir Drive</li>
              <li>• Descargá el material que necesites</li>
              <li>• Todo listo para usar en redes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">🎧 Música:</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Click &quot;▶ Reproducir&quot; para escuchar aquí</li>
              <li>• O abrí en YouTube/SoundCloud</li>
              <li>• Conocé el sonido de cada artista</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-green-500/10 backdrop-blur-xl rounded-xl p-6 border border-green-500/30">
        <h3 className="text-xl font-bold text-green-400 mb-3">ℹ️ Información Importante</h3>
        <ul className="space-y-2 text-gray-200 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Todo el material es de uso exclusivo del equipo DForest</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>No compartas los links públicamente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>El contenido se actualiza constantemente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-400">✓</span>
            <span>Escuchá la música de los artistas para conocer su estilo</span>
          </li>
        </ul>
      </div>
    </div>
  );
}