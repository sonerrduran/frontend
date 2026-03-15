import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HeaviestObjectLogic } from './game.logic';
import { HeaviestObjectGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HeaviestObjectPlugin: GamePlugin = {
  config,
  logic: HeaviestObjectLogic,
  component: HeaviestObjectGame,
};

// Auto-register
GameRegistry.register(HeaviestObjectPlugin);

export default HeaviestObjectPlugin;
