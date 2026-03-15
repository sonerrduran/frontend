import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TwoNotTouchLogic } from './game.logic';
import { TwoNotTouchGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TwoNotTouchPlugin: GamePlugin = {
  config,
  logic: TwoNotTouchLogic,
  component: TwoNotTouchGame,
};

// Auto-register
GameRegistry.register(TwoNotTouchPlugin);

export default TwoNotTouchPlugin;
