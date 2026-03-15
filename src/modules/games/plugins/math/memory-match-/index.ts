import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MemoryMatchLogic } from './game.logic';
import { MemoryMatchGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MemoryMatchPlugin: GamePlugin = {
  config,
  logic: MemoryMatchLogic,
  component: MemoryMatchGame,
};

// Auto-register
GameRegistry.register(MemoryMatchPlugin);

export default MemoryMatchPlugin;
