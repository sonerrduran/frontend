import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DotSudokuLogic } from './game.logic';
import { DotSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DotSudokuPlugin: GamePlugin = {
  config,
  logic: DotSudokuLogic,
  component: DotSudokuGame,
};

// Auto-register
GameRegistry.register(DotSudokuPlugin);

export default DotSudokuPlugin;
