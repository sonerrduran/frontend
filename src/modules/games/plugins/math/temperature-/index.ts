import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TemperatureLogic } from './game.logic';
import { TemperatureGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TemperaturePlugin: GamePlugin = {
  config,
  logic: TemperatureLogic,
  component: TemperatureGame,
};

// Auto-register
GameRegistry.register(TemperaturePlugin);

export default TemperaturePlugin;
