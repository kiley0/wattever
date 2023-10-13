import { gameStats, technologies } from "./gameData";
import { updateDisplay } from "./render";

const MANUAL_CRANK_ENERGY_GENERATED_WH = 1;
export function crankGenerator() {
  if (gameStats.bankBalanceDollars > 0.5) {
    gameStats.bankBalanceDollars -= 0.5;

    gameStats.storedEnergyWattHours +=
      MANUAL_CRANK_ENERGY_GENERATED_WH *
      gameStats.crankMultiplier *
      gameStats.population;

    updateDisplay();
  }
}

export function toggleAutoCrank() {
  if (technologies.autoCrankEnabled) {
    technologies.autoCrankEnabled = false;
    autoCrankEnabled.innerHTML = "OFF";
    autoCrankButton.innerHTML = "Auto Crank";
    return;
  }

  technologies.autoCrankEnabled = true;
  autoCrankEnabled.innerHTML = "ON";
  autoCrankButton.innerHTML = "Pause Auto Crank";
  return;
}

export function increaseCrankMultiplier() {
  if (gameStats.bankBalanceDollars > 100) {
    gameStats.crankMultiplier += 1;
    gameStats.bankBalanceDollars -= 100;
    updateDisplay();
  }
}
