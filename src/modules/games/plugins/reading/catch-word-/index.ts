import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CatchWordLogic } from './game.logic';
import { CatchWordGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CatchWordPlugin: GamePlugin = {
  config,
  logic: CatchWordLogic,
  component: CatchWordGame,
};

// Auto-register
GameRegistry.register(CatchWordPlugin);

export default CatchWordPlugin;
