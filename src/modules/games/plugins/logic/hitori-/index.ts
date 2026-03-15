import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HitoriLogic } from './game.logic';
import { HitoriGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HitoriPlugin: GamePlugin = {
  config,
  logic: HitoriLogic,
  component: HitoriGame,
};

// Auto-register
GameRegistry.register(HitoriPlugin);

export default HitoriPlugin;
