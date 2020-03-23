import { getRandomNumber, range } from "../../utils/math";
import { GridCell } from "./grid-cell";
import { GridCellGroup } from "./grid-cell-group";

export class Grid {
  readonly size: number;
  readonly fullSize: number;

  cells: Array<GridCell>;
  rows: GridCellGroup[];
  columns: GridCellGroup[];
  squares: GridCellGroup[];

  constructor(size: number) {
    this.size = size;
    this.fullSize = Math.pow(size, 2);

    this.createStructure();
    this.populateWithValues();
  }

  createStructure() {
    this.cells = range(this.fullSize)
      .map(r => range(this.fullSize).map(c => ({ r, c })))
      .reduce((acc, val) => acc.concat(val), [])
      .map(
        ({ r, c }) =>
          new GridCell(
            {
              row: r,
              column: c,
              square:
                Math.floor(r / this.size) * this.size +
                Math.floor(c / this.size)
            },
            this.fullSize
          )
      );

    this.rows = range(this.fullSize).map(
      i => new GridCellGroup(this.cells.filter(c => c.row === i))
    );
    this.rows.forEach(r => r.cells.forEach(c => c.groups.push(r)));

    this.columns = range(this.fullSize).map(
      i => new GridCellGroup(this.cells.filter(c => c.column === i))
    );
    this.columns.forEach(c => c.cells.forEach(ce => ce.groups.push(c)));

    this.squares = range(this.fullSize).map(
      i => new GridCellGroup(this.cells.filter(c => c.square === i))
    );
    this.squares.forEach(s => s.cells.forEach(c => c.groups.push(s)));
  }

  populateWithValues() {
    let done = false;

    while (!done) {
      for (let i = 0; i < this.cells.length; i++) {
        const allowedValues = this.cells[i].allowedValues();

        if (allowedValues.length === 0) {
          this.cells.forEach(c => c.reset());
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
}
