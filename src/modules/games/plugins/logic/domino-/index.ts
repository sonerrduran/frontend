import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { DominoLogic } from './game.logic';
import { DominoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const DominoPlugin: GamePlugin = {
  config,
  logic: DominoLogic,
  component: DominoGame,
};

// Auto-register
GameRegistry.register(DominoPlugin);

export default DominoPlugin;
