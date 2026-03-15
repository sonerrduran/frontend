import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MinesweeperLogic } from './game.logic';
import { MinesweeperGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MinesweeperPlugin: GamePlugin = {
  config,
  logic: MinesweeperLogic,
  component: MinesweeperGame,
};

// Auto-register
GameRegistry.register(MinesweeperPlugin);

export default MinesweeperPlugin;
