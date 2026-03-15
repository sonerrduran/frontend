import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberTrainLogic } from './game.logic';
import { NumberTrainGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberTrainPlugin: GamePlugin = {
  config,
  logic: NumberTrainLogic,
  component: NumberTrainGame,
};

// Auto-register
GameRegistry.register(NumberTrainPlugin);

export default NumberTrainPlugin;
