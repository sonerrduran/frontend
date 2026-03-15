import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { RhythmicRunLogic } from './game.logic';
import { RhythmicRunGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const RhythmicRunPlugin: GamePlugin = {
  config,
  logic: RhythmicRunLogic,
  component: RhythmicRunGame,
};

// Auto-register
GameRegistry.register(RhythmicRunPlugin);

export default RhythmicRunPlugin;
