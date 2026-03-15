import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PolyominoPuzzleLogic } from './game.logic';
import { PolyominoPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PolyominoPuzzlePlugin: GamePlugin = {
  config,
  logic: PolyominoPuzzleLogic,
  component: PolyominoPuzzleGame,
};

// Auto-register
GameRegistry.register(PolyominoPuzzlePlugin);

export default PolyominoPuzzlePlugin;
