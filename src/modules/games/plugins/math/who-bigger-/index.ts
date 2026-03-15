import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { WhoBiggerLogic } from './game.logic';
import { WhoBiggerGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const WhoBiggerPlugin: GamePlugin = {
  config,
  logic: WhoBiggerLogic,
  component: WhoBiggerGame,
};

// Auto-register
GameRegistry.register(WhoBiggerPlugin);

export default WhoBiggerPlugin;
