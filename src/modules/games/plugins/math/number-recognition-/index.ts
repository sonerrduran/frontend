import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { NumberRecognitionLogic } from './game.logic';
import { NumberRecognitionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const NumberRecognitionPlugin: GamePlugin = {
  config,
  logic: NumberRecognitionLogic,
  component: NumberRecognitionGame,
};

// Auto-register
GameRegistry.register(NumberRecognitionPlugin);

export default NumberRecognitionPlugin;
