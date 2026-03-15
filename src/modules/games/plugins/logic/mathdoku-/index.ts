import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MathdokuLogic } from './game.logic';
import { MathdokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MathdokuPlugin: GamePlugin = {
  config,
  logic: MathdokuLogic,
  component: MathdokuGame,
};

// Auto-register
GameRegistry.register(MathdokuPlugin);

export default MathdokuPlugin;
