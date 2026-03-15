import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { YajilinLogic } from './game.logic';
import { YajilinGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const YajilinPlugin: GamePlugin = {
  config,
  logic: YajilinLogic,
  component: YajilinGame,
};

// Auto-register
GameRegistry.register(YajilinPlugin);

export default YajilinPlugin;
