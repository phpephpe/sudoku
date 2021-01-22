import { Injectable } from '@angular/core';
import { Grid, RawGrid } from './model/grid';

@Injectable({
  providedIn: 'root',
})
export class GridStorageService {
  private LOCAL_STORAGE_KEY = 'SUDOKU_GRID';

  private toRawGrid(grid: Grid): RawGrid {
    return {
      size: grid.size,
      cells: grid.cells.map((c) => {
        const { value, original } = c;
        return { value, original };
      }),
    };
  }

  private fromRawGrid(rawGrid: RawGrid) {
    return new Grid(rawGrid.size, rawGrid.cells);
  }

  saveToLocalStorage(grid: Grid) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(this.toRawGrid(grid)));
  }

  loadFromLocalStorage() {
    const value = localStorage.getItem(this.LOCAL_STORAGE_KEY);

    if (value) {
      return this.fromRawGrid(JSON.parse(value));
    }
  }

  deleteFromLocalStorage() {
    localStorage.removeItem(this.LOCAL_STORAGE_KEY);
  }
}
