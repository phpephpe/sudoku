import { Component, OnInit } from "@angular/core";
import { GridStateService } from "./grid/grid-state.service";
import { Grid } from "./grid/model/grid";
import { GridSize } from "./grid/model/grid-size.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  _grid: Grid;
  set grid(grid: Grid) {
    this._grid = grid;
    this.gridStateService.saveToLocalStorage(this._grid);
  }
  get grid() {
    return this._grid;
  }

  constructor(private gridStateService: GridStateService) {}

  ngOnInit() {
    this.grid =
      this.gridStateService.loadFromLocalStorage() ?? new Grid(GridSize.Two);
  }

  onNewGrid(gridSize: GridSize) {
    this.grid = new Grid(gridSize);
  }

  onGridChange() {
    this.gridStateService.saveToLocalStorage(this.grid);
  }
}
