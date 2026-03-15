import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CountdownLogic } from './game.logic';
import { CountdownGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CountdownPlugin: GamePlugin = {
  config,
  logic: CountdownLogic,
  component: CountdownGame,
};

// Auto-register
GameRegistry.register(CountdownPlugin);

export default CountdownPlugin;
