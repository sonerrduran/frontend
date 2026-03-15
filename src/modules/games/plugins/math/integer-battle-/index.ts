import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { IntegerBattleLogic } from './game.logic';
import { IntegerBattleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const IntegerBattlePlugin: GamePlugin = {
  config,
  logic: IntegerBattleLogic,
  component: IntegerBattleGame,
};

// Auto-register
GameRegistry.register(IntegerBattlePlugin);

export default IntegerBattlePlugin;
