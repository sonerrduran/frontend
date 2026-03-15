import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NonConsecutiveSudokuLogic } from './game.logic';
import { NonConsecutiveSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NonConsecutiveSudokuPlugin: GamePlugin = {
  config,
  logic: NonConsecutiveSudokuLogic,
  component: NonConsecutiveSudokuGame,
};

// Auto-register
GameRegistry.register(NonConsecutiveSudokuPlugin);

export default NonConsecutiveSudokuPlugin;
