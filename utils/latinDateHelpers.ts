export function getMonthNameForDaysBeforeNones(month: number): string {
  switch (month) {
    case 1:
      return "Iānuāriās";
    case 2:
      return "Februāriās";
    case 3:
      return "Mārtiās";
    case 4:
      return "Aprīlēs";
    case 5:
      return "Māiās";
    case 6:
      return "Iūniās";
    case 7:
      return "Iūliās";
    case 8:
      return "Augustās";
    case 9:
      return "Septembrēs";
    case 10:
      return "Octōbrēs";
    case 11:
      return "Novembrēs";
    case 12:
      return "Decembrēs";
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
      return "Februāriās";
    case 2:
      return "Mārtiās";
    case 3:
      return "Aprīlēs";
    case 4:
      return "Māiās";
    case 5:
      return "Iūniās";
    case 6:
      return "Iūliās";
    case 7:
      return "Augustās";
    case 8:
      return "Septembrēs";
    case 9:
      return "Octōbrēs";
    case 10:
      return "Novembrēs";
    case 11:
      return "Decembrēs";
    case 12:
      return "Iānuāriās";
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
