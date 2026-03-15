import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MissingShapeLogic } from './game.logic';
import { MissingShapeGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MissingShapePlugin: GamePlugin = {
  config,
  logic: MissingShapeLogic,
  component: MissingShapeGame,
};

// Auto-register
GameRegistry.register(MissingShapePlugin);

export default MissingShapePlugin;
