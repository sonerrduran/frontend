import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { SubtractionBasketLogic } from './game.logic';
import { SubtractionBasketGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const SubtractionBasketPlugin: GamePlugin = {
  config,
  logic: SubtractionBasketLogic,
  component: SubtractionBasketGame,
};

// Auto-register
GameRegistry.register(SubtractionBasketPlugin);

export default SubtractionBasketPlugin;
