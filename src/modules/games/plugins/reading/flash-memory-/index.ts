import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FlashMemoryLogic } from './game.logic';
import { FlashMemoryGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FlashMemoryPlugin: GamePlugin = {
  config,
  logic: FlashMemoryLogic,
  component: FlashMemoryGame,
};

// Auto-register
GameRegistry.register(FlashMemoryPlugin);

export default FlashMemoryPlugin;
