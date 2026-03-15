import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { RippleEffectLogic } from './game.logic';
import { RippleEffectGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const RippleEffectPlugin: GamePlugin = {
  config,
  logic: RippleEffectLogic,
  component: RippleEffectGame,
};

// Auto-register
GameRegistry.register(RippleEffectPlugin);

export default RippleEffectPlugin;
