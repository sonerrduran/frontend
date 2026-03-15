import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FishAdditionLogic } from './game.logic';
import { FishAdditionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FishAdditionPlugin: GamePlugin = {
  config,
  logic: FishAdditionLogic,
  component: FishAdditionGame,
};

// Auto-register
GameRegistry.register(FishAdditionPlugin);

export default FishAdditionPlugin;
