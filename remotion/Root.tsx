import { Composition, registerRoot } from 'remotion';
import { ImpostorPromo } from './compositions/ImpostorPromo';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="ImpostorPromo"
        component={ImpostorPromo}
        durationInFrames={450} // 15 segundos a 30fps
        fps={30}
        width={1080}
        height={1920} // Formato vertical para redes sociales
        defaultProps={{
          title: 'El Impostor',
          subtitle: '¿Puedes encontrar al impostor?',
        }}
      />
    </>
  );
};

registerRoot(RemotionRoot);
