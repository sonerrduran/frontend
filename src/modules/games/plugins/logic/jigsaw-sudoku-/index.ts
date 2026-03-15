import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { JigsawSudokuLogic } from './game.logic';
import { JigsawSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const JigsawSudokuPlugin: GamePlugin = {
  config,
  logic: JigsawSudokuLogic,
  component: JigsawSudokuGame,
};

// Auto-register
GameRegistry.register(JigsawSudokuPlugin);

export default JigsawSudokuPlugin;
