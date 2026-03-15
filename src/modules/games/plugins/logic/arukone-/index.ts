import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ArukoneLogic } from './game.logic';
import { ArukoneGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ArukonePlugin: GamePlugin = {
  config,
  logic: ArukoneLogic,
  component: ArukoneGame,
};

// Auto-register
GameRegistry.register(ArukonePlugin);

export default ArukonePlugin;
