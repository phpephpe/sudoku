import { getRandomNumber, range } from "./math";

describe("Math", () => {
  it("get a random number between min and max", () => {
    const min = 1;
    const max = 9;
    const result = getRandomNumber(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should return a range of number correctly", () => {
    expect(range(4)).toEqual([0, 1, 2, 3]);
    expect(range(4, 1)).toEqual([1, 2, 3, 4]);
  });
});
