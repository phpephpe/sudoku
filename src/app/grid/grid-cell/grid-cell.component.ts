import { Component, Input, OnInit } from "@angular/core";
import { GridCell } from "../model/grid-cell";

@Component({
  selector: "app-grid-cell",
  templateUrl: "./grid-cell.component.html",
  styleUrls: ["./grid-cell.component.scss"]
})
export class GridCellComponent implements OnInit {
  @Input() cell: GridCell;
  value: number | null;

  ngOnInit() {
    this.value = this.cell?.value;
  }

  onKeydown = (event: KeyboardEvent) => (this.cell.value = +event.key);

  onFocus = () => (this.value = null);

  onBlur = () => (this.value = this.cell?.value);
}
