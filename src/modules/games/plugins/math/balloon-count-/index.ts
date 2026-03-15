import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BalloonCountLogic } from './game.logic';
import { BalloonCountGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BalloonCountPlugin: GamePlugin = {
  config,
  logic: BalloonCountLogic,
  component: BalloonCountGame,
};

// Auto-register
GameRegistry.register(BalloonCountPlugin);

export default BalloonCountPlugin;
