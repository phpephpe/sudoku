import { GridCell } from "./grid-cell";
import { GridCellGroup } from "./grid-cell-group";

describe("GridCell", () => {
  it("should create an instance", () => {
    expect(new GridCell({ value: 1 }, 9)).toBeDefined();
  });

  it("should reset value correctly", () => {
    const cell = new GridCell({ row: 1, column: 1, value: 1 }, 9);
    expect(cell.isSet()).toBeTrue();

    cell.reset();
    expect(cell.isSet()).toBeFalse();
  });

  it("should return allowed values for a cell correctly", () => {
    const cell = new GridCell({ value: 1 }, 9);
    cell.groups.push(
      ...[
        new GridCellGroup([
          new GridCell({ value: 1 }, 9),
          new GridCell({ value: 2 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 3 }, 9)
        ]),
        new GridCellGroup([
          new GridCell({ value: 1 }, 9),
          new GridCell({ value: 4 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 8 }, 9),
          new GridCell({ value: 5 }, 9)
        ])
      ]
    );

    expect(cell.allowedValues()).toEqual([6, 7, 9]);
  });

  it("should return if it belongs to any invalid group", () => {
    const cell = new GridCell({ value: 1 }, 9);
    cell.groups.push(
      ...[
        new GridCellGroup([
          new GridCell({ value: 1 }, 9),
          new GridCell({ value: 2 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 4 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 6 }, 9),
          new GridCell({ value: 7 }, 9),
          new GridCell({ value: 8 }, 9),
          new GridCell({ value: 9 }, 9)
        ]),
        new GridCellGroup([
          new GridCell({ value: 1 }, 9),
          new GridCell({ value: 2 }, 9),
          new GridCell({ value: 3 }, 9),
          new GridCell({ value: 4 }, 9),
          new GridCell({ value: 5 }, 9),
          new GridCell({ value: 6 }, 9),
          new GridCell({ value: 7 }, 9),
          new GridCell({ value: 8 }, 9),
          new GridCell({ value: 9 }, 9)
        ])
      ]
    );

    expect(cell.isPartOfAnInvalidGroup()).toEqual(false);

    const cells = cell.groups[0].cells;
    cells[cells.length - 1].value = cells[cells.length - 2].value;

    expect(cell.isPartOfAnInvalidGroup()).toEqual(true);
  });
});
