import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { VacationRouteLogic } from './game.logic';
import { VacationRouteGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const VacationRoutePlugin: GamePlugin = {
  config,
  logic: VacationRouteLogic,
  component: VacationRouteGame,
};

// Auto-register
GameRegistry.register(VacationRoutePlugin);

export default VacationRoutePlugin;
