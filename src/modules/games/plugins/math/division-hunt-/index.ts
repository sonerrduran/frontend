import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DivisionHuntLogic } from './game.logic';
import { DivisionHuntGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DivisionHuntPlugin: GamePlugin = {
  config,
  logic: DivisionHuntLogic,
  component: DivisionHuntGame,
};

// Auto-register
GameRegistry.register(DivisionHuntPlugin);

export default DivisionHuntPlugin;
