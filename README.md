# El Impostor

Juego de deducción social para grupos, inspirado en juegos como Mafia y Among Us. Diseñado para jugar de forma local pasando el dispositivo entre jugadores (pass & play).

## El Juego

### Objetivo

Descubre quién es el impostor entre tus amigos. Los civiles conocen una palabra secreta mientras que los impostores deben fingir que también la conocen.

### Cómo jugar

1. **Configuración**: Añade los nombres de los jugadores (mínimo 3) y configura el número de impostores.

2. **Revelación de roles**: Cada jugador pasa el dispositivo en privado para ver su rol:
   - **Civiles**: Ven la palabra secreta
   - **Impostores**: No conocen la palabra (opcionalmente reciben una pista)

3. **Discusión**: Los jugadores discuten dando pistas sobre la palabra sin revelarla directamente. Los impostores deben disimular e intentar adivinar la palabra.

4. **Votación**: El grupo vota para eliminar a quien sospechen que es impostor.

5. **Victoria**:
   - **Civiles ganan**: Si eliminan a todos los impostores
   - **Impostores ganan**: Si igualan o superan en número a los civiles

### Categorías de palabras

El juego incluye más de 130 palabras organizadas en categorías:

- Animales
- Comida
- Lugares
- Objetos
- Profesiones
- Deportes
- Películas/Series
- Países
- Conceptos
- Naturaleza
- Fantasía

## Tecnologías

| Tecnología                                    | Versión | Descripción                           |
| --------------------------------------------- | ------- | ------------------------------------- |
| [React](https://react.dev/)                   | 19      | Biblioteca para interfaces de usuario |
| [TypeScript](https://www.typescriptlang.org/) | 5.9     | Superset tipado de JavaScript         |
| [Vite](https://vite.dev/)                     | 7       | Build tool ultrarrápido               |
| [Tailwind CSS](https://tailwindcss.com/)      | 4       | Framework CSS utility-first           |

### PWA (Progressive Web App)

La aplicación está configurada como PWA, lo que permite:

- Instalarla en dispositivos móviles y escritorio
- Funcionar offline después de la primera carga
- Experiencia nativa sin necesidad de app stores
- Actualizaciones automáticas

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/impostor.git
cd impostor

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## Scripts disponibles

| Script            | Descripción                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo    |
| `npm run build`   | Compila para producción             |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint`    | Ejecuta ESLint                      |

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el juego, corregir errores o añadir nuevas características, por favor abre un pull request o un issue en el repositorio.
