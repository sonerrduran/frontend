import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GoLogic } from './game.logic';
import { GoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GoPlugin: GamePlugin = {
  config,
  logic: GoLogic,
  component: GoGame,
};

// Auto-register
GameRegistry.register(GoPlugin);

export default GoPlugin;
