import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TwoDigitAdditionLogic } from './game.logic';
import { TwoDigitAdditionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TwoDigitAdditionPlugin: GamePlugin = {
  config,
  logic: TwoDigitAdditionLogic,
  component: TwoDigitAdditionGame,
};

// Auto-register
GameRegistry.register(TwoDigitAdditionPlugin);

export default TwoDigitAdditionPlugin;
