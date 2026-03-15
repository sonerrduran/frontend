import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BlokusDuelLogic } from './game.logic';
import { BlokusDuelGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BlokusDuelPlugin: GamePlugin = {
  config,
  logic: BlokusDuelLogic,
  component: BlokusDuelGame,
};

// Auto-register
GameRegistry.register(BlokusDuelPlugin);

export default BlokusDuelPlugin;
