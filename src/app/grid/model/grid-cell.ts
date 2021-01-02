export class GridCell {
  readonly row: number;
  readonly column: number;
  readonly square: number;

  value: number | null = null;
  original: boolean = true;

  constructor(cell?: Partial<GridCell>) {
    if (cell) {
      this.row = cell.row;
      this.column = cell.column;
      this.square = cell.square;
      this.value = cell.value;
    }
  }

  isSet() {
    return this.value !== null;
  }

  reset() {
    this.value = null;
  }
}

export type RawGridCell = Pick<GridCell, "value" | "original">;
