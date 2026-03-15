import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TapaLogic } from './game.logic';
import { TapaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TapaPlugin: GamePlugin = {
  config,
  logic: TapaLogic,
  component: TapaGame,
};

// Auto-register
GameRegistry.register(TapaPlugin);

export default TapaPlugin;
