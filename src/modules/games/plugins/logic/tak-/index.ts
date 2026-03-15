import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TakLogic } from './game.logic';
import { TakGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TakPlugin: GamePlugin = {
  config,
  logic: TakLogic,
  component: TakGame,
};

// Auto-register
GameRegistry.register(TakPlugin);

export default TakPlugin;
