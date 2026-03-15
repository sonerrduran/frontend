import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SkyscrapersLogic } from './game.logic';
import { SkyscrapersGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SkyscrapersPlugin: GamePlugin = {
  config,
  logic: SkyscrapersLogic,
  component: SkyscrapersGame,
};

// Auto-register
GameRegistry.register(SkyscrapersPlugin);

export default SkyscrapersPlugin;
