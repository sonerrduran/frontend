import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FanoronaLogic } from './game.logic';
import { FanoronaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FanoronaPlugin: GamePlugin = {
  config,
  logic: FanoronaLogic,
  component: FanoronaGame,
};

// Auto-register
GameRegistry.register(FanoronaPlugin);

export default FanoronaPlugin;
