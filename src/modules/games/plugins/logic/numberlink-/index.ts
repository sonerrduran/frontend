import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberlinkLogic } from './game.logic';
import { NumberlinkGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberlinkPlugin: GamePlugin = {
  config,
  logic: NumberlinkLogic,
  component: NumberlinkGame,
};

// Auto-register
GameRegistry.register(NumberlinkPlugin);

export default NumberlinkPlugin;
