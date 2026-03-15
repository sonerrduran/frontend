import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SymmetryLogic } from './game.logic';
import { SymmetryGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SymmetryPlugin: GamePlugin = {
  config,
  logic: SymmetryLogic,
  component: SymmetryGame,
};

// Auto-register
GameRegistry.register(SymmetryPlugin);

export default SymmetryPlugin;
