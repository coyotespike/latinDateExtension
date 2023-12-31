function arabicToRomanNumerals(input: number): string {
  if (input <= 0) {
    throw new Error("Input must be a positive integer");
  }

  const romanNumerals: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  for (const [num, numeral] of romanNumerals) {
    while (input >= num) {
      result += numeral;
      input -= num;
    }
  }

  return result;
}

export default arabicToRomanNumerals;
