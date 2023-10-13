import { gameStats } from "./gameData";

export const DAILY_ENERGY_USE_PER_PERSON_KWH = 1;
export function useDailyEnergy() {
  if (gameStats.storedEnergyWattHours > 0) {
    gameStats.storedEnergyWattHours -=
      gameStats.population * DAILY_ENERGY_USE_PER_PERSON_KWH;

    gameStats.bankBalanceDollars +=
      gameStats.population *
      DAILY_ENERGY_USE_PER_PERSON_KWH *
      gameStats.pricePerKwh;
  }
}

export function getEnergyUsagePerDay() {
  return DAILY_ENERGY_USE_PER_PERSON_KWH * gameStats.population;
}
