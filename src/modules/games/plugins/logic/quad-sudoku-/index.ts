import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { QuadSudokuLogic } from './game.logic';
import { QuadSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const QuadSudokuPlugin: GamePlugin = {
  config,
  logic: QuadSudokuLogic,
  component: QuadSudokuGame,
};

// Auto-register
GameRegistry.register(QuadSudokuPlugin);

export default QuadSudokuPlugin;
