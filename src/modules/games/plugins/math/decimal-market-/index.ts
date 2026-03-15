import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DecimalMarketLogic } from './game.logic';
import { DecimalMarketGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DecimalMarketPlugin: GamePlugin = {
  config,
  logic: DecimalMarketLogic,
  component: DecimalMarketGame,
};

// Auto-register
GameRegistry.register(DecimalMarketPlugin);

export default DecimalMarketPlugin;
