import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MastermindLogic } from './game.logic';
import { MastermindGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MastermindPlugin: GamePlugin = {
  config,
  logic: MastermindLogic,
  component: MastermindGame,
};

// Auto-register
GameRegistry.register(MastermindPlugin);

export default MastermindPlugin;
