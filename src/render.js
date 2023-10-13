import {
  toggleAutoCrank,
  increaseCrankMultiplier,
  crankGenerator,
} from "./actions";
import { gameStats, technologies, milestones } from "./gameData";
import { getEnergyUsagePerDay } from "./energyUsage";

const storedEnergyWattHours = document.getElementById("storedEnergyWattHours");
const timeElapsedDays = document.getElementById("timeElapsedDays");
const population = document.getElementById("population");
const energyUsagePerDay = document.getElementById("energyUsagePerDay");
const bankBalanceDollars = document.getElementById("bankBalanceDollars");
const pricePerKwh = document.getElementById("pricePerKwh");

const crankGeneratorButton = document.getElementById("crankGeneratorButton");

const crankMultiplier = document.getElementById("crankMultiplier");
crankGeneratorButton.addEventListener("click", crankGenerator);
const increaseCrankMultiplierButton = document.getElementById(
  "increaseCrankMultiplierButton"
);
increaseCrankMultiplierButton.addEventListener(
  "click",
  increaseCrankMultiplier
);

const autoCrankEnabled = document.getElementById("autoCrankEnabled");
const autoCrankButton = document.getElementById("autoCrankButton");
autoCrankButton.addEventListener("click", toggleAutoCrank);

export function updateDisplay() {
  storedEnergyWattHours.innerHTML =
    gameStats.storedEnergyWattHours.toLocaleString() + " kWh";
  timeElapsedDays.innerHTML =
    gameStats.timeElapsedDays.toLocaleString() + " days";
  population.innerHTML = gameStats.population.toLocaleString() + " people";
  energyUsagePerDay.innerHTML = getEnergyUsagePerDay() + " kWh";
  bankBalanceDollars.innerHTML =
    "$" + gameStats.bankBalanceDollars.toFixed(2).toLocaleString();
  pricePerKwh.innerHTML =
    "$" + gameStats.pricePerKwh.toFixed(2).toLocaleString();

  autoCrankEnabled.innerHTML = technologies.autoCrankEnabled ? "ON" : "OFF";
  crankMultiplier.innerHTML = gameStats.crankMultiplier.toLocaleString();

  if (gameStats.storedEnergyWattHours > milestones.storedEnergyWattHours.m1) {
    autoCrankButton.setAttribute("class", "button");
  }

  if (
    gameStats.storedEnergyWattHours > milestones.storedEnergyWattHours.m2 &&
    gameStats.bankBalanceDollars > 100
  ) {
    increaseCrankMultiplierButton.setAttribute("class", "button");
  }

  if (gameStats.bankBalanceDollars < 100) {
    increaseCrankMultiplierButton.setAttribute("class", "button is-hidden");
  }
}
