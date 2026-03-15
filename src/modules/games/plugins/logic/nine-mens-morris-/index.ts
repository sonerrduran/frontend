import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NineMensMorrisLogic } from './game.logic';
import { NineMensMorrisGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NineMensMorrisPlugin: GamePlugin = {
  config,
  logic: NineMensMorrisLogic,
  component: NineMensMorrisGame,
};

// Auto-register
GameRegistry.register(NineMensMorrisPlugin);

export default NineMensMorrisPlugin;
