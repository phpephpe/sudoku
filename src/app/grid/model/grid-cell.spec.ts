import { GridCell } from "./grid-cell";

describe("GridCell", () => {
  it("should create an instance", () => {
    expect(new GridCell({ value: 1 })).toBeDefined();
  });

  it("should check whether the value is set or not", () => {
    const cell = new GridCell();

    expect(cell.isSet()).toBeFalse();

    cell.value = 1;

    expect(cell.isSet()).toBeTrue();
  });

  it("should reset value correctly", () => {
    const cell = new GridCell({ value: 1 });
    expect(cell.isSet()).toBeTrue();

    cell.reset();
    expect(cell.isSet()).toBeFalse();
  });
});
