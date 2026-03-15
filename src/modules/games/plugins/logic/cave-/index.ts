import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CaveLogic } from './game.logic';
import { CaveGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CavePlugin: GamePlugin = {
  config,
  logic: CaveLogic,
  component: CaveGame,
};

// Auto-register
GameRegistry.register(CavePlugin);

export default CavePlugin;
