import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SpaceAdditionLogic } from './game.logic';
import { SpaceAdditionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SpaceAdditionPlugin: GamePlugin = {
  config,
  logic: SpaceAdditionLogic,
  component: SpaceAdditionGame,
};

// Auto-register
GameRegistry.register(SpaceAdditionPlugin);

export default SpaceAdditionPlugin;
