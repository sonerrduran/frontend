import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GomokuLogic } from './game.logic';
import { GomokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GomokuPlugin: GamePlugin = {
  config,
  logic: GomokuLogic,
  component: GomokuGame,
};

// Auto-register
GameRegistry.register(GomokuPlugin);

export default GomokuPlugin;
