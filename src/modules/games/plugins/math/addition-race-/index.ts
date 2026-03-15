import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AdditionRaceLogic } from './game.logic';
import { AdditionRaceGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AdditionRacePlugin: GamePlugin = {
  config,
  logic: AdditionRaceLogic,
  component: AdditionRaceGame,
};

// Auto-register
GameRegistry.register(AdditionRacePlugin);

export default AdditionRacePlugin;
