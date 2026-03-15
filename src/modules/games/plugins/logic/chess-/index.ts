import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ChessLogic } from './game.logic';
import { ChessGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ChessPlugin: GamePlugin = {
  config,
  logic: ChessLogic,
  component: ChessGame,
};

// Auto-register
GameRegistry.register(ChessPlugin);

export default ChessPlugin;
