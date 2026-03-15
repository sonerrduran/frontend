import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HexSudokuLogic } from './game.logic';
import { HexSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HexSudokuPlugin: GamePlugin = {
  config,
  logic: HexSudokuLogic,
  component: HexSudokuGame,
};

// Auto-register
GameRegistry.register(HexSudokuPlugin);

export default HexSudokuPlugin;
