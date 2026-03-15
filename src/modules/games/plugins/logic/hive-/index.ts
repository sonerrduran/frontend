import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HiveLogic } from './game.logic';
import { HiveGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HivePlugin: GamePlugin = {
  config,
  logic: HiveLogic,
  component: HiveGame,
};

// Auto-register
GameRegistry.register(HivePlugin);

export default HivePlugin;
