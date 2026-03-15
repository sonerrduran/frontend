import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CrossLogicLogic } from './game.logic';
import { CrossLogicGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CrossLogicPlugin: GamePlugin = {
  config,
  logic: CrossLogicLogic,
  component: CrossLogicGame,
};

// Auto-register
GameRegistry.register(CrossLogicPlugin);

export default CrossLogicPlugin;
