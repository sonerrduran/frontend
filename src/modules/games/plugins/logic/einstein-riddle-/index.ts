import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { EinsteinRiddleLogic } from './game.logic';
import { EinsteinRiddleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const EinsteinRiddlePlugin: GamePlugin = {
  config,
  logic: EinsteinRiddleLogic,
  component: EinsteinRiddleGame,
};

// Auto-register
GameRegistry.register(EinsteinRiddlePlugin);

export default EinsteinRiddlePlugin;
