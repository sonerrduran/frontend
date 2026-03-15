import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TectonicsLogic } from './game.logic';
import { TectonicsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TectonicsPlugin: GamePlugin = {
  config,
  logic: TectonicsLogic,
  component: TectonicsGame,
};

// Auto-register
GameRegistry.register(TectonicsPlugin);

export default TectonicsPlugin;
