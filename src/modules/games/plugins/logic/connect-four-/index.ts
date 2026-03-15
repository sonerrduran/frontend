import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ConnectFourLogic } from './game.logic';
import { ConnectFourGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ConnectFourPlugin: GamePlugin = {
  config,
  logic: ConnectFourLogic,
  component: ConnectFourGame,
};

// Auto-register
GameRegistry.register(ConnectFourPlugin);

export default ConnectFourPlugin;
