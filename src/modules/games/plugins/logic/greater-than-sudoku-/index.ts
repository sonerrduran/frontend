import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GreaterThanSudokuLogic } from './game.logic';
import { GreaterThanSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GreaterThanSudokuPlugin: GamePlugin = {
  config,
  logic: GreaterThanSudokuLogic,
  component: GreaterThanSudokuGame,
};

// Auto-register
GameRegistry.register(GreaterThanSudokuPlugin);

export default GreaterThanSudokuPlugin;
