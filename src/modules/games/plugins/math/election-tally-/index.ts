import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ElectionTallyLogic } from './game.logic';
import { ElectionTallyGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ElectionTallyPlugin: GamePlugin = {
  config,
  logic: ElectionTallyLogic,
  component: ElectionTallyGame,
};

// Auto-register
GameRegistry.register(ElectionTallyPlugin);

export default ElectionTallyPlugin;
