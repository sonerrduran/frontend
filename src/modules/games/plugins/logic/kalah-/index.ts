import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KalahLogic } from './game.logic';
import { KalahGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KalahPlugin: GamePlugin = {
  config,
  logic: KalahLogic,
  component: KalahGame,
};

// Auto-register
GameRegistry.register(KalahPlugin);

export default KalahPlugin;
