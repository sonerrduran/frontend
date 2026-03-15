import { GamePlugin } from '../../../engine/types/game.types';
import { config } from './game.config';
import { ThermoSudokuLogic } from './game.logic';
import { ThermoSudokuGame } from './game.ui';
import { GameRegistry } from '../../../engine/GameRegistry';

export const ThermoSudokuPlugin: GamePlugin = {
  config,
  logic: ThermoSudokuLogic,
  component: ThermoSudokuGame,
};

// Auto-register
GameRegistry.register(ThermoSudokuPlugin);

export default ThermoSudokuPlugin;
