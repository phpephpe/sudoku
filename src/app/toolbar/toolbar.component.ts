import { Component, EventEmitter, Output } from "@angular/core";
import { GridSize } from "../grid/model/grid-size.enum";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent {
  GridSize = GridSize;

  @Output() newGrid = new EventEmitter<GridSize>();

  askForNewGrid(gridSize: GridSize) {
    this.newGrid.emit(gridSize);
  }
}
