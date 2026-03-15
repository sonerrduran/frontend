import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CorrectOrderLogic } from './game.logic';
import { CorrectOrderGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CorrectOrderPlugin: GamePlugin = {
  config,
  logic: CorrectOrderLogic,
  component: CorrectOrderGame,
};

// Auto-register
GameRegistry.register(CorrectOrderPlugin);

export default CorrectOrderPlugin;
