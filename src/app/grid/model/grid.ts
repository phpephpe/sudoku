import { distinct, except } from '../../../utils/array';
import { getRandomNumber, range } from '../../../utils/math';
import { GridCell, RawGridCell } from './grid-cell';
import { GridCellGroup } from './grid-cell-group';

export class Grid {
  readonly size: number;
  readonly fullSize: number;

  cells: Array<GridCell>;
  rows: GridCellGroup[];
  columns: GridCellGroup[];
  squares: GridCellGroup[];

  constructor(size: number, cells?: RawGridCell[]) {
    this.size = size;
    this.fullSize = Math.pow(size, 2);

    this.createGridStructure();

    if (cells) {
      this.cells.forEach((c, i) => {
        c.value = cells[i].value;
        c.original = cells[i].original;
      });
    } else {
      this.populateGridWithValues();
      this.applyDifficulty();
    }
  }

  private createGridStructure() {
    this.cells = range(this.fullSize, 1)
      .map((r) => range(this.fullSize, 1).map((c) => ({ r, c })))
      .reduce((acc, val) => acc.concat(val), [])
      .map(
        ({ r, c }) =>
          new GridCell({
            row: r,
            column: c,
            square:
              Math.floor((r - 1) / this.size) * this.size + Math.floor((c - 1) / this.size) + 1,
          })
      );

    this.rows = range(this.fullSize, 1).map(
      (i) => new GridCellGroup(this.cells.filter((c) => c.row === i))
    );

    this.columns = range(this.fullSize, 1).map(
      (i) => new GridCellGroup(this.cells.filter((c) => c.column === i))
    );

    this.squares = range(this.fullSize, 1).map(
      (i) => new GridCellGroup(this.cells.filter((c) => c.square === i))
    );
  }

  private populateGridWithValues() {
    let done = false;

    while (!done) {
      for (let i = 0; i < this.cells.length; i++) {
        const allowedValues = this.getCellAllowedValues(this.cells[i]);

        if (allowedValues.length === 0) {
          this.cells.forEach((c) => c.reset());
          break;
        }

        let randomNumber = getRandomNumber(1, this.fullSize);

        while (!allowedValues.includes(randomNumber)) {
          randomNumber = getRandomNumber(1, this.fullSize);
        }

        this.cells[i].value = randomNumber;

        if (i === this.cells.length - 1) {
          done = true;
        }
      }
    }
  }

  private applyDifficulty() {
    const countToHide = this.cells.length / 2;
    const indexes: number[] = [];

    for (let i = 0; i < countToHide; i++) {
      let index = -1;

      index = getRandomNumber(0, this.cells.length - 1);
      while (indexes.includes(index)) {
        index = getRandomNumber(0, this.cells.length - 1);
      }

      indexes.push(index);
    }

    indexes.forEach((index) => {
      const cell = this.cells[index];
      cell.reset();
      cell.original = false;
    });
  }

  getCellAllowedValues(cell: GridCell) {
    const groupValues = distinct(
      this.getCellGroups(cell)
        .map((g) => g.values())
        .reduce((acc, val) => acc.concat(val), [])
    );

    const allowedValues = except(range(this.fullSize, 1), groupValues);

    return allowedValues;
  }

  getCellGroups(cell: GridCell) {
    return [this.rows[cell.row - 1], this.columns[cell.column - 1], this.squares[cell.square - 1]];
  }
}

export interface RawGrid {
  size: number;
  cells: RawGridCell[];
}
