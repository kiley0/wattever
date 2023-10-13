import { gameStats } from "./gameData";

export function updatePopulation() {
  if (gameStats.population < 1) {
    return;
  }

  if (gameStats.timeElapsedDays % 10 !== 0) {
    return;
  }

  if (
    gameStats.population > 1 &&
    gameStats.storedEnergyWattHours < gameStats.population
  ) {
    gameStats.population--;
    return;
  }

  if (gameStats.storedEnergyWattHours > gameStats.population) {
    gameStats.population++;
    return;
  }
}
