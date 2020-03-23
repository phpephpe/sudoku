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

  isValid() {
    const values = this.values();
    const unique = distinct(values);

    return unique.length === values.length;
  }
}
