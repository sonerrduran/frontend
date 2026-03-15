import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GreaterThanKillerSudokuLogic } from './game.logic';
import { GreaterThanKillerSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GreaterThanKillerSudokuPlugin: GamePlugin = {
  config,
  logic: GreaterThanKillerSudokuLogic,
  component: GreaterThanKillerSudokuGame,
};

// Auto-register
GameRegistry.register(GreaterThanKillerSudokuPlugin);

export default GreaterThanKillerSudokuPlugin;
