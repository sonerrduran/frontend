import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MarketBasketLogic } from './game.logic';
import { MarketBasketGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MarketBasketPlugin: GamePlugin = {
  config,
  logic: MarketBasketLogic,
  component: MarketBasketGame,
};

// Auto-register
GameRegistry.register(MarketBasketPlugin);

export default MarketBasketPlugin;
