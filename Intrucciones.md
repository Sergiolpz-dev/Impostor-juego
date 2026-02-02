# El Impostor

Juego multijugador estilo Mafia/Werewolf para un único dispositivo que se pasa entre jugadores. Sin conexión, sin servidor, solo diversión local.

## 🎮 Descripción del Proyecto

Single Page Application (SPA) desarrollada en React donde los jugadores se turnan para ver su rol de forma privada, debaten quién es el impostor, y votan para eliminarlo. El dispositivo se pasa de mano en mano, garantizando que cada jugador vea su información de forma secreta.

### Características principales:

- ✅ Modo local pass & play (un solo dispositivo)
- ✅ Setup flexible (número de jugadores e impostores)
- ✅ Revelación privada de roles con "mantener pulsado"
- ✅ Sistema de votación y eliminación
- ✅ Detección automática de victoria
- ✅ Sin necesidad de backend ni conexión

## 🛠️ Stack Técnico

- **Vite** - Build tool y dev server
- **React** - UI library + ts
- **Tailwind CSS** - Estilos utility-first
- **shadcn/ui** (opcional) - Componentes UI si son necesarios

## 🎯 Flujo del Juego

1. **Setup**: Introducir nombres de jugadores y número de impostores, si hay pista para el impostor o no
2. **Reparto Privado**: Cada jugador ve su rol manteniendo pulsado en su nombre
3. **Partida**: Pantalla con lista de jugadores vivos (debate presencial)
4. **Votación**: Click en un jugador para eliminarlo y revelar su identidad
5. **Fin de Partida**: Detección automática de victoria (civiles o impostores)

## 🧩 Mecánica de Roles

- **Civiles**: Reciben una palabra común (ej: "León")
- **Impostores**: Reciben una pista si es ha elgido esta opción (ej: "Animal salvaje")

Los jugadores deben hablar sobre "su palabra" sin decirla directamente. El impostor debe deducir qué palabra tienen los demás e intentar pasar desapercibido.

## 📝 Notas para Desarrollo

- El estado se resetea al refrescar (comportamiento esperado)
- No hay validaciones complejas: confiamos en que los jugadores juegan limpio
- La lógica de "mantener pulsado" puede implementarse con `onTouchStart/onTouchEnd` o `onMouseDown/onMouseUp`
- Se pueden añadir animaciones CSS para mejorar la experiencia de usuario
- Se usara prinicipalmente en movil, pero debe ser funcional en escritorio
- Considerar accesibilidad y usabilidad en pantallas táctiles
