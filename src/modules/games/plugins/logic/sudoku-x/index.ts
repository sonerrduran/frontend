import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SudokuXLogic } from './game.logic';
import { SudokuXGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SudokuXPlugin: GamePlugin = {
  config,
  logic: SudokuXLogic,
  component: SudokuXGame,
};

// Auto-register
GameRegistry.register(SudokuXPlugin);

export default SudokuXPlugin;
