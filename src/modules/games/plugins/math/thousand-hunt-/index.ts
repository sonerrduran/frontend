import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ThousandHuntLogic } from './game.logic';
import { ThousandHuntGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ThousandHuntPlugin: GamePlugin = {
  config,
  logic: ThousandHuntLogic,
  component: ThousandHuntGame,
};

// Auto-register
GameRegistry.register(ThousandHuntPlugin);

export default ThousandHuntPlugin;
