import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SosLogic } from './game.logic';
import { SosGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SosPlugin: GamePlugin = {
  config,
  logic: SosLogic,
  component: SosGame,
};

// Auto-register
GameRegistry.register(SosPlugin);

export default SosPlugin;
