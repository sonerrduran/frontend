import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { MosaicPuzzleLogic } from './game.logic';
import { MosaicPuzzleGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const MosaicPuzzlePlugin: GamePlugin = {
  config,
  logic: MosaicPuzzleLogic,
  component: MosaicPuzzleGame,
};

// Auto-register
GameRegistry.register(MosaicPuzzlePlugin);

export default MosaicPuzzlePlugin;
