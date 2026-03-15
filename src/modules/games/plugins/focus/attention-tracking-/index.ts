import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AttentionTrackingLogic } from './game.logic';
import { AttentionTrackingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AttentionTrackingPlugin: GamePlugin = {
  config,
  logic: AttentionTrackingLogic,
  component: AttentionTrackingGame,
};

// Auto-register
GameRegistry.register(AttentionTrackingPlugin);

export default AttentionTrackingPlugin;
