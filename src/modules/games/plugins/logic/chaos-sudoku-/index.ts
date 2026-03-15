import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ChaosSudokuLogic } from './game.logic';
import { ChaosSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ChaosSudokuPlugin: GamePlugin = {
  config,
  logic: ChaosSudokuLogic,
  component: ChaosSudokuGame,
};

// Auto-register
GameRegistry.register(ChaosSudokuPlugin);

export default ChaosSudokuPlugin;
