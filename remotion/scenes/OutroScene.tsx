import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const OutroScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del logo/título
  const logoScale = interpolate(frame, [0, 20], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

  const logoOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación de las características
  const feature1Opacity = interpolate(frame, [20, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const feature2Opacity = interpolate(frame, [25, 35], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const feature3Opacity = interpolate(frame, [30, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // CTA (Call to Action)
  const ctaScale = interpolate(frame, [45, 60], [0.9, 1], {
    extrapolateRight: 'clamp',
  });

  const ctaOpacity = interpolate(frame, [45, 55], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Pulso del botón
  const ctaPulse = interpolate(
    frame % 30,
    [0, 15, 30],
    [1, 1.05, 1],
    { extrapolateRight: 'clamp' }
  );

  const features = [
    { icon: '👥', text: 'Juega con amigos', opacity: feature1Opacity },
    { icon: '🎭', text: 'Descubre al impostor', opacity: feature2Opacity },
    { icon: '🎯', text: 'Múltiples categorías', opacity: feature3Opacity },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Fondo animado */}
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          background: `radial-gradient(circle at ${interpolate(frame, [0, 90], [30, 70])}% ${interpolate(frame, [0, 90], [40, 60])}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          transform: `rotate(${frame}deg)`,
        }}
      />

      {/* Logo/Título */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          opacity: logoOpacity,
          textAlign: 'center',
          marginBottom: 80,
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

      {/* Características */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 30,
          marginBottom: 80,
        }}
      >
        {features.map((feature) => (
          <div
            key={feature.text}
            style={{
              opacity: feature.opacity,
              display: 'flex',
              alignItems: 'center',
              gap: 25,
              background: 'rgba(255,255,255,0.2)',
              padding: '25px 40px',
              borderRadius: 20,
              backdropFilter: 'blur(10px)',
            }}
          >
            <span style={{ fontSize: 50 }}>{feature.icon}</span>
            <span
              style={{
                fontSize: 45,
                color: 'white',
                fontWeight: 600,
              }}
            >
              {feature.text}
            </span>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div
        style={{
          transform: `scale(${ctaScale * ctaPulse})`,
          opacity: ctaOpacity,
          textAlign: 'center',
        }}
      >
        <div
          style={{
            background: 'white',
            color: '#667eea',
            padding: '35px 80px',
            borderRadius: 25,
            fontSize: 55,
            fontWeight: 'bold',
            boxShadow: '0 15px 40px rgba(0,0,0,0.3)',
          }}
        >
          ¡Juega Ahora!
        </div>
      </div>
    </AbsoluteFill>
  );
};
