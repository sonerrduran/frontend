import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { XiangqiLogic } from './game.logic';
import { XiangqiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const XiangqiPlugin: GamePlugin = {
  config,
  logic: XiangqiLogic,
  component: XiangqiGame,
};

// Auto-register
GameRegistry.register(XiangqiPlugin);

export default XiangqiPlugin;
