import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShadowMatchLogic } from './game.logic';
import { ShadowMatchGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShadowMatchPlugin: GamePlugin = {
  config,
  logic: ShadowMatchLogic,
  component: ShadowMatchGame,
};

// Auto-register
GameRegistry.register(ShadowMatchPlugin);

export default ShadowMatchPlugin;
