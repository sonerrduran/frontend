import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumbrixLogic } from './game.logic';
import { NumbrixGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumbrixPlugin: GamePlugin = {
  config,
  logic: NumbrixLogic,
  component: NumbrixGame,
};

// Auto-register
GameRegistry.register(NumbrixPlugin);

export default NumbrixPlugin;
