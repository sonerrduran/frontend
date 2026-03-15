import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KuromasuLogic } from './game.logic';
import { KuromasuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KuromasuPlugin: GamePlugin = {
  config,
  logic: KuromasuLogic,
  component: KuromasuGame,
};

// Auto-register
GameRegistry.register(KuromasuPlugin);

export default KuromasuPlugin;
