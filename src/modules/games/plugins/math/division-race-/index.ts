import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DivisionRaceLogic } from './game.logic';
import { DivisionRaceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DivisionRacePlugin: GamePlugin = {
  config,
  logic: DivisionRaceLogic,
  component: DivisionRaceGame,
};

// Auto-register
GameRegistry.register(DivisionRacePlugin);

export default DivisionRacePlugin;
