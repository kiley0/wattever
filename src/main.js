import { gameStats, technologies } from "./gameData";
import { updateDisplay } from "./render";
import { crankGenerator } from "./actions";
import { useDailyEnergy } from "./energyUsage";
import { updatePopulation } from "./population";

function startMainLoop() {
  updateDisplay();
  setInterval(() => {
    tick();
  }, 100);

  setInterval(() => {
    dayTick();
  }, 1000);
}

function tick() {
  if (technologies.autoCrankEnabled) {
    crankGenerator();
  }
  updateDisplay();
}

function dayTick() {
  gameStats.timeElapsedDays++;
  useDailyEnergy();
  updatePopulation();

  updateDisplay();
  console.log("tick", gameStats);
}

startMainLoop();
