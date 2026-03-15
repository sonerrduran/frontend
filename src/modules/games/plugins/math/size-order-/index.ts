import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SizeOrderLogic } from './game.logic';
import { SizeOrderGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SizeOrderPlugin: GamePlugin = {
  config,
  logic: SizeOrderLogic,
  component: SizeOrderGame,
};

// Auto-register
GameRegistry.register(SizeOrderPlugin);

export default SizeOrderPlugin;
