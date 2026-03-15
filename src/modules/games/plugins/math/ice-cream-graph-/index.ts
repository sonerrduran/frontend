import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { IceCreamGraphLogic } from './game.logic';
import { IceCreamGraphGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const IceCreamGraphPlugin: GamePlugin = {
  config,
  logic: IceCreamGraphLogic,
  component: IceCreamGraphGame,
};

// Auto-register
GameRegistry.register(IceCreamGraphPlugin);

export default IceCreamGraphPlugin;
