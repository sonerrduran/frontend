import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MiniSudokuLogic } from './game.logic';
import { MiniSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MiniSudokuPlugin: GamePlugin = {
  config,
  logic: MiniSudokuLogic,
  component: MiniSudokuGame,
};

// Auto-register
GameRegistry.register(MiniSudokuPlugin);

export default MiniSudokuPlugin;
