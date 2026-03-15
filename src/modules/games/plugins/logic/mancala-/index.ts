import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MancalaLogic } from './game.logic';
import { MancalaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MancalaPlugin: GamePlugin = {
  config,
  logic: MancalaLogic,
  component: MancalaGame,
};

// Auto-register
GameRegistry.register(MancalaPlugin);

export default MancalaPlugin;
