import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KropkiSudokuLogic } from './game.logic';
import { KropkiSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KropkiSudokuPlugin: GamePlugin = {
  config,
  logic: KropkiSudokuLogic,
  component: KropkiSudokuGame,
};

// Auto-register
GameRegistry.register(KropkiSudokuPlugin);

export default KropkiSudokuPlugin;
