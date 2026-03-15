import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SuguruLogic } from './game.logic';
import { SuguruGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SuguruPlugin: GamePlugin = {
  config,
  logic: SuguruLogic,
  component: SuguruGame,
};

// Auto-register
GameRegistry.register(SuguruPlugin);

export default SuguruPlugin;
