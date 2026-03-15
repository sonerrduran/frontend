import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AntiKnightSudokuLogic } from './game.logic';
import { AntiKnightSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AntiKnightSudokuPlugin: GamePlugin = {
  config,
  logic: AntiKnightSudokuLogic,
  component: AntiKnightSudokuGame,
};

// Auto-register
GameRegistry.register(AntiKnightSudokuPlugin);

export default AntiKnightSudokuPlugin;
