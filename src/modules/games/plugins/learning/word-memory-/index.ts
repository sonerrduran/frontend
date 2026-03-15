import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { WordMemoryLogic } from './game.logic';
import { WordMemoryGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const WordMemoryPlugin: GamePlugin = {
  config,
  logic: WordMemoryLogic,
  component: WordMemoryGame,
};

// Auto-register
GameRegistry.register(WordMemoryPlugin);

export default WordMemoryPlugin;
