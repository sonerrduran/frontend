import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MasyuLogic } from './game.logic';
import { MasyuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MasyuPlugin: GamePlugin = {
  config,
  logic: MasyuLogic,
  component: MasyuGame,
};

// Auto-register
GameRegistry.register(MasyuPlugin);

export default MasyuPlugin;
