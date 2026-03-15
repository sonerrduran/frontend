import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { RaceOrderLogic } from './game.logic';
import { RaceOrderGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const RaceOrderPlugin: GamePlugin = {
  config,
  logic: RaceOrderLogic,
  component: RaceOrderGame,
};

// Auto-register
GameRegistry.register(RaceOrderPlugin);

export default RaceOrderPlugin;
