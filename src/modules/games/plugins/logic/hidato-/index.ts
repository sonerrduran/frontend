import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { HidatoLogic } from './game.logic';
import { HidatoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const HidatoPlugin: GamePlugin = {
  config,
  logic: HidatoLogic,
  component: HidatoGame,
};

// Auto-register
GameRegistry.register(HidatoPlugin);

export default HidatoPlugin;
