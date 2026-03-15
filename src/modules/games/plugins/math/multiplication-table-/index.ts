import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MultiplicationTableLogic } from './game.logic';
import { MultiplicationTableGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MultiplicationTablePlugin: GamePlugin = {
  config,
  logic: MultiplicationTableLogic,
  component: MultiplicationTableGame,
};

// Auto-register
GameRegistry.register(MultiplicationTablePlugin);

export default MultiplicationTablePlugin;
