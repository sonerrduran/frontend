import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TripleSudokuLogic } from './game.logic';
import { TripleSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TripleSudokuPlugin: GamePlugin = {
  config,
  logic: TripleSudokuLogic,
  component: TripleSudokuGame,
};

// Auto-register
GameRegistry.register(TripleSudokuPlugin);

export default TripleSudokuPlugin;
