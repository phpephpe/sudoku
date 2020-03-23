import { distinct, except } from "./array";

describe("Array", () => {
  it("should return distinct value of an array", () => {
    expect(distinct([1, 2, 2, 3, 4, 5, 5, 6, 7, 7])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);
  });

  it("should return all values except the ones in the second array", () => {
    expect(except([1, 2, 3, 4, 5], [2, 3])).toEqual([1, 4, 5]);
  });
});
