import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DominoSudokuLogic } from './game.logic';
import { DominoSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DominoSudokuPlugin: GamePlugin = {
  config,
  logic: DominoSudokuLogic,
  component: DominoSudokuGame,
};

// Auto-register
GameRegistry.register(DominoSudokuPlugin);

export default DominoSudokuPlugin;
