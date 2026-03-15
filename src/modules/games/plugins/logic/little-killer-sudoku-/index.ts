import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LittleKillerSudokuLogic } from './game.logic';
import { LittleKillerSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LittleKillerSudokuPlugin: GamePlugin = {
  config,
  logic: LittleKillerSudokuLogic,
  component: LittleKillerSudokuGame,
};

// Auto-register
GameRegistry.register(LittleKillerSudokuPlugin);

export default LittleKillerSudokuPlugin;
