import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ColorSudokuLogic } from './game.logic';
import { ColorSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ColorSudokuPlugin: GamePlugin = {
  config,
  logic: ColorSudokuLogic,
  component: ColorSudokuGame,
};

// Auto-register
GameRegistry.register(ColorSudokuPlugin);

export default ColorSudokuPlugin;
