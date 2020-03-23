import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Grid } from "../model/grid";
import { GridCell } from "../model/grid-cell";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent {
  @Input() grid: Grid;
  @Output() gridChange = new EventEmitter();

  onCellValueChange(value: number, cell: GridCell) {
    cell.value = value;
    this.gridChange.emit();
  }
}
