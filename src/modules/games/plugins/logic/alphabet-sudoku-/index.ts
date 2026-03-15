import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AlphabetSudokuLogic } from './game.logic';
import { AlphabetSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AlphabetSudokuPlugin: GamePlugin = {
  config,
  logic: AlphabetSudokuLogic,
  component: AlphabetSudokuGame,
};

// Auto-register
GameRegistry.register(AlphabetSudokuPlugin);

export default AlphabetSudokuPlugin;
