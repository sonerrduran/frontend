import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LeftRightRaceLogic } from './game.logic';
import { LeftRightRaceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LeftRightRacePlugin: GamePlugin = {
  config,
  logic: LeftRightRaceLogic,
  component: LeftRightRaceGame,
};

// Auto-register
GameRegistry.register(LeftRightRacePlugin);

export default LeftRightRacePlugin;
