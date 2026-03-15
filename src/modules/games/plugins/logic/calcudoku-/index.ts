import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CalcudokuLogic } from './game.logic';
import { CalcudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CalcudokuPlugin: GamePlugin = {
  config,
  logic: CalcudokuLogic,
  component: CalcudokuGame,
};

// Auto-register
GameRegistry.register(CalcudokuPlugin);

export default CalcudokuPlugin;
