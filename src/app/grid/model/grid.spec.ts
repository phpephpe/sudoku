import { Grid } from "./grid";

describe("Grid", () => {
  it("should create an instance of grid", () => {
    const size = 3;
    const fullSize = 9;
    const grid = new Grid(size);

    expect(grid).toBeDefined();
    expect(grid.size).toBe(size);
    expect(grid.fullSize).toBe(fullSize);
    expect(grid.cells.length).toBe(fullSize * fullSize);
    expect(grid.rows.length).toBe(fullSize);
    expect(grid.columns.length).toBe(fullSize);
    expect(grid.squares.length).toBe(fullSize);
  });

  it("should create an instance of grid from existing values", () => {
    const cells = [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, 3];
    const grid = new Grid(2, cells);

    expect(cells).toEqual(grid.cells.map((c) => c.value));
  });

  it("should return allowed values for a cell", () => {
    const grid = new Grid(2, [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, null]);
    const lastCell = grid.cells[grid.cells.length - 1];

    expect(grid.getCellAllowedValues(lastCell)).toEqual([3]);
  });

  it("should check if a cell is invalid", () => {
    const grid = new Grid(2, [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, null]);
    const lastCell = grid.cells[grid.cells.length - 1];

    expect(grid.isCellInvalid(lastCell)).toBeFalse();

    lastCell.value = 4;

    expect(grid.isCellInvalid(lastCell)).toBeTrue();
  });

  it("should check if a cell is valid", () => {
    const grid = new Grid(2, [1, 2, 3, 4, 2, 3, 4, 1, 3, 4, 1, 2, 4, 1, 2, null]);
    const lastCell = grid.cells[grid.cells.length - 1];

    expect(grid.isCellValid(lastCell)).toBeFalse();

    lastCell.value = 4;

    expect(grid.isCellValid(lastCell)).toBeFalse();

    lastCell.value = 3;

    expect(grid.isCellValid(lastCell)).toBeTrue();
  });
});
