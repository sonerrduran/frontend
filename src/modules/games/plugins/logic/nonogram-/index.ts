import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NonogramLogic } from './game.logic';
import { NonogramGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NonogramPlugin: GamePlugin = {
  config,
  logic: NonogramLogic,
  component: NonogramGame,
};

// Auto-register
GameRegistry.register(NonogramPlugin);

export default NonogramPlugin;
