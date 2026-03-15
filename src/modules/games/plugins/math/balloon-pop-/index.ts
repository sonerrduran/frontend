import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BalloonPopLogic } from './game.logic';
import { BalloonPopGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BalloonPopPlugin: GamePlugin = {
  config,
  logic: BalloonPopLogic,
  component: BalloonPopGame,
};

// Auto-register
GameRegistry.register(BalloonPopPlugin);

export default BalloonPopPlugin;
