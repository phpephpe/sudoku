import { Injectable } from "@angular/core";
import { GridStorageService } from "./grid-storage.service";
import { Grid } from "./model/grid";
import { GridCell } from "./model/grid-cell";
import { GridSize } from "./model/grid-size.enum";

@Injectable({
  providedIn: "root",
})
export class GridService {
  _grid?: Grid;
  set grid(grid: Grid) {
    this._grid = grid;
    this.gridStorageService.saveToLocalStorage(this._grid);
  }
  get grid() {
    if (!this._grid) {
      this._grid = this.gridStorageService.loadFromLocalStorage();
    }
    return this._grid;
  }

  focusedCell?: GridCell;

  constructor(private gridStorageService: GridStorageService) {}

  new(gridSize: GridSize) {
    this.grid = new Grid(gridSize);
  }

  load() {
    this.grid = this.gridStorageService.loadFromLocalStorage() ?? new Grid(GridSize.Two);
  }

  save() {
    this.gridStorageService.saveToLocalStorage(this.grid);
  }

  setCellValue(value: number, cell: GridCell) {
    this.grid.cells.find((c) => c.column === cell.column && c.row === cell.row).value = value;
    this.save();
  }

  focusCell(cell: GridCell) {
    if (!cell.original) {
      this.focusedCell = cell;
    }
  }

  blurCell() {
    this.focusedCell = undefined;
  }

  isCellPartOfAFocusedGroup(cell: GridCell) {
    if (!this.focusedCell) {
      return false;
    }

    const { column, row, square } = cell;
    const { column: fcolumn, row: frow, square: fsquare } = this.focusedCell;

    return this.focusedCell && (column === fcolumn || row === frow || square === fsquare);
  }

  isFocusedCell(cell: GridCell) {
    return this.focusedCell === cell;
  }

  isCellInvalid(cell: GridCell) {
    return this.grid.getCellGroups(cell).some((g) => g.isInvalid());
  }

  isCellValid(cell: GridCell) {
    return !this.isCellInvalid(cell) && this.grid.getCellGroups(cell).some((g) => g.isValid());
  }
}
