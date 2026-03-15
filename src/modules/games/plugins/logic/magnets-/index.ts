import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MagnetsLogic } from './game.logic';
import { MagnetsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MagnetsPlugin: GamePlugin = {
  config,
  logic: MagnetsLogic,
  component: MagnetsGame,
};

// Auto-register
GameRegistry.register(MagnetsPlugin);

export default MagnetsPlugin;
