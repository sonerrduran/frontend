import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { RhythmLogic } from './game.logic';
import { RhythmGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const RhythmPlugin: GamePlugin = {
  config,
  logic: RhythmLogic,
  component: RhythmGame,
};

// Auto-register
GameRegistry.register(RhythmPlugin);

export default RhythmPlugin;
