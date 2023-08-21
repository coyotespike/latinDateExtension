import arabicToRomanNumerals from "./arabicToRomanNumerals";

describe("arabicToRomanNumerals", () => {
  it("should convert numbers to Roman numerals correctly", () => {
    expect(arabicToRomanNumerals(1)).toBe("I");
    expect(arabicToRomanNumerals(4)).toBe("IV");
    expect(arabicToRomanNumerals(9)).toBe("IX");
    expect(arabicToRomanNumerals(14)).toBe("XIV");
    expect(arabicToRomanNumerals(39)).toBe("XXXIX");
    expect(arabicToRomanNumerals(49)).toBe("XLIX");
    expect(arabicToRomanNumerals(99)).toBe("XCIX");
    expect(arabicToRomanNumerals(199)).toBe("CXCIX");
    expect(arabicToRomanNumerals(499)).toBe("CDXCIX");
    expect(arabicToRomanNumerals(999)).toBe("CMXCIX");
    expect(arabicToRomanNumerals(1000)).toBe("M");
    expect(arabicToRomanNumerals(1987)).toBe("MCMLXXXVII");
    expect(arabicToRomanNumerals(3999)).toBe("MMMCMXCIX");
  });
  it("should handle years between 2020 and 2030", () => {
    expect(arabicToRomanNumerals(2020)).toBe("MMXX");
    expect(arabicToRomanNumerals(2021)).toBe("MMXXI");
    expect(arabicToRomanNumerals(2022)).toBe("MMXXII");
    expect(arabicToRomanNumerals(2023)).toBe("MMXXIII");
    expect(arabicToRomanNumerals(2024)).toBe("MMXXIV");
    expect(arabicToRomanNumerals(2025)).toBe("MMXXV");
    expect(arabicToRomanNumerals(2026)).toBe("MMXXVI");
    expect(arabicToRomanNumerals(2027)).toBe("MMXXVII");
    expect(arabicToRomanNumerals(2028)).toBe("MMXXVIII");
    expect(arabicToRomanNumerals(2029)).toBe("MMXXIX");
    expect(arabicToRomanNumerals(2030)).toBe("MMXXX");
  });
  it("should handle zero input", () => {
    expect(() => arabicToRomanNumerals(0)).toThrow();
  });

  it("should handle large input numbers", () => {
    expect(arabicToRomanNumerals(4000)).toBe("MMMM");
    expect(arabicToRomanNumerals(5000)).toBe("MMMMM");
  });
});
