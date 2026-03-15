import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SantoriniLogic } from './game.logic';
import { SantoriniGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SantoriniPlugin: GamePlugin = {
  config,
  logic: SantoriniLogic,
  component: SantoriniGame,
};

// Auto-register
GameRegistry.register(SantoriniPlugin);

export default SantoriniPlugin;
