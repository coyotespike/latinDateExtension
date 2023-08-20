import { getLatinDate } from "./getLatinDate"; // Adjust the import path if necessary

describe("getLatinDate", () => {
  it("should return correct Latin date for 1st January", () => {
    const result = getLatinDate(new Date("2023-01-01"));
    expect(result).toBe("Hodie est Kalendis Ianuariis 2776 a.u.c.");
  });

  it("should return correct Latin date for 15th March (Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-15"));
    expect(result).toBe("Hodie est Idibus Martiis 2776 a.u.c.");
  });

  it("should handle leap years correctly", () => {
    const result = getLatinDate(new Date("2024-02-29"));
    // Add expected result for 29th February in a leap year
  });

  // Add more test cases as needed
});
