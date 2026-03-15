import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DiagonalSudokuLogic } from './game.logic';
import { DiagonalSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DiagonalSudokuPlugin: GamePlugin = {
  config,
  logic: DiagonalSudokuLogic,
  component: DiagonalSudokuGame,
};

// Auto-register
GameRegistry.register(DiagonalSudokuPlugin);

export default DiagonalSudokuPlugin;
