import { distinct } from "../../utils/array";
import { GridCell } from "./grid-cell";

export class GridCellGroup {
  cells: Array<GridCell> = [];

  constructor(cells: Array<GridCell> = []) {
    this.cells = [...cells];
  }

  values() {
    return this.cells.filter(c => c.isSet()).map(c => c.value);
  }

  isInvalid() {
    const values = this.values();

    return values.length !== distinct(values).length;
  }

  isValid() {
    const values = this.values();
    return (
      this.cells.every(c => c.isSet()) &&
      values.length === distinct(values).length
    );
  }

  hasFocus() {
    return this.cells.some(c => c.hasFocus);
  }
}
