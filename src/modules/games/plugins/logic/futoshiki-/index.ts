import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FutoshikiLogic } from './game.logic';
import { FutoshikiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FutoshikiPlugin: GamePlugin = {
  config,
  logic: FutoshikiLogic,
  component: FutoshikiGame,
};

// Auto-register
GameRegistry.register(FutoshikiPlugin);

export default FutoshikiPlugin;
