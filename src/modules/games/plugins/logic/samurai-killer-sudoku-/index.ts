import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SamuraiKillerSudokuLogic } from './game.logic';
import { SamuraiKillerSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SamuraiKillerSudokuPlugin: GamePlugin = {
  config,
  logic: SamuraiKillerSudokuLogic,
  component: SamuraiKillerSudokuGame,
};

// Auto-register
GameRegistry.register(SamuraiKillerSudokuPlugin);

export default SamuraiKillerSudokuPlugin;
