import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AdditionPuzzleLogic } from './game.logic';
import { AdditionPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AdditionPuzzlePlugin: GamePlugin = {
  config,
  logic: AdditionPuzzleLogic,
  component: AdditionPuzzleGame,
};

// Auto-register
GameRegistry.register(AdditionPuzzlePlugin);

export default AdditionPuzzlePlugin;
