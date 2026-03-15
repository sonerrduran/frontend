import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberHuntTo100Logic } from './game.logic';
import { NumberHuntTo100Game } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberHuntTo100Plugin: GamePlugin = {
  config,
  logic: NumberHuntTo100Logic,
  component: NumberHuntTo100Game,
};

// Auto-register
GameRegistry.register(NumberHuntTo100Plugin);

export default NumberHuntTo100Plugin;
