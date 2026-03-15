import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LightAndShadowLogic } from './game.logic';
import { LightAndShadowGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LightAndShadowPlugin: GamePlugin = {
  config,
  logic: LightAndShadowLogic,
  component: LightAndShadowGame,
};

// Auto-register
GameRegistry.register(LightAndShadowPlugin);

export default LightAndShadowPlugin;
