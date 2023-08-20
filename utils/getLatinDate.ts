import num2roman from "./num2roman";
import {
  toAUC,
  getMonthNameForDaysAfterIdes,
  getMonthNameForDaysBeforeIdes,
  getMonthNameForDaysBeforeNones,
  getNumDaysForMonth,
} from "./latinDateHelpers";

export function getLatinDate(date: Date = new Date()): string {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are 0-indexed in JS
  const year = currentDate.getFullYear();

  const ides = [3, 5, 7, 10].includes(month) ? 15 : 13;
  const nones = ides - 8;
  let latmon = "";
  let latindate = "";

  if (day === 1 || day === nones || day === ides) {
    // ... (This part remains unchanged)
  } else if (day >= 2 && day < nones) {
    latmon = getMonthNameForDaysBeforeNones(month);
    const num = nones - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latindate = `Hodie est ante diem ${romanNum} Nonas ${latmon} `;
  } else if (day > nones && day < ides) {
    latmon = getMonthNameForDaysBeforeIdes(month);
    const num = ides - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latindate = `Hodie est ante diem ${romanNum} Idus ${latmon} `;
  } else if (day === nones - 1) {
    latmon = getMonthNameForDaysBeforeNones(month);
    latindate = `Hodie est pridie Nonas ${latmon} `;
  } else if (day === ides - 1) {
    latmon = getMonthNameForDaysBeforeIdes(month);
    latindate = `Hodie est pridie Idus ${latmon} `;
  } else if (day > ides) {
    latmon = getMonthNameForDaysAfterIdes(month);
    const numDays = getNumDaysForMonth(month, year);
    const num = numDays - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    if (romanNum === "ii") {
      latindate = `Hodie est pridie Kalendas ${latmon} `;
    } else {
      latindate = `Hodie est ante diem ${romanNum} Kalendas ${latmon} `;
    }
  } else {
    return "ERROR: day var didn't match any condition.";
  }

  const aucyear = toAUC(year);
  const convyear = num2roman(aucyear);
  return `${latindate}${convyear} a.u.c.`;
}
