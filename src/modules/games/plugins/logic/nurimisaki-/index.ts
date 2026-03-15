import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NurimisakiLogic } from './game.logic';
import { NurimisakiGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NurimisakiPlugin: GamePlugin = {
  config,
  logic: NurimisakiLogic,
  component: NurimisakiGame,
};

// Auto-register
GameRegistry.register(NurimisakiPlugin);

export default NurimisakiPlugin;
