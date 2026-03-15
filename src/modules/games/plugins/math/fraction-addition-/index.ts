import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FractionAdditionLogic } from './game.logic';
import { FractionAdditionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FractionAdditionPlugin: GamePlugin = {
  config,
  logic: FractionAdditionLogic,
  component: FractionAdditionGame,
};

// Auto-register
GameRegistry.register(FractionAdditionPlugin);

export default FractionAdditionPlugin;
