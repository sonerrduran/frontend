import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { BlockCodingLogic } from './game.logic';
import { BlockCodingGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const BlockCodingPlugin: GamePlugin = {
  config,
  logic: BlockCodingLogic,
  component: BlockCodingGame,
};

// Auto-register
GameRegistry.register(BlockCodingPlugin);

export default BlockCodingPlugin;
