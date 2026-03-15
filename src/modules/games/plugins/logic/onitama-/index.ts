import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { OnitamaLogic } from './game.logic';
import { OnitamaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const OnitamaPlugin: GamePlugin = {
  config,
  logic: OnitamaLogic,
  component: OnitamaGame,
};

// Auto-register
GameRegistry.register(OnitamaPlugin);

export default OnitamaPlugin;
