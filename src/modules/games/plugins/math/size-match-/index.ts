import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SizeMatchLogic } from './game.logic';
import { SizeMatchGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SizeMatchPlugin: GamePlugin = {
  config,
  logic: SizeMatchLogic,
  component: SizeMatchGame,
};

// Auto-register
GameRegistry.register(SizeMatchPlugin);

export default SizeMatchPlugin;
