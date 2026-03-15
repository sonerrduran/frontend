import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LogicGridPuzzleLogic } from './game.logic';
import { LogicGridPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LogicGridPuzzlePlugin: GamePlugin = {
  config,
  logic: LogicGridPuzzleLogic,
  component: LogicGridPuzzleGame,
};

// Auto-register
GameRegistry.register(LogicGridPuzzlePlugin);

export default LogicGridPuzzlePlugin;
