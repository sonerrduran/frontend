import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CheckersLogic } from './game.logic';
import { CheckersGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CheckersPlugin: GamePlugin = {
  config,
  logic: CheckersLogic,
  component: CheckersGame,
};

// Auto-register
GameRegistry.register(CheckersPlugin);

export default CheckersPlugin;
