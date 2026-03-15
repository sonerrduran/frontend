import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberLineJumpLogic } from './game.logic';
import { NumberLineJumpGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberLineJumpPlugin: GamePlugin = {
  config,
  logic: NumberLineJumpLogic,
  component: NumberLineJumpGame,
};

// Auto-register
GameRegistry.register(NumberLineJumpPlugin);

export default NumberLineJumpPlugin;
