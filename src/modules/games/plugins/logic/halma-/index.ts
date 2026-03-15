import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HalmaLogic } from './game.logic';
import { HalmaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HalmaPlugin: GamePlugin = {
  config,
  logic: HalmaLogic,
  component: HalmaGame,
};

// Auto-register
GameRegistry.register(HalmaPlugin);

export default HalmaPlugin;
