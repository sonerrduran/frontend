import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GraphCompletionLogic } from './game.logic';
import { GraphCompletionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GraphCompletionPlugin: GamePlugin = {
  config,
  logic: GraphCompletionLogic,
  component: GraphCompletionGame,
};

// Auto-register
GameRegistry.register(GraphCompletionPlugin);

export default GraphCompletionPlugin;
