import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { CompareSubtractionLogic } from './game.logic';
import { CompareSubtractionGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const CompareSubtractionPlugin: GamePlugin = {
  config,
  logic: CompareSubtractionLogic,
  component: CompareSubtractionGame,
};

// Auto-register
GameRegistry.register(CompareSubtractionPlugin);

export default CompareSubtractionPlugin;
