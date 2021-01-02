import { Injectable } from "@angular/core";
import { KeyboardEventKey } from "../../utils/keyboard-event-key.enum";
import { GridStorageService } from "./grid-storage.service";
import { Grid } from "./model/grid";
import { GridCell, GridCellCoordinates } from "./model/grid-cell";
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

  private findCell(cell: GridCellCoordinates) {
    return this.grid.cells.find((c) => c.column === cell.column && c.row === cell.row);
  }

  setCellValue(value: number) {
    this.focusedCell.value = value;
    this.save();
  }

  moveFocus(keyboardKey: KeyboardEventKey, fromCell?: GridCellCoordinates) {
    let { row, column } = fromCell ?? this.focusedCell;

    switch (keyboardKey) {
      case KeyboardEventKey.ArrowUp:
        row--;
        break;
      case KeyboardEventKey.ArrowDown:
        row++;
        break;
      case KeyboardEventKey.ArrowRight:
        column++;
        break;
      case KeyboardEventKey.ArrowLeft:
        column--;
        break;
    }

    if (row > this.grid.fullSize) {
      row = 1;
    } else if (row < 1) {
      row = this.grid.fullSize;
    }

    if (column > this.grid.fullSize) {
      column = 1;
    } else if (column < 1) {
      column = this.grid.fullSize;
    }

    const c = this.findCell({ row, column });

    if (c.original) {
      this.moveFocus(keyboardKey, { row, column });
    } else {
      this.focusCell({ row, column });
    }
  }

  focusCell(cell: GridCellCoordinates) {
    const c = this.findCell(cell);

    if (c.original) {
      return;
    }

    this.focusedCell = c;
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

    return column === fcolumn || row === frow || square === fsquare;
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
