import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BattleshipsLogic } from './game.logic';
import { BattleshipsGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BattleshipsPlugin: GamePlugin = {
  config,
  logic: BattleshipsLogic,
  component: BattleshipsGame,
};

// Auto-register
GameRegistry.register(BattleshipsPlugin);

export default BattleshipsPlugin;
