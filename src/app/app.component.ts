import { Component, OnInit } from "@angular/core";
import { Grid } from "./grid/model/grid";
import { GridSize } from "./grid/model/grid-size.enum";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  _grid: Grid;
  set grid(grid: Grid) {
    this._grid = grid;
    this._grid.saveToLocalStorage();
  }
  get grid() {
    return this._grid;
  }

  ngOnInit() {
    this.grid = Grid.loadFromLocalStorage() ?? new Grid(GridSize.Two);
  }

  onNewGrid(gridSize: GridSize) {
    this.grid = new Grid(gridSize);
  }
}
