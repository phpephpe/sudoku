import { Grid } from "./grid";

describe("Grid", () => {
  it("should create an instance of grid", () => {
    const size = 3;
    const fullSize = 9;
    const grid = new Grid(size);

    expect(grid).toBeDefined();
    expect(grid.rows.length).toBe(fullSize);
    expect(grid.columns.length).toBe(fullSize);
    expect(grid.squares.length).toBe(fullSize);
    expect(grid.cells.length).toBe(fullSize * fullSize);

    [...grid.rows, ...grid.columns, ...grid.squares].forEach(g =>
      expect(g.isValid()).toBeTrue()
    );
  });
});
