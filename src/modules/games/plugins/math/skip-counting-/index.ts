import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SkipCountingLogic } from './game.logic';
import { SkipCountingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SkipCountingPlugin: GamePlugin = {
  config,
  logic: SkipCountingLogic,
  component: SkipCountingGame,
};

// Auto-register
GameRegistry.register(SkipCountingPlugin);

export default SkipCountingPlugin;
