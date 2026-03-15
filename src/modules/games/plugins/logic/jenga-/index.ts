import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { JengaLogic } from './game.logic';
import { JengaGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const JengaPlugin: GamePlugin = {
  config,
  logic: JengaLogic,
  component: JengaGame,
};

// Auto-register
GameRegistry.register(JengaPlugin);

export default JengaPlugin;
