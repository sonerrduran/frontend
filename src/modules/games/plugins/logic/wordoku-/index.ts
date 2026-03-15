import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { WordokuLogic } from './game.logic';
import { WordokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const WordokuPlugin: GamePlugin = {
  config,
  logic: WordokuLogic,
  component: WordokuGame,
};

// Auto-register
GameRegistry.register(WordokuPlugin);

export default WordokuPlugin;
