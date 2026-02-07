import { AbsoluteFill, Series } from 'remotion';
import { IntroScene } from '../scenes/IntroScene';
import { SetupScene } from '../scenes/SetupScene';
import { RoleRevealScene } from '../scenes/RoleRevealScene';
import { GameplayScene } from '../scenes/GameplayScene';
import { OutroScene } from '../scenes/OutroScene';

export interface ImpostorPromoProps {
  title: string;
  subtitle: string;
}

export const ImpostorPromo: React.FC<ImpostorPromoProps> = ({ title, subtitle }) => {
  return (
    <AbsoluteFill>
      <Series>
        {/* Intro - 3 segundos */}
        <Series.Sequence durationInFrames={90}>
          <IntroScene />
        </Series.Sequence>

        {/* Setup Screen - 2.5 segundos */}
        <Series.Sequence durationInFrames={75}>
          <SetupScene />
        </Series.Sequence>

        {/* Role Reveal - 2.5 segundos */}
        <Series.Sequence durationInFrames={75}>
          <RoleRevealScene />
        </Series.Sequence>

        {/* Gameplay - 4 segundos */}
        <Series.Sequence durationInFrames={120}>
          <GameplayScene />
        </Series.Sequence>

        {/* Outro - 3 segundos */}
        <Series.Sequence durationInFrames={90}>
          <OutroScene />
        </Series.Sequence>
      </Series>
    </AbsoluteFill>
  );
};
