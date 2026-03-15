import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SpiralGalaxiesLogic } from './game.logic';
import { SpiralGalaxiesGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SpiralGalaxiesPlugin: GamePlugin = {
  config,
  logic: SpiralGalaxiesLogic,
  component: SpiralGalaxiesGame,
};

// Auto-register
GameRegistry.register(SpiralGalaxiesPlugin);

export default SpiralGalaxiesPlugin;
