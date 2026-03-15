import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { TrainTracksLogic } from './game.logic';
import { TrainTracksGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const TrainTracksPlugin: GamePlugin = {
  config,
  logic: TrainTracksLogic,
  component: TrainTracksGame,
};

// Auto-register
GameRegistry.register(TrainTracksPlugin);

export default TrainTracksPlugin;
