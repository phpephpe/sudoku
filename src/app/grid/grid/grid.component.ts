import { Component, Input } from "@angular/core";
import { range } from "../../../utils/math";
import { GridStateService } from "../grid-state.service";
import { Grid } from "../model/grid";
import { GridCell } from "../model/grid-cell";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.component.html",
  styleUrls: ["./grid.component.scss"],
})
export class GridComponent {
  @Input() grid: Grid;

  constructor(private gridStateService: GridStateService) {}

  onCellValueChange(value: number, cell: GridCell) {
    cell.value = value;
    this.gridStateService.saveToLocalStorage(this.grid);
  }

  range(start: number, count: number) {
    return range(count, start);
  }
}
