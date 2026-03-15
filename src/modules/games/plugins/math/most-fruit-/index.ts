import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MostFruitLogic } from './game.logic';
import { MostFruitGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MostFruitPlugin: GamePlugin = {
  config,
  logic: MostFruitLogic,
  component: MostFruitGame,
};

// Auto-register
GameRegistry.register(MostFruitPlugin);

export default MostFruitPlugin;
