import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NurikabeLogic } from './game.logic';
import { NurikabeGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NurikabePlugin: GamePlugin = {
  config,
  logic: NurikabeLogic,
  component: NurikabeGame,
};

// Auto-register
GameRegistry.register(NurikabePlugin);

export default NurikabePlugin;
