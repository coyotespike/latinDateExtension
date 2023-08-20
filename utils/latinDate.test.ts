import { getLatinDate } from "./getLatinDate";

describe("getLatinDate", () => {
  it("should return correct Latin date for 1st January", () => {
    const result = getLatinDate(new Date("2023-01-01"));
    expect(result).toBe("Hodie est Kalendis Ianuariis MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 15th March (Ides of March)", () => {
    const result = getLatinDate(new Date("2023-03-15"));
    expect(result).toBe("Hodie est Idibus Martiis MMDCCLXXVI a.u.c.");
  });

  it("should handle leap years correctly", () => {
    const result = getLatinDate(new Date("2024-02-29"));
    expect(result).toBe(
      "Hodie est ante diem II Kalendas Martias MMDCCLXXVII a.u.c."
    );
  });

  it("should return correct Latin date for 5th March (Nones of March)", () => {
    const result = getLatinDate(new Date("2023-03-05"));
    expect(result).toBe("Hodie est Nonis Martiis MMDCCLXXVI a.u.c.");
  });

  it("should return correct Latin date for 13th April (ante diem III Idus Aprilis)", () => {
    const result = getLatinDate(new Date("2023-04-13"));
    expect(result).toBe(
      "Hodie est ante diem III Idus Aprilis MMDCCLXXVI a.u.c."
    );
  });
});
