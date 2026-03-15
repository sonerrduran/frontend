import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LatinSquaresLogic } from './game.logic';
import { LatinSquaresGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LatinSquaresPlugin: GamePlugin = {
  config,
  logic: LatinSquaresLogic,
  component: LatinSquaresGame,
};

// Auto-register
GameRegistry.register(LatinSquaresPlugin);

export default LatinSquaresPlugin;
