import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { PlaceValueLogic } from './game.logic';
import { PlaceValueGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const PlaceValuePlugin: GamePlugin = {
  config,
  logic: PlaceValueLogic,
  component: PlaceValueGame,
};

// Auto-register
GameRegistry.register(PlaceValuePlugin);

export default PlaceValuePlugin;
