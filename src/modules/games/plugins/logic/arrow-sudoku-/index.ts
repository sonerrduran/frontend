import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ArrowSudokuLogic } from './game.logic';
import { ArrowSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ArrowSudokuPlugin: GamePlugin = {
  config,
  logic: ArrowSudokuLogic,
  component: ArrowSudokuGame,
};

// Auto-register
GameRegistry.register(ArrowSudokuPlugin);

export default ArrowSudokuPlugin;
