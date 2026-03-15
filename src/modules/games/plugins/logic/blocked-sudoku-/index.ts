import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BlockedSudokuLogic } from './game.logic';
import { BlockedSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BlockedSudokuPlugin: GamePlugin = {
  config,
  logic: BlockedSudokuLogic,
  component: BlockedSudokuGame,
};

// Auto-register
GameRegistry.register(BlockedSudokuPlugin);

export default BlockedSudokuPlugin;
