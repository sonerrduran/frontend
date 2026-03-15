import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PentominoPuzzleLogic } from './game.logic';
import { PentominoPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PentominoPuzzlePlugin: GamePlugin = {
  config,
  logic: PentominoPuzzleLogic,
  component: PentominoPuzzleGame,
};

// Auto-register
GameRegistry.register(PentominoPuzzlePlugin);

export default PentominoPuzzlePlugin;
