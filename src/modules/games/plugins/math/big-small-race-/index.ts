import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BigSmallRaceLogic } from './game.logic';
import { BigSmallRaceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BigSmallRacePlugin: GamePlugin = {
  config,
  logic: BigSmallRaceLogic,
  component: BigSmallRaceGame,
};

// Auto-register
GameRegistry.register(BigSmallRacePlugin);

export default BigSmallRacePlugin;
