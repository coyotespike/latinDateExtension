// Returns the month name in the ablative case
export function getMonthInAblative(month: number): string {
  switch (month) {
    case 1:
      return "Iānuāriīs";
    case 2:
      return "Februāriīs";
    case 3:
      return "Mārtiīs";
    case 4:
      return "Aprīlibus";
    case 5:
      return "Māiīs";
    case 6:
      return "Iūniīs";
    case 7:
      return "Iūliīs";
    case 8:
      return "Augustīs";
    case 9:
      return "Septembribus";
    case 10:
      return "Octōbribus";
    case 11:
      return "Novembribus";
    case 12:
      return "Decembribus";
    default:
      return "ERROR: Invalid month.";
  }
}

// Returns the month name in the accusative case for days after the Ides
export function getMonthInAccusative(month: number): string {
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
    case 13: // handle wraparound
      return "Iānuāriās";
    default:
      return "";
  }
}

// Helper function to convert a year to AUC
export function toAUC(year: number, month?: number, day?: number): number {
  const aucYear = year + 753; // Convert to AUC year
  if (month === 12 && day === 31) {
    return aucYear + 1;
  }
  return aucYear;
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
