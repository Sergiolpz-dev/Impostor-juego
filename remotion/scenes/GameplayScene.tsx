import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const GameplayScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación del título
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación de los jugadores vivos
  const player1Opacity = interpolate(frame, [15, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player2Opacity = interpolate(frame, [20, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player3Opacity = interpolate(frame, [25, 35], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player4Opacity = interpolate(frame, [30, 40], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación de eliminación (jugador seleccionado)
  const eliminateScale = interpolate(frame, [50, 60], [1, 1.1], {
    extrapolateRight: 'clamp',
  });

  const eliminateOpacity = interpolate(frame, [60, 70], [1, 0.5], {
    extrapolateRight: 'clamp',
  });

  // Revelación del rol
  const revealOpacity = interpolate(frame, [70, 80], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const players = [
    { name: 'Ana', alive: true, opacity: player1Opacity },
    { name: 'Carlos', alive: true, opacity: player2Opacity },
    { name: 'María', alive: true, opacity: player3Opacity },
    { name: 'Pedro', alive: true, opacity: player4Opacity },
  ];

  return (
    <AbsoluteFill
      style={{
        background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)',
        padding: 60,
      }}
    >
      {/* Título */}
      <div
        style={{
          opacity: titleOpacity,
          marginBottom: 40,
        }}
      >
        <h2
          style={{
            fontSize: 70,
            fontWeight: 'bold',
            color: 'white',
            margin: 0,
            textAlign: 'center',
          }}
        >
          Debate
        </h2>
        <p
          style={{
            fontSize: 35,
            color: 'rgba(255,255,255,0.6)',
            margin: '15px 0 0 0',
            textAlign: 'center',
          }}
        >
          Encuentra al impostor
        </p>
      </div>

      {/* Sección de jugadores vivos */}
      <div style={{ marginTop: 80 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 15,
            marginBottom: 30,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: '#10b981',
            }}
          />
          <span
            style={{
              fontSize: 40,
              color: 'white',
              fontWeight: 600,
            }}
          >
            Vivos (4)
          </span>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 25,
          }}
        >
          {players.map((player, index) => (
            <div
              key={player.name}
              style={{
                opacity: frame < 50 ? player.opacity : (index === 2 ? eliminateOpacity : player.opacity),
                transform: index === 2 ? `scale(${eliminateScale})` : 'scale(1)',
                background: 'rgba(255,255,255,0.1)',
                padding: '40px 50px',
                borderRadius: 20,
                border: index === 2 && frame >= 50 ? '3px solid #ef4444' : '2px solid rgba(255,255,255,0.2)',
              }}
            >
              <span
                style={{
                  fontSize: 45,
                  color: 'white',
                  fontWeight: 600,
                }}
              >
                {player.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Estadísticas */}
      <div
        style={{
          position: 'absolute',
          bottom: 200,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          gap: 80,
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: 70,
              color: '#60a5fa',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            3
          </p>
          <p
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.5)',
              margin: '10px 0 0 0',
            }}
          >
            Civiles vivos
          </p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: 70,
              color: '#f87171',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            1
          </p>
          <p
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.5)',
              margin: '10px 0 0 0',
            }}
          >
            Impostores vivos
          </p>
        </div>
      </div>

      {/* Revelación del impostor */}
      {frame >= 70 && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            opacity: revealOpacity,
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
              padding: '60px 80px',
              borderRadius: 30,
              border: '4px solid rgba(255,255,255,0.3)',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                fontSize: 80,
                color: 'white',
                fontWeight: 'bold',
                margin: 0,
              }}
            >
              María
            </h3>
            <p
              style={{
                fontSize: 65,
                color: '#fca5a5',
                fontWeight: 'bold',
                margin: '20px 0 0 0',
              }}
            >
              Era IMPOSTOR
            </p>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
