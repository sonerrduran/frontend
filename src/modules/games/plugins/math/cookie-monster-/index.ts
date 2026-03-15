import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CookieMonsterLogic } from './game.logic';
import { CookieMonsterGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CookieMonsterPlugin: GamePlugin = {
  config,
  logic: CookieMonsterLogic,
  component: CookieMonsterGame,
};

// Auto-register
GameRegistry.register(CookieMonsterPlugin);

export default CookieMonsterPlugin;
