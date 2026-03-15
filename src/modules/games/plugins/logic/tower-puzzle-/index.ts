import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TowerPuzzleLogic } from './game.logic';
import { TowerPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TowerPuzzlePlugin: GamePlugin = {
  config,
  logic: TowerPuzzleLogic,
  component: TowerPuzzleGame,
};

// Auto-register
GameRegistry.register(TowerPuzzlePlugin);

export default TowerPuzzlePlugin;
