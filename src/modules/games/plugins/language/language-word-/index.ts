import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { LanguageWordLogic } from './game.logic';
import { LanguageWordGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const LanguageWordPlugin: GamePlugin = {
  config,
  logic: LanguageWordLogic,
  component: LanguageWordGame,
};

// Auto-register
GameRegistry.register(LanguageWordPlugin);

export default LanguageWordPlugin;
