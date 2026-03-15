import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ConsecutiveSudokuLogic } from './game.logic';
import { ConsecutiveSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ConsecutiveSudokuPlugin: GamePlugin = {
  config,
  logic: ConsecutiveSudokuLogic,
  component: ConsecutiveSudokuGame,
};

// Auto-register
GameRegistry.register(ConsecutiveSudokuPlugin);

export default ConsecutiveSudokuPlugin;
