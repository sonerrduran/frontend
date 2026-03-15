import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { StarBattleLogic } from './game.logic';
import { StarBattleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const StarBattlePlugin: GamePlugin = {
  config,
  logic: StarBattleLogic,
  component: StarBattleGame,
};

// Auto-register
GameRegistry.register(StarBattlePlugin);

export default StarBattlePlugin;
