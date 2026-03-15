import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AppleCollectLogic } from './game.logic';
import { AppleCollectGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AppleCollectPlugin: GamePlugin = {
  config,
  logic: AppleCollectLogic,
  component: AppleCollectGame,
};

// Auto-register
GameRegistry.register(AppleCollectPlugin);

export default AppleCollectPlugin;
