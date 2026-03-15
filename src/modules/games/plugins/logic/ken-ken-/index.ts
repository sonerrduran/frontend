import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KenKenLogic } from './game.logic';
import { KenKenGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KenKenPlugin: GamePlugin = {
  config,
  logic: KenKenLogic,
  component: KenKenGame,
};

// Auto-register
GameRegistry.register(KenKenPlugin);

export default KenKenPlugin;
