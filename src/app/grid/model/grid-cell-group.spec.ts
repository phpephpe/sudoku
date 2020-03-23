import { GridCell } from "./grid-cell";
import { GridCellGroup } from "./grid-cell-group";

describe("GridCellGroup", () => {
  it("should create an instance", () => {
    expect(new GridCellGroup()).toBeDefined();
  });

  it("should check the group validity correctly", () => {
    const validGroup = new GridCellGroup([
      new GridCell({ value: 1 }, 9),
      new GridCell({ value: 2 }, 9)
    ]);
    expect(validGroup.isValid()).toBeTrue();

    const invalidGroup = new GridCellGroup([
      new GridCell({ value: 1 }, 9),
      new GridCell({ value: 2 }, 9),
      new GridCell({ value: 2 }, 9)
    ]);
    expect(invalidGroup.isValid()).toBeFalse();
  });

  it("should return group's values correctly", () => {
    const group = new GridCellGroup([
      new GridCell({ value: 1 }, 9),
      new GridCell({ value: 2 }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9),
      new GridCell({ value: undefined }, 9)
    ]);

    expect(group.values()).toEqual([1, 2]);
  });
});
