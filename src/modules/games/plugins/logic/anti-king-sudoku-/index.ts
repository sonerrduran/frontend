import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AntiKingSudokuLogic } from './game.logic';
import { AntiKingSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AntiKingSudokuPlugin: GamePlugin = {
  config,
  logic: AntiKingSudokuLogic,
  component: AntiKingSudokuGame,
};

// Auto-register
GameRegistry.register(AntiKingSudokuPlugin);

export default AntiKingSudokuPlugin;
