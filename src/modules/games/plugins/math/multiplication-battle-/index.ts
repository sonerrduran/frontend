import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MultiplicationBattleLogic } from './game.logic';
import { MultiplicationBattleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MultiplicationBattlePlugin: GamePlugin = {
  config,
  logic: MultiplicationBattleLogic,
  component: MultiplicationBattleGame,
};

// Auto-register
GameRegistry.register(MultiplicationBattlePlugin);

export default MultiplicationBattlePlugin;
