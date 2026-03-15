import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GraphReadingLogic } from './game.logic';
import { GraphReadingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GraphReadingPlugin: GamePlugin = {
  config,
  logic: GraphReadingLogic,
  component: GraphReadingGame,
};

// Auto-register
GameRegistry.register(GraphReadingPlugin);

export default GraphReadingPlugin;
