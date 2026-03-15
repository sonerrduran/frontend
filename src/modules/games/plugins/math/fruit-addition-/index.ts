import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FruitAdditionLogic } from './game.logic';
import { FruitAdditionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FruitAdditionPlugin: GamePlugin = {
  config,
  logic: FruitAdditionLogic,
  component: FruitAdditionGame,
};

// Auto-register
GameRegistry.register(FruitAdditionPlugin);

export default FruitAdditionPlugin;
