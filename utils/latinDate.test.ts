import { getLatinDate } from "./getLatinDate";

describe("getLatinDate", () => {
  it("should return correct Latin date for 1st January", () => {
    const result = getLatinDate(new Date("2023-01-01"));
    expect(result).toBe("Hodiē est Kalendīs Iānuāriīs MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 15th March (Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-15"));
    expect(result).toBe("Hodiē est Īdibus Mārtiīs MMDCCLXXVI a.u.c.");
  });

  it("should handle leap years correctly", () => {
    const result = getLatinDate(new Date("2024-02-29"));
    expect(result).toBe("Hodiē est prīdiē Kalendās Mārtiās MMDCCLXXVII a.u.c.");
  });

  it("should return correct Latin date for 7th March (Nones of March)", () => {
    const result = getLatinDate(new Date("2023-03-07"));
    expect(result).toBe("Hodiē est Nōnīs Mārtiīs MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 6th March (prīdiē Nōnās Mārtiīs)", () => {
    const result = getLatinDate(new Date("2023-03-06"));
    expect(result).toBe("Hodiē est prīdiē Nōnās Mārtiās MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 4th March (ante diem III Nōnās Mārtiīs)", () => {
    const result = getLatinDate(new Date("2023-03-04"));
    expect(result).toBe(
      "Hodiē est ante diem iv Nōnās Mārtiās MMDCCLXXVI a.u.c."
    );
  });

  it("should return correct Latin date for 2nd March", () => {
    const result = getLatinDate(new Date("2023-03-02"));
    expect(result).toBe(
      "Hodiē est ante diem vi Nōnās Mārtiās MMDCCLXXVI a.u.c."
    );
  });

  it("should return correct Latin date for 13th March (two days before Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-13"));
    expect(result).toBe(
      "Hodiē est ante diem iii Īdūs Mārtiās MMDCCLXXVI a.u.c."
    );
  });

  it("should return correct Latin date for 14th March (day before Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-14"));
    expect(result).toBe("Hodiē est prīdiē Īdūs Mārtiās MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 16th March (day after Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-16"));
    expect(result).toBe(
      "Hodiē est ante diem xviii Kalendās Aprīlēs MMDCCLXXVI a.u.c."
    );
  });

  it("should return correct Latin date for 31st December", () => {
    const result = getLatinDate(new Date("2023-12-31"));
    expect(result).toBe(
      "Hodiē est prīdiē Kalendās Iānuāriās MMDCCLXXVII a.u.c."
    );
  });

  // Test for a holiday
  it("should return correct Latin date and holiday greeting for 3rd January", () => {
    const result = getLatinDate(new Date("2023-01-03"));
    expect(result).toBe(
      "Hodiē est ante diem iii Nōnās Iānuāriās MMDCCLXXVII a.u.c. Laetus natalis dies, Marce Tullie Cicero!"
    );
  });
});
