import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FillominoLogic } from './game.logic';
import { FillominoGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FillominoPlugin: GamePlugin = {
  config,
  logic: FillominoLogic,
  component: FillominoGame,
};

// Auto-register
GameRegistry.register(FillominoPlugin);

export default FillominoPlugin;
