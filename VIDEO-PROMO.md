# 🎬 Video Promocional - El Impostor

## ✅ ¡Video Creado con Éxito!

He creado un video promocional profesional de 15 segundos para tu app "El Impostor" usando Remotion.

## 🎥 Contenido del Video

El video muestra todas las fases de tu juego:

1. **Intro Épica** (3s)
   - Logo animado con efectos de rotación y escala
   - Fondo con gradientes morados vibrantes
   - Subtítulo: "¿Puedes encontrar al impostor?"

2. **Configuración de Partida** (2.5s)
   - Animación de entrada de 4 jugadores (Ana, Carlos, María, Pedro)
   - Cada jugador con su avatar circular colorido
   - Contador de impostores con efecto de escala

3. **Revelación de Roles** (2.5s)
   - Círculo giratorio que revela el rol
   - Muestra "Eres CIVIL" con la palabra "León"
   - Instrucciones de uso

4. **Fase de Debate** (4s)
   - Jugadores vivos en grid 2x2
   - Estadísticas de civiles e impostores
   - Animación de votación y eliminación
   - Revelación dramática: "María era IMPOSTOR"

5. **Outro con Call-to-Action** (3s)
   - Logo principal
   - 3 características clave con iconos
   - Botón "¡Juega Ahora!" con efecto de pulso
   - Fondo animado con gradientes

## 🚀 Cómo Ver el Video

### Opción 1: Vista Previa Interactiva (RECOMENDADO)

El servidor ya está corriendo! Abre tu navegador en:

👉 **http://localhost:3000**

Aquí podrás:
- ✨ Ver el video en tiempo real mientras se renderiza
- ⏯️ Pausar y reproducir
- 🎬 Navegar por el timeline
- 🎨 Editar parámetros en vivo
- 📱 Ver en formato vertical (1080x1920)

### Opción 2: Renderizar Video Final

Para generar el archivo MP4 final:

```bash
npm run remotion:render
```

Esto creará el archivo en: `out/video.mp4`

## 📐 Especificaciones Técnicas

- **Formato**: MP4 (H264)
- **Resolución**: 1080x1920 (Vertical)
- **FPS**: 30
- **Duración**: 15 segundos (450 frames)
- **Optimizado para**: Instagram Reels, TikTok, YouTube Shorts, Stories

## 🎨 Características del Video

✅ **Animaciones Profesionales**
- Transiciones suaves con interpolación
- Efectos de escala, rotación y opacidad
- Timing perfecto sincronizado a 30fps

✅ **Diseño Moderno**
- Gradientes vibrantes (morados, azules, rosas)
- Sombras y efectos de profundidad
- Tipografía clara y legible

✅ **Muestra TODO el Juego**
- Configuración de jugadores
- Revelación de roles
- Fase de debate
- Eliminación de jugadores
- Características principales

✅ **Optimizado para Redes Sociales**
- Formato vertical 9:16
- Duración perfecta de 15 segundos
- Call-to-action claro
- Engancha desde el primer segundo

## 📁 Archivos Creados

```
remotion/
├── Root.tsx                    # Configuración de Remotion
├── README.md                   # Documentación detallada
├── compositions/
│   └── ImpostorPromo.tsx      # Composición principal
└── scenes/
    ├── IntroScene.tsx         # Escena 1: Intro
    ├── SetupScene.tsx         # Escena 2: Setup
    ├── RoleRevealScene.tsx    # Escena 3: Roles
    ├── GameplayScene.tsx      # Escena 4: Gameplay
    └── OutroScene.tsx         # Escena 5: Outro
```

## 🎯 Personalización Fácil

Puedes modificar fácilmente:

1. **Nombres de jugadores**: Edita `SetupScene.tsx` y cambia los nombres
2. **Palabras del juego**: Edita `RoleRevealScene.tsx`
3. **Colores**: Cambia los gradientes en cualquier escena
4. **Duración**: Ajusta `durationInFrames` en `ImpostorPromo.tsx`
5. **Texto del CTA**: Edita `OutroScene.tsx`

## 📱 Uso en Redes Sociales

Este video está **perfectamente optimizado** para:
- 📸 Instagram Stories
- 🎬 Instagram Reels
- 🎵 TikTok
- ▶️ YouTube Shorts
- 📘 Facebook Stories

## 🎬 Comandos Útiles

```bash
# Ver preview en navegador (YA CORRIENDO)
npm run remotion:preview

# Renderizar video final
npm run remotion:render

# Detener el servidor (si es necesario)
Ctrl + C
```

## ✨ Resultado Final

Un video profesional y atractivo que:
- ✅ Muestra claramente cómo funciona tu juego
- ✅ Tiene un diseño moderno y llamativo
- ✅ Engancha desde el primer segundo
- ✅ Termina con un CTA claro
- ✅ Es perfecto para compartir en redes sociales

---

💡 **Tip**: Abre http://localhost:3000 ahora mismo para ver tu video en acción!
