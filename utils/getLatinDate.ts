import num2roman from "./num2roman";
import {
  toAUC,
  getMonthInAccusative,
  getMonthInAblative,
  getNumDaysForMonth,
  latinDaysOfWeek,
  ordinalMapping,
} from "./latinDateHelpers";

export function getLatinDate(
  date: Date = new Date(),
  timezoneOffset = 0
): string {
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are 0-indexed in JS
  const year = date.getUTCFullYear();
  const dayOfWeek = (date.getDay() + timezoneOffset) % 7;

  const latinDayOfWeek = latinDaysOfWeek[dayOfWeek];

  const ides = [3, 5, 7, 10].includes(month) ? 15 : 13;
  const nones = ides - 8;
  let latmon = "";
  let latindate = "";

  if (day === 1) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Kalendīs ${latmon} `;
  } else if (day === nones) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Nōnīs ${latmon} `;
  } else if (day === ides) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Īdibus ${latmon} `;
  } else if (day === nones - 1) {
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, prīdiē Nōnās ${latmon} `;
  } else if (day === ides - 1) {
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, prīdiē Īdūs ${latmon} `;
  } else if (day < nones) {
    const num = nones - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    const ordinalNum = ordinalMapping[romanNum];
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, ante diem ${romanNum} (${ordinalNum}) Nōnās ${latmon} `;
  } else if (day < ides) {
    const num = ides - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    const ordinalNum = ordinalMapping[romanNum];
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, ante diem ${romanNum} (${ordinalNum}) Īdūs ${latmon} `;
  } else if (day === getNumDaysForMonth(month, year) - 1) {
    latmon = getMonthInAccusative(month + 1); // Next month
    latindate = `Hodiē est ${latinDayOfWeek}, prīdiē Kalendās ${latmon} `;
  } else {
    const numDays = getNumDaysForMonth(month, year);
    const num = numDays - day + 1; // +1 because we're counting the Kalends of the next month
    const romanNum = num2roman(num).toLowerCase();
    const ordinalNum = ordinalMapping[romanNum];
    latmon = getMonthInAccusative(month + 1); // Next month
    latindate = `Hodiē est ${latinDayOfWeek}, ante diem ${romanNum} (${ordinalNum}) Kalendās ${latmon} `;
  }

  const aucyear = toAUC(year, month, day);
  const convyear = num2roman(aucyear);
  const gregorianYear = num2roman(date.getUTCFullYear());
  return `${latindate}${convyear} a.u.c. (vel ${gregorianYear} A.D.)`;
}
