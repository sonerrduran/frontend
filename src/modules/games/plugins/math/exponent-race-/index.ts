import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ExponentRaceLogic } from './game.logic';
import { ExponentRaceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ExponentRacePlugin: GamePlugin = {
  config,
  logic: ExponentRaceLogic,
  component: ExponentRaceGame,
};

// Auto-register
GameRegistry.register(ExponentRacePlugin);

export default ExponentRacePlugin;
