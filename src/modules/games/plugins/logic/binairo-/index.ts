import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BinairoLogic } from './game.logic';
import { BinairoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BinairoPlugin: GamePlugin = {
  config,
  logic: BinairoLogic,
  component: BinairoGame,
};

// Auto-register
GameRegistry.register(BinairoPlugin);

export default BinairoPlugin;
