import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AbaloneLogic } from './game.logic';
import { AbaloneGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AbalonePlugin: GamePlugin = {
  config,
  logic: AbaloneLogic,
  component: AbaloneGame,
};

// Auto-register
GameRegistry.register(AbalonePlugin);

export default AbalonePlugin;
