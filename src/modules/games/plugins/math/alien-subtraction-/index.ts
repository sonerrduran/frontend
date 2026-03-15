import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { AlienSubtractionLogic } from './game.logic';
import { AlienSubtractionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const AlienSubtractionPlugin: GamePlugin = {
  config,
  logic: AlienSubtractionLogic,
  component: AlienSubtractionGame,
};

// Auto-register
GameRegistry.register(AlienSubtractionPlugin);

export default AlienSubtractionPlugin;
