import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { QuoridorLogic } from './game.logic';
import { QuoridorGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const QuoridorPlugin: GamePlugin = {
  config,
  logic: QuoridorLogic,
  component: QuoridorGame,
};

// Auto-register
GameRegistry.register(QuoridorPlugin);

export default QuoridorPlugin;
