import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DotsAndBoxesLogic } from './game.logic';
import { DotsAndBoxesGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DotsAndBoxesPlugin: GamePlugin = {
  config,
  logic: DotsAndBoxesLogic,
  component: DotsAndBoxesGame,
};

// Auto-register
GameRegistry.register(DotsAndBoxesPlugin);

export default DotsAndBoxesPlugin;
