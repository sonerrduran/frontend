import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { IrregularSudokuLogic } from './game.logic';
import { IrregularSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const IrregularSudokuPlugin: GamePlugin = {
  config,
  logic: IrregularSudokuLogic,
  component: IrregularSudokuGame,
};

// Auto-register
GameRegistry.register(IrregularSudokuPlugin);

export default IrregularSudokuPlugin;
