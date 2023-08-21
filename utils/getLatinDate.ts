import num2roman from "./num2roman";
import {
  toAUC,
  getMonthInAccusative,
  getMonthInAblative,
  getNumDaysForMonth,
} from "./latinDateHelpers";

export function getLatinDate(date: Date = new Date()): string {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-indexed in JS
  const year = date.getUTCFullYear();

  const ides = [3, 5, 7, 10].includes(month) ? 15 : 13;
  const nones = ides - 8;
  let latmon = "";
  let latindate = "";

  if (day === 1) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est Kalendīs ${latmon} `;
  } else if (day === nones) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est Nōnīs ${latmon} `;
  } else if (day === ides) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est Īdibus ${latmon} `;
  } else if (day === nones - 1) {
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est prīdiē Nōnās ${latmon} `;
  } else if (day === ides - 1) {
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est prīdiē Īdūs ${latmon} `;
  } else if (day < nones) {
    const num = nones - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ante diem ${romanNum} Nōnās ${latmon} `;
  } else if (day < ides) {
    const num = ides - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ante diem ${romanNum} Īdūs ${latmon} `;
  } else if (day === getNumDaysForMonth(month, year) - 1) {
    latmon = getMonthInAccusative(month + 1); // Next month
    latindate = `Hodiē est prīdiē Kalendās ${latmon} `;
  } else {
    const numDays = getNumDaysForMonth(month, year);
    const num = numDays - day + 2; // +2 because we're counting the Kalends of the next month
    const romanNum = num2roman(num).toLowerCase();
    latmon = getMonthInAccusative(month + 1); // Next month
    latindate = `Hodiē est ante diem ${romanNum} Kalendās ${latmon} `;
  }

  const aucyear = toAUC(year, month, day);
  const convyear = num2roman(aucyear);
  return `${latindate}${convyear} a.u.c.`;
}
