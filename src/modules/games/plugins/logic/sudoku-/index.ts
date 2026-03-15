import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SudokuLogic } from './game.logic';
import { SudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SudokuPlugin: GamePlugin = {
  config,
  logic: SudokuLogic,
  component: SudokuGame,
};

// Auto-register
GameRegistry.register(SudokuPlugin);

export default SudokuPlugin;
