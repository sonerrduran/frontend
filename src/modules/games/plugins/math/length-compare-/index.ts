import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LengthCompareLogic } from './game.logic';
import { LengthCompareGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LengthComparePlugin: GamePlugin = {
  config,
  logic: LengthCompareLogic,
  component: LengthCompareGame,
};

// Auto-register
GameRegistry.register(LengthComparePlugin);

export default LengthComparePlugin;
