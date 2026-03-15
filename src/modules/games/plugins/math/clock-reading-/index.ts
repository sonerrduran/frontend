import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ClockReadingLogic } from './game.logic';
import { ClockReadingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ClockReadingPlugin: GamePlugin = {
  config,
  logic: ClockReadingLogic,
  component: ClockReadingGame,
};

// Auto-register
GameRegistry.register(ClockReadingPlugin);

export default ClockReadingPlugin;
