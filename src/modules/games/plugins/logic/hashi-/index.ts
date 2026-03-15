import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HashiLogic } from './game.logic';
import { HashiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HashiPlugin: GamePlugin = {
  config,
  logic: HashiLogic,
  component: HashiGame,
};

// Auto-register
GameRegistry.register(HashiPlugin);

export default HashiPlugin;
