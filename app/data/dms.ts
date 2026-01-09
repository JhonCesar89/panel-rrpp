export interface DM {
  id: number;
  question: string;
  response: string;
  category: 'precio' | 'ubicacion' | 'lineup' | 'logistica' | 'promo';
}

export const dms: DM[] = [
  {
    id: 1,
    question: '¿Cuánto sale la entrada?',
    response: `¡Hola! 👋

Tenemos estas opciones:

🔥 ÚLTIMAS 2x$40.000
→ 2 entradas por $40.000 ($20k c/u)
→ Ahorrás $20.000

👥 PROMO GRUPAL
→ 4 personas: $100.000 ($25k c/u)
→ 4 personas + Gin: $120.000

💳 DATO:
Pagando por transferencia solo pagás 2% de comisión (vs 15% online)

¿Te mando el link para reservar? 🎟️`,
    category: 'precio'
  },
  {
    id: 2,
    question: '¿Dónde es el evento?',
    response: `📍 El evento es en CANNING, ZONA SUR

🚐 Hay combi desde Capital (te paso horarios y punto de encuentro)
🚗 Hay estacionamiento disponible en el lugar
📱 Te paso la ubicación exacta por privado cuando confirmes tu entrada

¿Venís desde CABA o desde zona sur? 🌴`,
    category: 'ubicacion'
  },
  {
    id: 3,
    question: '¿Quiénes tocan?',
    response: `🎧 LINEUP COMPLETO:

🔥 HEADLINERS:
→ PFIRTER (techno atmosférico desde Barcelona)
→ SGALIA (leyenda del house argentino)

🎵 SUPPORT:
→ RDKS B2B Nano
→ Nawe B2B Aleto  
→ Nahu G B2B Braian Comparada

+ 🎭 ARTISTA SORPRESA (se anuncia pronto!)

Todo en vinilo, de 10 a 22hs sin parar 🔊

¿Ya conocías a PFIRTER y SGALIA? Son historia juntos 🔥`,
    category: 'lineup'
  },
  {
    id: 4,
    question: '¿Qué horario es?',
    response: `⏰ HORARIO EXTENDIDO:

📅 Domingo 11 de Enero
🕙 10:00hs a 22:00hs

¡Son 12 horas de música sin parar! 🔥

El evento arranca temprano para aprovechar todo el día al sol y termina de noche para cerrar con la mejor energía 🌞🌙

¿Venís desde el principio o te sumás más tarde? 🎵`,
    category: 'logistica'
  },
  {
    id: 5,
    question: '¿Hay combi desde capital?',
    response: `🚐 SÍ! Hay combi ida y vuelta desde CABA

📍 Punto de encuentro: [Lugar específico en CABA]
🕙 Horario de salida: [Hora]
🔙 Horario de vuelta: [Hora]

El costo es [precio] ida y vuelta
Se reserva junto con la entrada

¿Te sumo a la lista de la combi? 🚐✨`,
    category: 'logistica'
  },
  {
    id: 6,
    question: '¿Qué incluye la entrada?',
    response: `Tu entrada incluye TODO esto 🎉

✅ Acceso de 10 a 22hs
✅ Pileta climatizada
✅ Música en vivo (8 artistas!)
✅ Zona al aire libre
✅ Zona chill para descansar
✅ Estacionamiento

NO incluye:
❌ Consumiciones (barra y comida se pagan aparte)
❌ Combi (se reserva aparte)

Es todo el día de fiesta 🌴
¿Aseguramos tu lugar? 🎟️`,
    category: 'logistica'
  },
  {
    id: 7,
    question: '¿Cómo compro las entradas?',
    response: `Para reservar tu entrada:

1️⃣ Te paso el link de pago
2️⃣ Elegís la promo que más te sirva
3️⃣ Completás el pago
4️⃣ Te llega la confirmación al mail
5️⃣ ¡Listo! Ya estás adentro 🎉

💳 Podés pagar con:
→ Tarjeta (MercadoPago - 15% comisión)
→ Transferencia (solo 2% comisión) ← RECOMENDADO

¿Te mando el link? 🎟️`,
    category: 'promo'
  },
  {
    id: 8,
    question: '¿Hasta cuándo es la promo?',
    response: `🔥 La promo 2x$40.000 está activa AHORA

⚠️ QUEDAN SOLO 3 DÍAS PARA EL EVENTO

Te recomiendo asegurar tu lugar YA porque:
→ Quedan pocas entradas
→ Es el evento más esperado del verano
→ PFIRTER + SGALIA juntos no pasa siempre

El precio puede subir en cualquier momento o agotarse 🚨

¿Reservamos? No te quedes afuera! 🎟️`,
    category: 'promo'
  },
  {
    id: 9,
    question: '¿Puedo ir solo/a?',
    response: `¡OBVIO! 🙌

Mucha gente viene sola y termina conociendo gente copada. La onda de DForest es súper inclusiva y la música une a todos 🎵

Si venís solo/a:
→ Te sumás al grupo de WhatsApp del evento
→ Conocés gente antes del evento  
→ La vamos a pasar increíble igual 🔥

¿Te animas? El ambiente es lo más importante y acá siempre es buena onda 🌴`,
    category: 'logistica'
  },
  {
    id: 10,
    question: '¿Qué onda la música?',
    response: `🎵 La música va a estar INCREÍBLE

Vas a escuchar:
→ House clásico y minimal
→ Techno atmosférico y oscuro  
→ Todo mezclado en VINILO (no hay USB acá!)

Los DJs tienen +20 años de experiencia
PFIRTER tocó en Berghain, Tresor, Time Warp
SGALIA es leyenda argentina del vinilo

Si te gusta la música electrónica de verdad, esto es para vos 🔊

¿Ya escuchaste algo de PFIRTER? Te paso links si querés 🎧`,
    category: 'lineup'
  },
  {
    id: 11,
    question: 'Hola cómo estás? Te invito al evento...',
    response: `Quería invitarte a nuestra POOLPARTY ESTE DOMINGO 11 en Canning, zona sur 

Ticket en promoción $20.000

Los djs 
PFIRTER Y SGALIA se reúnen luego de 17 años 🙂‍↕️

Hay Traslados desde CABA 🚐
Cualquier cosa me avisas ! Espero tengas un lindo día 🫶🏻`,
    category: 'promo'
  }
];