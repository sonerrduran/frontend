import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MathBasketballLogic } from './game.logic';
import { MathBasketballGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MathBasketballPlugin: GamePlugin = {
  config,
  logic: MathBasketballLogic,
  component: MathBasketballGame,
};

// Auto-register
GameRegistry.register(MathBasketballPlugin);

export default MathBasketballPlugin;
