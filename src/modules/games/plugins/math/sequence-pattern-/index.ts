import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SequencePatternLogic } from './game.logic';
import { SequencePatternGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SequencePatternPlugin: GamePlugin = {
  config,
  logic: SequencePatternLogic,
  component: SequencePatternGame,
};

// Auto-register
GameRegistry.register(SequencePatternPlugin);

export default SequencePatternPlugin;
