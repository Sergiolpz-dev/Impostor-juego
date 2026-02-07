# 🎬 Video Promocional - El Impostor

Este directorio contiene el video promocional de la app "El Impostor" creado con Remotion.

## 🎥 Contenido del Video (15 segundos)

1. **Intro** (3s) - Logo animado y título principal
2. **Setup** (2.5s) - Configuración de jugadores e impostores
3. **Revelación de Roles** (2.5s) - Muestra cómo un jugador ve su rol
4. **Gameplay** (4s) - Fase de debate y eliminación de jugadores
5. **Outro** (3s) - Call to action con características destacadas

## 🚀 Comandos

### Ver el video en modo desarrollo (recomendado)
```bash
npm run remotion:preview
```
Esto abrirá una interfaz visual donde podrás:
- Ver el video en tiempo real
- Editar parámetros
- Navegar por el timeline
- Ver cada escena individualmente

### Renderizar el video final
```bash
npm run remotion:render
```
Esto generará el video final en `out/video.mp4` (1080x1920, vertical para redes sociales)

## 📁 Estructura

```
remotion/
├── Root.tsx              # Configuración principal de composiciones
├── compositions/
│   └── ImpostorPromo.tsx # Composición principal que une todas las escenas
└── scenes/
    ├── IntroScene.tsx        # Escena 1: Introducción
    ├── SetupScene.tsx        # Escena 2: Configuración
    ├── RoleRevealScene.tsx   # Escena 3: Revelación de roles
    ├── GameplayScene.tsx     # Escena 4: Gameplay
    └── OutroScene.tsx        # Escena 5: Outro y CTA
```

## 🎨 Personalización

Puedes personalizar el video editando:

- **Colores**: Cambia los gradientes en cada escena
- **Texto**: Modifica nombres de jugadores, palabras, etc.
- **Duración**: Ajusta `durationInFrames` en cada `Series.Sequence`
- **Animaciones**: Modifica las funciones `interpolate()` para cambiar el timing

## 🎯 Formato

- **Resolución**: 1080x1920 (vertical)
- **FPS**: 30
- **Duración**: 450 frames (15 segundos)
- **Codec**: H264
- **Formato**: MP4

## ✨ Características del Video

- ✅ Animaciones fluidas y profesionales
- ✅ Transiciones suaves entre escenas
- ✅ Gradientes modernos y colores vibrantes
- ✅ Formato vertical optimizado para Instagram/TikTok/Stories
- ✅ Muestra todas las fases del juego
- ✅ Call to action al final

## 📱 Uso en Redes Sociales

Este video está optimizado para:
- Instagram Stories
- Instagram Reels
- TikTok
- YouTube Shorts
- Facebook Stories

## 🔧 Requisitos

- Node.js >= 18
- FFmpeg (instalado automáticamente por Remotion)
