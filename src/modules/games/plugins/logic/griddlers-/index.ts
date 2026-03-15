import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GriddlersLogic } from './game.logic';
import { GriddlersGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GriddlersPlugin: GamePlugin = {
  config,
  logic: GriddlersLogic,
  component: GriddlersGame,
};

// Auto-register
GameRegistry.register(GriddlersPlugin);

export default GriddlersPlugin;
