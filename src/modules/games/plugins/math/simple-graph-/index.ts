import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SimpleGraphLogic } from './game.logic';
import { SimpleGraphGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SimpleGraphPlugin: GamePlugin = {
  config,
  logic: SimpleGraphLogic,
  component: SimpleGraphGame,
};

// Auto-register
GameRegistry.register(SimpleGraphPlugin);

export default SimpleGraphPlugin;
