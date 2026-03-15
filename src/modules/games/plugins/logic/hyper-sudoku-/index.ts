import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HyperSudokuLogic } from './game.logic';
import { HyperSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HyperSudokuPlugin: GamePlugin = {
  config,
  logic: HyperSudokuLogic,
  component: HyperSudokuGame,
};

// Auto-register
GameRegistry.register(HyperSudokuPlugin);

export default HyperSudokuPlugin;
