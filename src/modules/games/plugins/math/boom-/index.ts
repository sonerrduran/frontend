import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BoomLogic } from './game.logic';
import { BoomGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BoomPlugin: GamePlugin = {
  config,
  logic: BoomLogic,
  component: BoomGame,
};

// Auto-register
GameRegistry.register(BoomPlugin);

export default BoomPlugin;
