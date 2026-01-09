# 🌴 DForest Event Panel

Panel de gestión de contenido para eventos de DForest. Sistema modular y reutilizable para crear paneles promocionales de eventos de música electrónica.

## 🚀 Demo Live

**Evento actual:** DForest Poolparty - 11 Enero 2026
- 🔗 URL: https://panel-next.netlify.app/

## ✨ Features

- ⏰ **Countdown Timer** en tiempo real hasta el evento
- 🎨 **Theme Toggle** (Dark/Light mode)
- 📱 **Fully Responsive** (Mobile-first design)
- 🎤 **Lineup Management** con bios completas de artistas
- 📸 **Instagram Content** (Stories, Captions, DMs pre-armados)
- 🎥 **Reels Scripts** listos para grabar
- 📅 **Strategic Calendar** día por día
- 🎧 **Embedded Media Players** (SoundCloud, YouTube)
- 📂 **Shared Folders** con acceso a todo el material
- 💾 **Easy Data Updates** via config files

## 🛠️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Deployment:** Netlify (auto-deploy from GitHub)
- **Icons:** Emojis nativos
- **Media:** Next.js Image optimization

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm o yarn
- Git

### Setup
```bash
# Clone repository
git clone https://github.com/JhonCesar89/frontend.git
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Abrir http://localhost:3000

## 📁 Project Structure
```
rrpp-next/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Header con countdown y theme toggle
│   │   ├── Sidebar.tsx          # Menu de navegación
│   │   └── sections/            # Secciones del panel
│   │       ├── HomeSection.tsx
│   │       ├── StoriesSection.tsx
│   │       ├── CaptionsSection.tsx
│   │       ├── DMsSection.tsx
│   │       ├── ArtistasSection.tsx
│   │       ├── ReelsSection.tsx
│   │       ├── CalendarioSection.tsx
│   │       ├── SorteoSection.tsx
│   │       └── SharedFoldersSection.tsx
│   ├── data/
│   │   ├── event.ts             # ⚙️ Datos del evento
│   │   ├── artists.ts           # 🎤 Artistas y bios
│   │   ├── stories.ts           # 📸 Stories
│   │   ├── captions.ts          # 📝 Captions
│   │   ├── dms.ts               # 💬 DMs
│   │   ├── reels.ts             # 🎥 Reels
│   │   ├── calendar.ts          # 📅 Calendario
│   │   └── sharedFolders.ts     # 📂 Links a carpetas
│   ├── types/
│   │   └── index.ts             # TypeScript interfaces
│   ├── globals.css              # Estilos globales + theme
│   ├── layout.tsx
│   └── page.tsx                 # Main page
├── public/
│   └── assets/
│       ├── logos/               # Logo del evento
│       └── fotos_artistas/      # Fotos de artistas
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎯 Crear un Nuevo Evento

### Método 1: Actualizar datos existentes

1. **Actualizar evento:**
```typescript
// app/data/event.ts
export const eventData: Event = {
  date: 'TU_FECHA',
  time: 'HORARIO',
  location: 'UBICACIÓN',
  daysLeft: CALCULAR_DIAS
};
```

2. **Actualizar artistas:**
```typescript
// app/data/artists.ts
export const artists: Artist[] = [
  {
    id: 'artist-id',
    name: 'NOMBRE',
    bio: 'Biografía completa...',
    instagram: '@instagram',
    category: 'headliner' | 'support',
    photo: '/assets/fotos_artistas/foto.jpg'
  }
];
```

3. **Actualizar assets:**
- Logo: `/public/assets/logos/logo.png`
- Fotos artistas: `/public/assets/fotos_artistas/`

### Método 2: Template System (Coming Soon)

Ver sección **"Template System"** abajo.

## 🚀 Deployment

### Netlify (Recomendado)

1. Push a GitHub:
```bash
git add .
git commit -m "Update event data"
git push origin main
```

2. Netlify auto-deploy (configurado)

### Manual Build
```bash
npm run build
npm start
```

## 🎨 Customization

### Colores del Evento

Editar en `globals.css`:
```css
/* Colores principales */
--color-primary: #0088ff;    /* Azul */
--color-secondary: #ff8800;  /* Naranja */
```

### Theme (Dark/Light)

Ya configurado. El usuario puede cambiar con el botón ☀️/🌙 en el header.

## 📋 Content Checklist

Antes de deployar un nuevo evento, verificar:

- [ ] Fecha y horario actualizados
- [ ] Logo del evento
- [ ] Fotos de todos los artistas (800x800px)
- [ ] Bios de artistas completas
- [ ] Stories actualizadas (mínimo 10)
- [ ] Captions con hashtags
- [ ] Respuestas DMs
- [ ] Guiones de Reels
- [ ] Calendario estratégico
- [ ] Links a carpetas compartidas
- [ ] Links a música de artistas

## 🐛 Troubleshooting

### El countdown no actualiza
```bash
# Hard refresh
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### Errores de TypeScript
```bash
npm run build
# Revisar errores en consola
```

### Fotos no se ven
- Verificar que estén en `/public/assets/fotos_artistas/`
- Nombres sin espacios ni caracteres especiales
- Formato: .jpg, .png, .webp

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork el repo
2. Crear branch (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Add nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 License

Este proyecto es privado y pertenece a DForest.

## 👥 Team

- **Development:** Jhon Cesar
- **Design:** DForest Team
- **Content:** DForest RRPP Team

## 📞 Contact

- Instagram: [@dforest.arg](https://instagram.com/dforest.arg)
- Email: info@dforest.com

---

**Hecho con 💚 para la escena electrónica argentina**