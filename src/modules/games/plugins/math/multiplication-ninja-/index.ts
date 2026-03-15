import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MultiplicationNinjaLogic } from './game.logic';
import { MultiplicationNinjaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MultiplicationNinjaPlugin: GamePlugin = {
  config,
  logic: MultiplicationNinjaLogic,
  component: MultiplicationNinjaGame,
};

// Auto-register
GameRegistry.register(MultiplicationNinjaPlugin);

export default MultiplicationNinjaPlugin;
