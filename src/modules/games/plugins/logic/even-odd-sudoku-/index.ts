import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { EvenOddSudokuLogic } from './game.logic';
import { EvenOddSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const EvenOddSudokuPlugin: GamePlugin = {
  config,
  logic: EvenOddSudokuLogic,
  component: EvenOddSudokuGame,
};

// Auto-register
GameRegistry.register(EvenOddSudokuPlugin);

export default EvenOddSudokuPlugin;
