import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SamuraiSudokuLogic } from './game.logic';
import { SamuraiSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SamuraiSudokuPlugin: GamePlugin = {
  config,
  logic: SamuraiSudokuLogic,
  component: SamuraiSudokuGame,
};

// Auto-register
GameRegistry.register(SamuraiSudokuPlugin);

export default SamuraiSudokuPlugin;
