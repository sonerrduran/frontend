import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TakuzuLogic } from './game.logic';
import { TakuzuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TakuzuPlugin: GamePlugin = {
  config,
  logic: TakuzuLogic,
  component: TakuzuGame,
};

// Auto-register
GameRegistry.register(TakuzuPlugin);

export default TakuzuPlugin;
