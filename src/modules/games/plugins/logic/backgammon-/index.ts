import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BackgammonLogic } from './game.logic';
import { BackgammonGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BackgammonPlugin: GamePlugin = {
  config,
  logic: BackgammonLogic,
  component: BackgammonGame,
};

// Auto-register
GameRegistry.register(BackgammonPlugin);

export default BackgammonPlugin;
