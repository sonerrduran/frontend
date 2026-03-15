import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DominosaLogic } from './game.logic';
import { DominosaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DominosaPlugin: GamePlugin = {
  config,
  logic: DominosaLogic,
  component: DominosaGame,
};

// Auto-register
GameRegistry.register(DominosaPlugin);

export default DominosaPlugin;
