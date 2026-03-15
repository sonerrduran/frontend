import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LitsLogic } from './game.logic';
import { LitsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LitsPlugin: GamePlugin = {
  config,
  logic: LitsLogic,
  component: LitsGame,
};

// Auto-register
GameRegistry.register(LitsPlugin);

export default LitsPlugin;
