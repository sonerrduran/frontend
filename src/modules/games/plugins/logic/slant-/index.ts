import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SlantLogic } from './game.logic';
import { SlantGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SlantPlugin: GamePlugin = {
  config,
  logic: SlantLogic,
  component: SlantGame,
};

// Auto-register
GameRegistry.register(SlantPlugin);

export default SlantPlugin;
