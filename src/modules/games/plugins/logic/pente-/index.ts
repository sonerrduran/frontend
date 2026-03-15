import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PenteLogic } from './game.logic';
import { PenteGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PentePlugin: GamePlugin = {
  config,
  logic: PenteLogic,
  component: PenteGame,
};

// Auto-register
GameRegistry.register(PentePlugin);

export default PentePlugin;
