import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AkariLogic } from './game.logic';
import { AkariGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AkariPlugin: GamePlugin = {
  config,
  logic: AkariLogic,
  component: AkariGame,
};

// Auto-register
GameRegistry.register(AkariPlugin);

export default AkariPlugin;
