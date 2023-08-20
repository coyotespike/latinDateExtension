import num2roman from "./num2roman";
import {
  toAUC,
  getMonthNameForDaysAfterIdes,
  getMonthNameForDaysBeforeIdes,
  getMonthNameForDaysBeforeNones,
  getNumDaysForMonth,
} from "./latinDateHelpers";

export function getLatinDate(date: Date = new Date()): string {
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-indexed in JS
  const year = date.getFullYear();

  const ides = [3, 5, 7, 10].includes(month) ? 15 : 13;
  const nones = ides - 8;
  let latmon = "";
  let latindate = "";

  if (day === 1 || day === nones || day === ides) {
    switch (month) {
      case 1:
        latmon = "Iānuāriīs";
        break;
      case 2:
        latmon = "Februāriīs";
        break;
      case 3:
        latmon = "Mārtiīs";
        break;
      case 4:
        latmon = "Aprīlibus";
        break;
      case 5:
        latmon = "Māiīs";
        break;
      case 6:
        latmon = "Iūniīs";
        break;
      case 7:
        latmon = "Iūliīs";
        break;
      case 8:
        latmon = "Augustīs";
        break;
      case 9:
        latmon = "Septembribus"; // No macron needed
        break;
      case 10:
        latmon = "Octōbribus";
        break;
      case 11:
        latmon = "Novembribus"; // No macron needed
        break;
      case 12:
        latmon = "Decembribus"; // No macron needed
        break;
      default:
        return "ERROR: Invalid month.";
    }
  }
  if (day === 1) {
    latindate = `Hodiē est Kalendīs ${latmon} `;
  } else if (day === nones) {
    latindate = `Hodiē est Nōnīs ${latmon} `;
  } else if (day === ides) {
    latindate = `Hodiē est Idibus ${latmon} `;
  } else if (day >= 2 && day < nones) {
    latmon = getMonthNameForDaysBeforeNones(month);
    const num = nones - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latindate = `Hodiē est ante diem ${romanNum} Nōnās ${latmon} `;
  } else if (day > nones && day < ides) {
    latmon = getMonthNameForDaysBeforeIdes(month);
    const num = ides - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    latindate = `Hodiē est ante diem ${romanNum} Īdūs ${latmon} `;
  } else if (day === nones - 1) {
    latmon = getMonthNameForDaysBeforeNones(month);
    latindate = `Hodiē est prīdiē Nōnās ${latmon} `;
  } else if (day === ides - 1) {
    latmon = getMonthNameForDaysBeforeIdes(month);
    latindate = `Hodiē est prīdiē Īdūs ${latmon} `;
  } else if (day > ides) {
    latmon = getMonthNameForDaysAfterIdes(month);
    const numDays = getNumDaysForMonth(month, year);
    const num = numDays - day + 1;
    const romanNum = num2roman(num).toLowerCase();
    if (romanNum === "ii") {
      latindate = `Hodiē est prīdiē Kalendās ${latmon} `;
    } else {
      latindate = `Hodiē est ante diem ${romanNum} Kalendās ${latmon} `;
    }
  } else {
    return "ERROR: day var didn't match any condition.";
  }

  const aucyear = toAUC(year);
  const convyear = num2roman(aucyear);
  return `${latindate}${convyear} a.u.c.`;
}
