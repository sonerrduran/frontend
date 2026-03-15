import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShikakuLogic } from './game.logic';
import { ShikakuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShikakuPlugin: GamePlugin = {
  config,
  logic: ShikakuLogic,
  component: ShikakuGame,
};

// Auto-register
GameRegistry.register(ShikakuPlugin);

export default ShikakuPlugin;
