import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SandwichSudokuLogic } from './game.logic';
import { SandwichSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SandwichSudokuPlugin: GamePlugin = {
  config,
  logic: SandwichSudokuLogic,
  component: SandwichSudokuGame,
};

// Auto-register
GameRegistry.register(SandwichSudokuPlugin);

export default SandwichSudokuPlugin;
