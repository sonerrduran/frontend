import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MazeLogic } from './game.logic';
import { MazeGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MazePlugin: GamePlugin = {
  config,
  logic: MazeLogic,
  component: MazeGame,
};

// Auto-register
GameRegistry.register(MazePlugin);

export default MazePlugin;
