import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberBuildingLogic } from './game.logic';
import { NumberBuildingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberBuildingPlugin: GamePlugin = {
  config,
  logic: NumberBuildingLogic,
  component: NumberBuildingGame,
};

// Auto-register
GameRegistry.register(NumberBuildingPlugin);

export default NumberBuildingPlugin;
