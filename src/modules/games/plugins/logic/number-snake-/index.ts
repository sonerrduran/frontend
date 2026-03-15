import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberSnakeLogic } from './game.logic';
import { NumberSnakeGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberSnakePlugin: GamePlugin = {
  config,
  logic: NumberSnakeLogic,
  component: NumberSnakeGame,
};

// Auto-register
GameRegistry.register(NumberSnakePlugin);

export default NumberSnakePlugin;
