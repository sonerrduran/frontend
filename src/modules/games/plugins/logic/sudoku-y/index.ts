import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SudokuYLogic } from './game.logic';
import { SudokuYGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SudokuYPlugin: GamePlugin = {
  config,
  logic: SudokuYLogic,
  component: SudokuYGame,
};

// Auto-register
GameRegistry.register(SudokuYPlugin);

export default SudokuYPlugin;
