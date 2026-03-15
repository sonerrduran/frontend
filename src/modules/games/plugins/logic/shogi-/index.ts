import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ShogiLogic } from './game.logic';
import { ShogiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ShogiPlugin: GamePlugin = {
  config,
  logic: ShogiLogic,
  component: ShogiGame,
};

// Auto-register
GameRegistry.register(ShogiPlugin);

export default ShogiPlugin;
