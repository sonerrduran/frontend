import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ReversiLogic } from './game.logic';
import { ReversiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ReversiPlugin: GamePlugin = {
  config,
  logic: ReversiLogic,
  component: ReversiGame,
};

// Auto-register
GameRegistry.register(ReversiPlugin);

export default ReversiPlugin;
