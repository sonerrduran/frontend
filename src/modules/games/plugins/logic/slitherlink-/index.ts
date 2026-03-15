import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SlitherlinkLogic } from './game.logic';
import { SlitherlinkGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SlitherlinkPlugin: GamePlugin = {
  config,
  logic: SlitherlinkLogic,
  component: SlitherlinkGame,
};

// Auto-register
GameRegistry.register(SlitherlinkPlugin);

export default SlitherlinkPlugin;
