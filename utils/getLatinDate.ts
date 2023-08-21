import arabicToRomanNumerals from "./arabicToRomanNumerals";
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
  const isPrīdiē =
    day === nones - 1 ||
    day === ides - 1 ||
    day === getNumDaysForMonth(month, year) - 1;
  let latmon = "";
  let latindate = "";

  // First case: we're exactly on the Kalends, Nones, or Ides
  if (day === 1) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Kalendīs ${latmon} `;
  } else if (day === nones) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Nōnīs ${latmon} `;
  } else if (day === ides) {
    latmon = getMonthInAblative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, Īdibus ${latmon} `;
    // Second case: we're exactly on the day before the Kalends, Nones, or Ides
  } else if (isPrīdiē) {
    const isKalendās = day === getNumDaysForMonth(month, year) - 1;
    const isNones = day === nones - 1;
    const targetType = isKalendās ? "Kalendās" : isNones ? "Nōnās" : "Īdūs";
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, prīdiē ${targetType} ${latmon} `;
    // Third case: we're approaching the Nones or Ides
  } else if (day < nones || day < ides) {
    const num = day < nones ? nones - day + 1 : ides - day + 1;
    const targetType = day < nones ? "Nōnās" : "Īdūs";
    const romanNum = arabicToRomanNumerals(num).toLowerCase();
    const ordinalNum = ordinalMapping[romanNum];
    latmon = getMonthInAccusative(month);
    latindate = `Hodiē est ${latinDayOfWeek}, ante diem ${romanNum} (${ordinalNum}) ${targetType} ${latmon} `;
    // Fourth case: we're past the Nones and Ides, and are approaching the Kalends of the next month
    // We have to count the day we are on, as well as the Kalends of the next month - count inclusively.
  } else {
    const numDays = getNumDaysForMonth(month, year);
    const num = numDays - day + 1; // +1 because we're counting the Kalends of the next month
    const romanNum = arabicToRomanNumerals(num).toLowerCase();
    const ordinalNum = ordinalMapping[romanNum];
    latmon = getMonthInAccusative(month + 1); // Next month
    latindate = `Hodiē est ${latinDayOfWeek}, ante diem ${romanNum} (${ordinalNum}) Kalendās ${latmon} `;
  }

  const aucyear = toAUC(year, month, day);
  const convyear = arabicToRomanNumerals(aucyear);
  const gregorianYear = arabicToRomanNumerals(date.getUTCFullYear());
  return `${latindate}${convyear} a.u.c. (vel ${gregorianYear} A.D.)`;
}
