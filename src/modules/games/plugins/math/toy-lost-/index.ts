import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ToyLostLogic } from './game.logic';
import { ToyLostGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ToyLostPlugin: GamePlugin = {
  config,
  logic: ToyLostLogic,
  component: ToyLostGame,
};

// Auto-register
GameRegistry.register(ToyLostPlugin);

export default ToyLostPlugin;
