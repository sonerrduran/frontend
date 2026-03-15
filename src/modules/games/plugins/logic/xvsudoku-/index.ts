import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { XvsudokuLogic } from './game.logic';
import { XvsudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const XvsudokuPlugin: GamePlugin = {
  config,
  logic: XvsudokuLogic,
  component: XvsudokuGame,
};

// Auto-register
GameRegistry.register(XvsudokuPlugin);

export default XvsudokuPlugin;
