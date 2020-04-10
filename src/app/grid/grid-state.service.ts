import { Injectable } from "@angular/core";
import { Grid } from "./model/grid";

@Injectable({
  providedIn: "root",
})
export class GridStateService {
  private LOCAL_STORAGE_KEY = "SUDOKU_GRID";

  private toRawGrid(grid: Grid) {
    return { size: grid.size, values: grid.cells.map((c) => c.value) };
  }

  private fromRawGrid(rawGrid: { size: number; values: number[] }) {
    return new Grid(rawGrid.size, rawGrid.values);
  }

  saveToLocalStorage(grid: Grid) {
    localStorage.setItem(
      this.LOCAL_STORAGE_KEY,
      JSON.stringify(this.toRawGrid(grid))
    );
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
