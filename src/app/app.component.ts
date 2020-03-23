import { Component } from "@angular/core";
import { GridSize } from "./grid/grid-size.enum";
import { Grid } from "./grid/model/grid";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  grid: Grid;

  constructor() {
    this.grid = new Grid(GridSize.Three);
  }
}
