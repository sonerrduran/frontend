import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CarefulEyesLogic } from './game.logic';
import { CarefulEyesGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CarefulEyesPlugin: GamePlugin = {
  config,
  logic: CarefulEyesLogic,
  component: CarefulEyesGame,
};

// Auto-register
GameRegistry.register(CarefulEyesPlugin);

export default CarefulEyesPlugin;
