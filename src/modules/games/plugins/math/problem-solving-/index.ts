import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ProblemSolvingLogic } from './game.logic';
import { ProblemSolvingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ProblemSolvingPlugin: GamePlugin = {
  config,
  logic: ProblemSolvingLogic,
  component: ProblemSolvingGame,
};

// Auto-register
GameRegistry.register(ProblemSolvingPlugin);

export default ProblemSolvingPlugin;
