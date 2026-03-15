import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PatternContinueLogic } from './game.logic';
import { PatternContinueGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PatternContinuePlugin: GamePlugin = {
  config,
  logic: PatternContinueLogic,
  component: PatternContinueGame,
};

// Auto-register
GameRegistry.register(PatternContinuePlugin);

export default PatternContinuePlugin;
