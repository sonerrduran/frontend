import { GamePlugin } from '@/modules/games/engine/types/game.types';
import { config } from './game.config';
import { BigSmallRaceLogic } from './game.logic';
import { BigSmallRaceGame } from './game.ui';

export const BigSmallRacePlugin: GamePlugin = {
  config,
  logic: BigSmallRaceLogic,
  component: BigSmallRaceGame,
};

// Auto-register with engine
import { GameRegistry } from '@/modules/games/engine/GameRegistry';
GameRegistry.register(BigSmallRacePlugin);

export default BigSmallRacePlugin;
