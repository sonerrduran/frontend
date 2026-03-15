import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PizzaSharingLogic } from './game.logic';
import { PizzaSharingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PizzaSharingPlugin: GamePlugin = {
  config,
  logic: PizzaSharingLogic,
  component: PizzaSharingGame,
};

// Auto-register
GameRegistry.register(PizzaSharingPlugin);

export default PizzaSharingPlugin;
