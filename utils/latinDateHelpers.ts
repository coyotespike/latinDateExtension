export function getMonthNameForDaysBeforeNones(month: number): string {
  switch (month) {
    case 1:
      return "Ianuarias";
    case 2:
      return "Februarias";
    case 3:
      return "Martias";
    case 4:
      return "Apriles";
    case 5:
      return "Maias";
    case 6:
      return "Junias";
    case 7:
      return "Julias";
    case 8:
      return "Augustas";
    case 9:
      return "Septembres";
    case 10:
      return "Octobres";
    case 11:
      return "Novembres";
    case 12:
      return "Decembres";
    default:
      return "";
  }
}

// Helper function to convert a year to AUC
export function toAUC(year: number): number {
  const founding = 753;
  return year + founding;
}

export function getMonthNameForDaysBeforeIdes(month: number): string {
  return getMonthNameForDaysBeforeNones(month); // The naming is the same for days before Ides and days before Nones
}

export function getMonthNameForDaysAfterIdes(month: number): string {
  switch (month) {
    case 1:
      return "Februarias";
    case 2:
      return "Martias";
    case 3:
      return "Apriles";
    case 4:
      return "Maias";
    case 5:
      return "Junias";
    case 6:
      return "Julias";
    case 7:
      return "Augustas";
    case 8:
      return "Septembres";
    case 9:
      return "Octobres";
    case 10:
      return "Novembres";
    case 11:
      return "Decembres";
    case 12:
      return "Ianuarias";
    default:
      return "";
  }
}

export function getNumDaysForMonth(month: number, year: number): number {
  switch (month) {
    case 1:
      return 32; // January
    case 2:
      return isLeap(year) ? 30 : 29; // February
    case 3:
      return 32; // March
    case 4:
      return 31; // April
    case 5:
      return 32; // May
    case 6:
      return 31; // June
    case 7:
      return 32; // July
    case 8:
      return 32; // August
    case 9:
      return 31; // September
    case 10:
      return 32; // October
    case 11:
      return 31; // November
    case 12:
      return 32; // December
    default:
      return 0;
  }
}

export function isLeap(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
