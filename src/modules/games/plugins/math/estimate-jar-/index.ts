import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { EstimateJarLogic } from './game.logic';
import { EstimateJarGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const EstimateJarPlugin: GamePlugin = {
  config,
  logic: EstimateJarLogic,
  component: EstimateJarGame,
};

// Auto-register
GameRegistry.register(EstimateJarPlugin);

export default EstimateJarPlugin;
