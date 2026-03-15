import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BinoxxoLogic } from './game.logic';
import { BinoxxoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BinoxxoPlugin: GamePlugin = {
  config,
  logic: BinoxxoLogic,
  component: BinoxxoGame,
};

// Auto-register
GameRegistry.register(BinoxxoPlugin);

export default BinoxxoPlugin;
