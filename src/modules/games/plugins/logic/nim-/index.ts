import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NimLogic } from './game.logic';
import { NimGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NimPlugin: GamePlugin = {
  config,
  logic: NimLogic,
  component: NimGame,
};

// Auto-register
GameRegistry.register(NimPlugin);

export default NimPlugin;
