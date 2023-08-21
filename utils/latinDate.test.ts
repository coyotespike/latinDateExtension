import { getLatinDate } from "./getLatinDate";

describe("getLatinDate", () => {
  it("should return correct Latin date for 28th August 2005", () => {
    const result = getLatinDate(new Date("2005-08-28"), 1);
    expect(result).toBe(
      "Hodiē est diēs Sōlis, ante diem v Kalendās Septembrēs MMDCCLVIII a.u.c. (vel MMV A.D.)"
    );
  });
  it("should return correct Latin date for 1st January", () => {
    const result = getLatinDate(new Date("2023-01-01"), 1);
    expect(result).toBe(
      "Hodiē est diēs Sōlis, Kalendīs Iānuāriīs MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 15th March (Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-15"), 1);
    expect(result).toBe(
      "Hodiē est diēs Mercuriī, Īdibus Mārtiīs MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should handle leap years correctly", () => {
    const result = getLatinDate(new Date("2024-02-29"), 1);
    expect(result).toBe(
      "Hodiē est diēs Iovis, prīdiē Kalendās Mārtiās MMDCCLXXVII a.u.c. (vel MMXXIV A.D.)"
    );
  });
  it("should return correct Latin date for 7th March (Nones of March)", () => {
    const result = getLatinDate(new Date("2023-03-07"), 1);
    expect(result).toBe(
      "Hodiē est diēs Mārtis, Nōnīs Mārtiīs MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 6th March (prīdiē Nōnās Mārtiīs)", () => {
    const result = getLatinDate(new Date("2023-03-06"), 1);
    expect(result).toBe(
      "Hodiē est diēs Lūnae, prīdiē Nōnās Mārtiās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 4th March (ante diem III Nōnās Mārtiīs)", () => {
    const result = getLatinDate(new Date("2023-03-04"), 1);
    expect(result).toBe(
      "Hodiē est diēs Sāturnī, ante diem iv Nōnās Mārtiās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 2nd March", () => {
    const result = getLatinDate(new Date("2023-03-02"), 1);
    expect(result).toBe(
      "Hodiē est diēs Iovis, ante diem vi Nōnās Mārtiās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 13th March (two days before Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-13"), 1);
    expect(result).toBe(
      "Hodiē est diēs Lūnae, ante diem iii Īdūs Mārtiās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 14th March (day before Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-14"), 1);
    expect(result).toBe(
      "Hodiē est diēs Mārtis, prīdiē Īdūs Mārtiās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 16th March (day after Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-16"), 1);
    expect(result).toBe(
      "Hodiē est diēs Iovis, ante diem xvii Kalendās Aprīlēs MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date for 31st December", () => {
    const result = getLatinDate(new Date("2023-12-31"), 1);
    expect(result).toBe(
      "Hodiē est diēs Sōlis, prīdiē Kalendās Iānuāriās MMDCCLXXVII a.u.c. (vel MMXXIII A.D.)"
    );
  });

  it("should return correct Latin date and holiday greeting for 3rd January", () => {
    const result = getLatinDate(new Date("2023-01-03"), 1);
    expect(result).toBe(
      "Hodiē est diēs Mārtis, ante diem iii Nōnās Iānuāriās MMDCCLXXVI a.u.c. (vel MMXXIII A.D.)"
    );
  });
});
