export interface SharedFolder {
  id: number;
  title: string;
  description: string;
  link: string;
  type: 'drive' | 'dropbox' | 'onedrive' | 'other'| 'soundcloud'| 'youtube';
  icon: string;
}

export const sharedFolders: SharedFolder[] = [
  {
    id: 1,
    title: 'Contenido Gráfico',
    description: 'Flyers, logos, assets visuales del evento',
    link: 'https://drive.google.com/drive/folders/1Ocz34sIdz18BBWOBSPMzD2wWO7IOSEvw?usp=drive_link',
    type: 'drive',
    icon: '🎨'
  },
  {
    id: 2,
    title: 'Fotos de Artistas',
    description: 'Fotos oficiales de todos los artistas',
    link: 'https://drive.google.com/drive/folders/14b6Civv1s2UBrxphIlVTvqfpHr6oVbHh?usp=drive_link',
    type: 'drive',
    icon: '📸'
  },
  {
    id: 3,
    title: 'Material Promocional',
    description: 'Videos, reels, contenido para redes',
    link: 'https://drive.google.com/drive/folders/1u21yE9dHE6OhhgUHBWoWrIufQpt0v3zn',
    type: 'drive',
    icon: '🎬'
  },
  {
    id: 4,
    title: 'Documentos Evento',
    description: 'Fotos - Bios - Logística - Información relevante',
    link: 'https://drive.google.com/drive/folders/1scbzeZF9zcLntLBERbdbRCmk9qnEWhIN?usp=drive_link',
    type: 'drive',
    icon: '📋'
  },
  {
    id: 5,
    title: 'PFIRTER Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/pfirtermusic',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 6,
    title: 'JPSgalia Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/jpsgalia',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 7,
    title: 'Nano Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/nano-techno',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 8,
    title: 'RDKS Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/rdksar',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 9,
    title: 'ALETø Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/alejandro-nicolas-492404877',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 10,
    title: 'NAWE Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://soundcloud.com/leo-morlacca/leomorlacca-b2b-nawe?si=1c24027711b64f23b4b09d154b9d55fd&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnJ5-iajUdMSO2UgJicyu5xJu1c2dTajBkZDUAhVlG5oy68G1ot8lc92slQEo_aem_6QXO5rKEOo6bfdkg-6LCjA',
    type: 'soundcloud',
    icon: '🎧'
  },
  {
    id: 11,
    title: 'Koreah Tracks y Playlists',
    description: 'Información musical de los artistas y playlists oficiales',
    link: 'https://youtu.be/dFYqSwaXU5o?si=HJA_87QfS6neRPaM',
    type: 'youtube',
    icon: '🎧'
  }
];