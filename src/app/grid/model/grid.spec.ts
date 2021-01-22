import { Grid } from './grid';
import { mockValidRawGrid } from './mocks';

describe('Grid', () => {
  it('should create an instance of grid', () => {
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

  it('should create an instance of grid from existing values', () => {
    const cells = mockValidRawGrid().cells;
    const grid = new Grid(2, cells);

    expect(cells).toEqual(grid.cells.map((c) => ({ value: c.value, original: c.original })));
  });

  it('should apply brute difficutly', () => {
    const grid = new Grid(2);

    expect(grid.cells.filter((c) => c.isSet()).length).toBe(8);
  });

  it('should return allowed values for a cell', () => {
    const cells = mockValidRawGrid().cells;
    cells[cells.length - 1].value = null;
    const grid = new Grid(2, cells);
    const lastCell = grid.cells[grid.cells.length - 1];

    expect(grid.getCellAllowedValues(lastCell)).toEqual([3]);
  });
});
