import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KillerSudokuLogic } from './game.logic';
import { KillerSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KillerSudokuPlugin: GamePlugin = {
  config,
  logic: KillerSudokuLogic,
  component: KillerSudokuGame,
};

// Auto-register
GameRegistry.register(KillerSudokuPlugin);

export default KillerSudokuPlugin;
