import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TicTacToeLogic } from './game.logic';
import { TicTacToeGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TicTacToePlugin: GamePlugin = {
  config,
  logic: TicTacToeLogic,
  component: TicTacToeGame,
};

// Auto-register
GameRegistry.register(TicTacToePlugin);

export default TicTacToePlugin;
