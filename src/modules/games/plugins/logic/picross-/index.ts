import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PicrossLogic } from './game.logic';
import { PicrossGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PicrossPlugin: GamePlugin = {
  config,
  logic: PicrossLogic,
  component: PicrossGame,
};

// Auto-register
GameRegistry.register(PicrossPlugin);

export default PicrossPlugin;
