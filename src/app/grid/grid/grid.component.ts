import { Component, Input } from "@angular/core";
import { Grid } from "../model/grid";
import { GridCell } from "../model/grid-cell";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"]
})
export class GridComponent {
  @Input() grid: Grid;

  constructor() {}

  onCellValueChange(value: number, cell: GridCell) {
    cell.value = value;

    this.grid.saveToLocalStorage();
  }
}
