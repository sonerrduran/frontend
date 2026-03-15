import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ToyGraphLogic } from './game.logic';
import { ToyGraphGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ToyGraphPlugin: GamePlugin = {
  config,
  logic: ToyGraphLogic,
  component: ToyGraphGame,
};

// Auto-register
GameRegistry.register(ToyGraphPlugin);

export default ToyGraphPlugin;
