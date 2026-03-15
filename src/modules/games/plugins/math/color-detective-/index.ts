import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ColorDetectiveLogic } from './game.logic';
import { ColorDetectiveGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ColorDetectivePlugin: GamePlugin = {
  config,
  logic: ColorDetectiveLogic,
  component: ColorDetectiveGame,
};

// Auto-register
GameRegistry.register(ColorDetectivePlugin);

export default ColorDetectivePlugin;
