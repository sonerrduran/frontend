import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { WindokuLogic } from './game.logic';
import { WindokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const WindokuPlugin: GamePlugin = {
  config,
  logic: WindokuLogic,
  component: WindokuGame,
};

// Auto-register
GameRegistry.register(WindokuPlugin);

export default WindokuPlugin;
