export interface Reel {
  id: number;
  title: string;
  hook: string;
  script: string;
  duration: string;
  music: string;
  tips: string[];
}

export const reels: Reel[] = [
  {
    id: 1,
    title: 'Anuncio Evento - Impacto Visual',
    hook: '11 DE ENERO - VUELVEN JUNTOS',
    script: `[0-2s] Texto en pantalla: "11 DE ENERO"
[2-4s] Fade a: "PFIRTER + SGALIA"
[4-6s] Clips de sets anteriores (archivo)
[6-8s] "DESPUÉS DE AÑOS, JUNTOS DE NUEVO"
[8-10s] Logo DForest + "10-22hs EXTENDIDO"
[10-12s] "CANNING - LINK EN BIO"
[12-15s] Montaje rápido: pileta, vinilos, ambiente`,
    duration: '15 segundos',
    music: 'Track de Pfirter - "Iron" o similar (techno atmosférico)',
    tips: [
      'Usar transiciones rápidas y dinámicas',
      'Texto grande y legible',
      'Colores corporativos: naranja/azul',
      'Mostrar energía del evento'
    ]
  },
  {
    id: 2,
    title: 'Countdown Urgencia',
    hook: 'QUEDAN 3 DÍAS',
    script: `[0-1s] Pantalla negra, aparece: "⚠️"
[1-3s] "QUEDAN SOLO 3 DÍAS"
[3-5s] Clips rápidos del lugar (pileta, espacio)
[5-7s] "PFIRTER + SGALIA + SORPRESA"
[7-9s] "POCAS ENTRADAS DISPONIBLES"
[9-11s] "NO TE QUEDES AFUERA"
[11-13s] Promo: "2x$40.000"
[13-15s] "LINK EN BIO - ASEGURÁ TU LUGAR"`,
    duration: '15 segundos',
    music: 'Build up progresivo de techno',
    tips: [
      'Crear sensación de urgencia',
      'Texto con animación de entrada fuerte',
      'Usar countdown timer visual',
      'Colores rojos/amarillos para urgencia'
    ]
  },
  {
    id: 3,
    title: 'Lineup Detallado',
    hook: 'EL LINEUP MÁS ESPERADO',
    script: `[0-2s] "EL LINEUP QUE TODOS ESPERABAN"
[2-4s] Foto PFIRTER + bio mini: "Techno desde Barcelona"
[4-6s] Foto SGALIA + bio mini: "Leyenda del house argentino"
[6-8s] Montaje rápido B2Bs: RDKS/Nano, Nawe/Aleto, Nahu/Braian
[8-10s] "TODO EN VINILO"
[10-12s] "8 ARTISTAS + SORPRESA"
[12-15s] "11 ENERO - 10-22HS - LINK EN BIO"`,
    duration: '15 segundos',
    music: 'Mix de tracks de los artistas',
    tips: [
      'Mostrar fotos de cada artista',
      'Destacar "TODO EN VINILO"',
      'Usar @ de cada artista para tagguear',
      'Formato carrusel de artistas'
    ]
  },
  {
    id: 4,
    title: 'Beneficios del Evento',
    hook: '¿POR QUÉ ESTA POOLPARTY?',
    script: `[0-2s] "¿POR QUÉ VENIR A DFOREST?"
[2-3s] ✓ "PILETA CLIMATIZADA"
[3-4s] ✓ "12 HORAS DE MÚSICA"
[4-5s] ✓ "8 ARTISTAS EN VIVO"
[5-6s] ✓ "TODO EN VINILO"
[6-7s] ✓ "AL AIRE LIBRE"
[7-8s] ✓ "BARRA Y GASTRONOMÍA"
[8-9s] ✓ "PARKING GRATIS"
[9-10s] ✓ "COMBI DESDE CABA"
[10-12s] "PRIMERA POOLPARTY 2026"
[12-15s] "11 ENERO - ENTRADAS EN BIO"`,
    duration: '15 segundos',
    music: 'House uplifting y positivo',
    tips: [
      'Checks verdes animados',
      'Cada beneficio 1 segundo',
      'Ritmo dinámico',
      'Mostrar imágenes de cada beneficio'
    ]
  },
  {
    id: 5,
    title: 'Testimonial / Hype',
    hook: 'ESTO ES DFOREST',
    script: `[0-2s] Clips de eventos anteriores (gente bailando)
[2-4s] "ESTO ES LO QUE TE PERDÉS"
[4-6s] Más clips: DJ tocando vinilo
[6-8s] Clips: pileta, ambiente, sunset
[8-10s] "LA PRIMERA DEL 2026"
[10-12s] "PFIRTER + SGALIA JUNTOS"
[12-15s] "11 ENERO - NO FALTES"`,
    duration: '15 segundos',
    music: 'Peak time techno (energético)',
    tips: [
      'Usar contenido real de eventos anteriores',
      'Mostrar emoción y energía',
      'Clips muy cortos (0.5-1 seg cada uno)',
      'Transiciones en beat de la música'
    ]
  }
];