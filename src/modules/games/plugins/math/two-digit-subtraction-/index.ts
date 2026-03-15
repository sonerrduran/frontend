import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TwoDigitSubtractionLogic } from './game.logic';
import { TwoDigitSubtractionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TwoDigitSubtractionPlugin: GamePlugin = {
  config,
  logic: TwoDigitSubtractionLogic,
  component: TwoDigitSubtractionGame,
};

// Auto-register
GameRegistry.register(TwoDigitSubtractionPlugin);

export default TwoDigitSubtractionPlugin;
