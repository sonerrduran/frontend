import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AnimalCountLogic } from './game.logic';
import { AnimalCountGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AnimalCountPlugin: GamePlugin = {
  config,
  logic: AnimalCountLogic,
  component: AnimalCountGame,
};

// Auto-register
GameRegistry.register(AnimalCountPlugin);

export default AnimalCountPlugin;
