import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const SetupScene = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animación de entrada
  const titleY = interpolate(frame, [0, 20], [-100, 0], {
    extrapolateRight: 'clamp',
  });

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  // Animación de los jugadores
  const player1Opacity = interpolate(frame, [10, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player2Opacity = interpolate(frame, [15, 25], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player3Opacity = interpolate(frame, [20, 30], [0, 1], {
    extrapolateRight: 'clamp',
  });
  const player4Opacity = interpolate(frame, [25, 35], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const players = [
    { name: 'Ana', opacity: player1Opacity, delay: 10 },
    { name: 'Carlos', opacity: player2Opacity, delay: 15 },
    { name: 'María', opacity: player3Opacity, delay: 20 },
    { name: 'Pedro', opacity: player4Opacity, delay: 25 },
  ];

  // Animación del contador de impostores
  const impostorCountOpacity = interpolate(frame, [35, 45], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const impostorCountScale = interpolate(frame, [35, 50], [0.8, 1], {
    extrapolateRight: 'clamp',
  });

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
          transform: `translateY(${titleY}px)`,
          opacity: titleOpacity,
          marginBottom: 60,
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
          Configurar Partida
        </h2>
      </div>

      {/* Lista de jugadores */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 25,
          marginTop: 80,
        }}
      >
        {players.map((player, index) => (
          <div
            key={player.name}
            style={{
              opacity: player.opacity,
              transform: `scale(${interpolate(frame, [player.delay, player.delay + 10], [0.9, 1], { extrapolateRight: 'clamp' })})`,
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(255,255,255,0.1)',
              padding: '30px 40px',
              borderRadius: 20,
              border: '2px solid rgba(255,255,255,0.2)',
            }}
          >
            <div
              style={{
                width: 70,
                height: 70,
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${['#667eea', '#f093fb', '#4facfe', '#43e97b'][index]} 0%, ${['#764ba2', '#f5576c', '#00f2fe', '#38f9d7'][index]} 100%)`,
                marginRight: 30,
              }}
            />
            <span
              style={{
                fontSize: 50,
                color: 'white',
                fontWeight: 600,
              }}
            >
              {player.name}
            </span>
          </div>
        ))}
      </div>

      {/* Contador de impostores */}
      <div
        style={{
          position: 'absolute',
          bottom: 120,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          opacity: impostorCountOpacity,
          transform: `scale(${impostorCountScale})`,
        }}
      >
        <div
          style={{
            background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            padding: '30px 60px',
            borderRadius: 25,
            border: '3px solid rgba(255,255,255,0.3)',
          }}
        >
          <span
            style={{
              fontSize: 60,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            1 Impostor
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
