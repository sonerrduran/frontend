import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MemoryCardsLogic } from './game.logic';
import { MemoryCardsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MemoryCardsPlugin: GamePlugin = {
  config,
  logic: MemoryCardsLogic,
  component: MemoryCardsGame,
};

// Auto-register
GameRegistry.register(MemoryCardsPlugin);

export default MemoryCardsPlugin;
