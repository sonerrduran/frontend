import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { FavoriteColorSurveyLogic } from './game.logic';
import { FavoriteColorSurveyGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const FavoriteColorSurveyPlugin: GamePlugin = {
  config,
  logic: FavoriteColorSurveyLogic,
  component: FavoriteColorSurveyGame,
};

// Auto-register
GameRegistry.register(FavoriteColorSurveyPlugin);

export default FavoriteColorSurveyPlugin;
