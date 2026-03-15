import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MissingNumberLogic } from './game.logic';
import { MissingNumberGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MissingNumberPlugin: GamePlugin = {
  config,
  logic: MissingNumberLogic,
  component: MissingNumberGame,
};

// Auto-register
GameRegistry.register(MissingNumberPlugin);

export default MissingNumberPlugin;
