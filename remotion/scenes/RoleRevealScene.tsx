import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const RoleRevealScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del círculo
  const circleScale = interpolate(frame, [0, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const circleRotate = interpolate(frame, [0, 60], [0, 360]);

  // Revelar rol
  const revealOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const revealScale = interpolate(frame, [30, 50], [0.5, 1], {
    extrapolateRight: 'clamp',
  });

  // Mostrar palabra o pista
  const wordOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const wordY = interpolate(frame, [50, 65], [30, 0], {
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
      }}
    >
      {/* Nombre del jugador */}
      <div
        style={{
          position: 'absolute',
          top: 100,
          left: 0,
          right: 0,
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
          }}
        >
          Ana
        </h2>
        <p
          style={{
            fontSize: 35,
            color: 'rgba(255,255,255,0.6)',
            margin: '15px 0 0 0',
          }}
        >
          Jugador 1 de 4
        </p>
      </div>

      {/* Círculo de revelación */}
      <div
        style={{
          position: 'relative',
          width: 450,
          height: 450,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          border: '8px solid rgba(255,255,255,0.3)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transform: `scale(${circleScale}) rotate(${circleRotate}deg)`,
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
      >
        {/* Contenido del rol */}
        <div
          style={{
            transform: `scale(${revealScale}) rotate(-${circleRotate}deg)`,
            opacity: revealOpacity,
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 70,
              fontWeight: 'bold',
              color: '#4facfe',
              margin: 0,
            }}
          >
            Eres CIVIL
          </p>
          <div
            style={{
              marginTop: 30,
              opacity: wordOpacity,
              transform: `translateY(${wordY}px)`,
            }}
          >
            <p
              style={{
                fontSize: 30,
                color: 'rgba(255,255,255,0.7)',
                margin: 0,
              }}
            >
              Tu palabra es:
            </p>
            <p
              style={{
                fontSize: 60,
                color: 'white',
                fontWeight: 'bold',
                margin: '10px 0 0 0',
              }}
            >
              León
            </p>
          </div>
        </div>
      </div>

      {/* Instrucción */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 60,
          right: 60,
          textAlign: 'center',
          opacity: interpolate(frame, [0, 20], [0, 1], { extrapolateRight: 'clamp' }),
        }}
      >
        <p
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}
        >
          Mantén pulsado para ver tu rol
        </p>
      </div>
    </AbsoluteFill>
  );
};
