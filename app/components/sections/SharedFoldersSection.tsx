'use client';

import { sharedFolders } from '@/app/data/sharedFolders';

export default function SharedFoldersSection() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-xl p-6 border-l-4 border-cyan-500">
        <h2 className="text-3xl font-black text-cyan-400 mb-2">📂 CARPETAS COMPARTIDAS</h2>
        <p className="text-gray-200">Acceso a todo el material de DForest</p>
      </div>

      {/* Folders Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {sharedFolders.map((folder, index) => (
          <a
            key={folder.id}
            href={folder.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 backdrop-blur-xl rounded-xl p-6 border-l-4 border-cyan-500 hover:scale-105 transition-all hover:shadow-lg hover:shadow-cyan-500/30"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Icon & Title */}
            <div className="flex items-start gap-4 mb-3">
              <div className="text-5xl group-hover:scale-110 transition-transform">
                {folder.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-cyan-400 mb-1 group-hover:text-cyan-300">
                  {folder.title}
                </h3>
                <p className="text-gray-400 text-sm">{folder.description}</p>
              </div>
            </div>

            {/* Link Button */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
              <span className="text-xs text-gray-500 uppercase font-bold">
                {folder.type === 'drive' ? 'Google Drive' : folder.type}
              </span>
              <span className="text-cyan-400 font-bold group-hover:translate-x-2 transition-transform">
                Abrir →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-blue-500/10 backdrop-blur-xl rounded-xl p-6 border border-blue-500/30">
        <h3 className="text-xl font-bold text-blue-400 mb-3">ℹ️ Información Importante</h3>
        <ul className="space-y-2 text-gray-200 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Todas las carpetas son de solo lectura</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Descargá el material que necesites</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>No compartas los links públicamente</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-400">•</span>
            <span>Contenido actualizado constantemente</span>
          </li>
        </ul>
      </div>
    </div>
  );
}