import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const IntroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del título
  const titleScale = interpolate(frame, [0, 20], [0.5, 1], {
    extrapolateRight: 'clamp',
  });

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleRotate = interpolate(frame, [0, 20], [-10, 0], {
    extrapolateRight: 'clamp',
  });

  // Animación del subtítulo
  const subtitleY = interpolate(frame, [15, 35], [50, 0], {
    extrapolateRight: 'clamp',
  });

  const subtitleOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Fondo animado con círculos */}
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at ${interpolate(frame, [0, 90], [20, 80])}% ${interpolate(frame, [0, 90], [30, 70])}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          transform: `rotate(${frame * 2}deg)`,
        }}
      />

      {/* Título */}
      <div
        style={{
          transform: `scale(${titleScale}) rotate(${titleRotate}deg)`,
          opacity: titleOpacity,
          textAlign: 'center',
          marginBottom: 30,
        }}
      >
        <h1
          style={{
            fontSize: 120,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            textShadow: '0 10px 30px rgba(0,0,0,0.5)',
            letterSpacing: '-2px',
          }}
        >
          EL IMPOSTOR
        </h1>
      </div>

      {/* Subtítulo */}
      <div
        style={{
          transform: `translateY(${subtitleY}px)`,
          opacity: subtitleOpacity,
        }}
      >
        <p
          style={{
            fontSize: 42,
            color: 'rgba(255,255,255,0.9)',
            margin: 0,
            fontWeight: 500,
            textShadow: '0 5px 15px rgba(0,0,0,0.3)',
          }}
        >
          ¿Puedes encontrar al impostor?
        </p>
      </div>
    </AbsoluteFill>
  );
};
