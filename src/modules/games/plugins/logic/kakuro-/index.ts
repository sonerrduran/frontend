import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { KakuroLogic } from './game.logic';
import { KakuroGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const KakuroPlugin: GamePlugin = {
  config,
  logic: KakuroLogic,
  component: KakuroGame,
};

// Auto-register
GameRegistry.register(KakuroPlugin);

export default KakuroPlugin;
