import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LocationPuzzleLogic } from './game.logic';
import { LocationPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LocationPuzzlePlugin: GamePlugin = {
  config,
  logic: LocationPuzzleLogic,
  component: LocationPuzzleGame,
};

// Auto-register
GameRegistry.register(LocationPuzzlePlugin);

export default LocationPuzzlePlugin;
