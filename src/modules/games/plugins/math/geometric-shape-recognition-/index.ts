import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { GeometricShapeRecognitionLogic } from './game.logic';
import { GeometricShapeRecognitionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const GeometricShapeRecognitionPlugin: GamePlugin = {
  config,
  logic: GeometricShapeRecognitionLogic,
  component: GeometricShapeRecognitionGame,
};

// Auto-register
GameRegistry.register(GeometricShapeRecognitionPlugin);

export default GeometricShapeRecognitionPlugin;
