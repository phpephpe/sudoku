import { distinct, except } from "../../../utils/array";
import { range } from "../../../utils/math";
import { GridCellGroup } from "./grid-cell-group";

export class GridCell {
  readonly fullSize: number;
  readonly row: number;
  readonly column: number;
  readonly square: number;
  value: number | null = null;
  hasFocus: boolean;
  groups: GridCellGroup[] = [];

  constructor(cell: Partial<GridCell>, fullSize: number) {
    if (cell) {
      this.row = cell.row;
      this.column = cell.column;
      this.square = cell.square;
      this.value = cell?.value;
    }
    this.fullSize = fullSize;
  }

  isSet() {
    return this.value != null;
  }

  reset() {
    this.value = null;
  }

  everyPossibleValues() {
    return range(this.fullSize, 1);
  }

  allowedValues() {
    const groupValues = distinct(
      this.groups
        .map((g) => g.values())
        .reduce((acc, val) => acc.concat(val), [])
    );

    const allowedValues = except(this.everyPossibleValues(), groupValues);

    return allowedValues;
  }

  isInvalid() {
    return this.isSet() && this.groups.some((g) => g.isInvalid());
  }

  isValid() {
    return (
      this.isSet() && !this.isInvalid() && this.groups.some((g) => g.isValid())
    );
  }

  isFocused() {
    return this.groups.some((g) => g.hasFocus());
  }
}
